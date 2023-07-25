/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.4';
import { Candidate } from '../../common/model';

const c1 = new Candidate('C', null, [], 'M');
const c2 = new Candidate('C', null, [], 'M', c1);
const c3 = new Candidate('C', null, [], 'M', c2);
const c4 = new Candidate('C', null, [], 'M', c3);

describe('Bonus Tests', () => {
  test('Bonus test 1', () => {
    expect(
      Utils.totalBonuses(c1, 10000))
      .toBe(
        0
      );
  });

  test('Bonus test 2', () => {
    expect(
      Utils.totalBonuses(c2, 10000))
      .toBe(
        10000
      );
  });

  test('Bonus test', () => {
    expect(
      Utils.totalBonuses(c3, 10000))
      .toBe(
        15000
      );
  });

  test('Bonus test 3', () => {
    expect(
      Utils.totalBonuses(c4, 10000))
      .toBe(
        17500
      );
  });
});

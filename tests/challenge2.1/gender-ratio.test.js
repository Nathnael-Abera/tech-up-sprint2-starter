/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.1';
import { Candidate, Skill } from '../../common/model';

const c1 = new Candidate('C1', new Date(2010, 1, 1), [new Skill('S1'), new Skill('S2', 0), new Skill('S3', 1)], 'F');
const c2 = new Candidate('C2', new Date(2011, 1, 1), [new Skill('S1', 1), new Skill('S2', 2)], 'F');
const c3 = new Candidate('C3', new Date(2012, 1, 1), [new Skill('S1', 2)], 'M');
const c4 = new Candidate('C3', new Date(2012, 1, 1), [new Skill('S1', 2)], 'F');

test('Gender ratio test', () => {
  expect(
    Utils.genderRatio([c1, c2, c3, c4]))
    .toEqual(
      '3.00'
    );
});

test('Gender ratio test', () => {
  expect(
    Utils.genderRatio([c2, c3, c4]))
    .toEqual(
      '2.00'
    );
});

test('Gender ratio test', () => {
  expect(
    Utils.genderRatio([c3, c4]))
    .toEqual(
      '1.00'
    );
});

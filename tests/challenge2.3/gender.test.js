/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.3';
import { Job, Candidate } from '../../common/model';

const j1 = new Job('J1', '', undefined, 'M');
const j2 = new Job('J2', '', undefined, 'F');
const j3 = new Job('J3');

const c = new Candidate('C', null, [], 'M');

test('Gender match test', () => {
  expect(
    Utils.suitableGender(c, j1))
    .toBe(
      true
    );
});

test('Gender match test', () => {
  expect(
    Utils.suitableGender(c, j2))
    .toBe(
      false
    );
});

test('Gender match test', () => {
  expect(
    Utils.suitableGender(c, j3))
    .toBe(
      true
    );
});

/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.1';
import { Candidate } from '../../common/model';

const c1 = new Candidate('C1', new Date(2010, 1, 1));
const c2 = new Candidate('C2', new Date(2011, 1, 1));
const c3 = new Candidate('C3', new Date(2012, 1, 1));

test('Filter by birthdate test', () => {
  expect(
    Utils.filterByBornAfter([c1, c2, c3], new Date(2012, 0, 1)))
    .toEqual(
      [c3]
    );

  expect(
    Utils.filterByBornAfter([c1, c2, c3], new Date(2012, 1, 1)))
    .toEqual(
      [c3]
    );
});

test('Filter by birthdate test', () => {
  expect(
    Utils.filterByBornAfter([c1, c2, c3], new Date(2011, 0, 1)))
    .toEqual(
      [c2, c3]
    );

  expect(
    Utils.filterByBornAfter([c1, c2, c3], new Date(2011, 1, 1)))
    .toEqual(
      [c2, c3]
    );
});

test('Filter by birthdate test', () => {
  expect(
    Utils.filterByBornAfter([c1, c2, c3], new Date(2000, 0, 1)))
    .toEqual(
      [c1, c2, c3]
    );

  expect(
    Utils.filterByBornAfter([c1, c2, c3], new Date(2000, 1, 1)))
    .toEqual(
      [c1, c2, c3]
    );
});

/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.1';
import { Job } from '../../common/model';

const j1 = new Job('job1', '', [], undefined, new Date(2023, 1, 1));
const j2 = new Job('job2', '', [], undefined, new Date(2023, 2, 1));
const j3 = new Job('job3', '', [], undefined, new Date(2023, 3, 1));

test('Filter by date test', () => {
  expect(
    Utils.filterByDate([j1, j2, j3], new Date(2023, 1, 1), new Date(2023, 1, 20)))
    .toEqual(
      [j1]
    );
});

test('Filter by date test', () => {
  expect(Utils.filterByDate([j1, j2, j3], new Date(2023, 1, 1), new Date(2023, 2, 1)))
    .toEqual([j1, j2]);
});

test('Filter by date test', () => {
  expect(Utils.filterByDate([j1, j2, j3], new Date(2023, 1, 1), new Date(2023, 3, 1)))
    .toEqual([j1, j2, j3]);
});

test('Filter by date test', () => {
  expect(Utils.filterByDate([j1, j2, j3], new Date(2023, 3, 2), new Date(2023, 3, 31)))
    .toEqual([]);
});

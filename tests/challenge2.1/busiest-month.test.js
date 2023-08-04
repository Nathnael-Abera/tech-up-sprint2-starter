/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.1';
import { Job } from '../../common/model';

const j1 = new Job('job1', '', [], undefined, new Date(2023, 1, 1));
const j2 = new Job('job2', '', [], undefined, new Date(2023, 2, 1));
const j3 = new Job('job2', '', [], undefined, new Date(2023, 2, 1));
const j4 = new Job('job3', '', [], undefined, new Date(2023, 3, 1));
const j5 = new Job('job3', '', [], undefined, new Date(2023, 3, 1));
const j6 = new Job('job3', '', [], undefined, new Date(2023, 3, 1));

test('Busiest Month Test', () => {
  expect(Utils.busiestMonth([j1, j2, j3, j4, j5, j6]))
    .toEqual('3');
});

test('Busiest Month Test', () => {
  expect(Utils.busiestMonth([j1, j2, j3, j4]))
    .toEqual('2');
});

test('Busiest Month Test', () => {
  expect(Utils.busiestMonth([j1, j2, j3, j4, j5, j6]))
    .toEqual('3');
});

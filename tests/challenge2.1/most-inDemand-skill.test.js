/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.1';
import { Job, Skill } from '../../common/model';

const j1 = new Job('job1', '', [new Skill('S1'), new Skill('S2', 0), new Skill('S3', 1), new Skill('S4', 1)], undefined, new Date(2023, 1, 1));
const j2 = new Job('job2', '', [new Skill('S1'), new Skill('S2', 0), new Skill('S3', 1), new Skill('S4', 1)], undefined, new Date(2023, 2, 1));
const j3 = new Job('job2', '', [new Skill('S3', 1)], undefined, new Date(2023, 2, 1));
const j4 = new Job('job3', '', [new Skill('S1')], undefined, new Date(2023, 3, 1));

test('Most in demand skill test', () => {
  expect(Utils.mostInDemandSkill([j1, j2, j3, j4]))
    .toEqual('S1');
});

test('Most in demand skill test', () => {
  expect(Utils.mostInDemandSkill([j1, j2, j3]))
    .toEqual('S3');
});

test('Most in demand skill test', () => {
  expect(Utils.mostInDemandSkill([j1, j2]))
    .toEqual('S1');
});

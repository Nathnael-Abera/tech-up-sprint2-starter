/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.2';
import { Candidate } from '../../common/model';

const c1 = new Candidate('Berhane Abraham', new Date(2010, 1, 1));
const c2 = new Candidate('Birhane Abrham', new Date(2010, 1, 10));
const c3 = new Candidate('Berhane', new Date(2010, 1, 14));
const c4 = new Candidate('Berhane Abraham', new Date(2010, 1, 5));

test('Possible Duplicate Test', () => {
  expect(Utils.possibleDuplicates(c1, [c2, c3, c4]))
    .toEqual([c2, c4]);
});

test('Possible Duplicate Test', () => {
  expect(Utils.possibleDuplicates(c3, [c1, c2, c4]))
    .toEqual([]);
});

test('Possible Duplicate Test', () => {
  expect(Utils.possibleDuplicates(c2, [c1, c3, c4]))
    .toEqual([c1, c4]);
});

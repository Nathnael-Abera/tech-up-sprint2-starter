/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.2';
import { Candidate } from '../../common/model';

const c1 = new Candidate('Berhane Abraham', new Date(2010, 1, 1));
const c2 = new Candidate('Birhane Abrham', new Date(2010, 1, 10));
const c3 = new Candidate('Berhane', new Date(2010, 1, 14));
const c4 = new Candidate('Berhhane', new Date(2010, 1, 14));
const c5 = new Candidate('Berhane Abraham', new Date(2010, 1, 5));
const c6 = new Candidate('Berihhane', new Date(2010, 1, 5));

test('Duplicate count test', () => {
  expect(Utils.duplicateCount([c1, c2, c3]))
    .toEqual(1);
});

test('Duplicate count test', () => {
  expect(Utils.duplicateCount([c2, c3, c4, c5]))
    .toEqual(2);
});

test('Duplicate count test', () => {
  expect(Utils.duplicateCount([c1, c2, c3, c4, c5, c6]))
    .toEqual(2);
});

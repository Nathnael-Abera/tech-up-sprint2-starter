/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.2';
import { Candidate } from '../../common/model';

const c1 = new Candidate('Berhane Abraham', new Date(2010, 1, 1));
const c2 = new Candidate('Birhane Abrham', new Date(2010, 1, 10));
const c3 = new Candidate('Berhane', new Date(2010, 1, 14));
const c4 = new Candidate('Berhane Abraham', new Date(2010, 1, 5));

test('Candidate index test', () => {
  expect(Utils.candidateIndex([c1, c2]))
    .toEqual(
      {
        BRHNBRHM: [c1, c2]
      }
    );
});

test('Candidate index test', () => {
  expect(Utils.candidateIndex([c2, c3]))
    .toEqual(
      {
        BRHNBRHM: [c2],
        BRHN: [c3]
      }
    );
});

test('Candidate index test', () => {
  expect(Utils.candidateIndex([c1, c2, c3]))
    .toEqual(
      {
        BRHNBRHM: [c1, c2],
        BRHN: [c3]
      }
    );
});

test('Candidate index test', () => {
  expect(Utils.candidateIndex([c1, c2, c3, c4]))
    .toEqual(
      {
        BRHNBRHM: [c1, c2, c4],
        BRHN: [c3]
      }
    );
});

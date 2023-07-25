/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.2';
import { Candidate } from '../../common/model';

test('Similar candidates test', () => {
  const c1 = new Candidate('Berhane Abraham', new Date(2010, 1, 1));
  const c2 = new Candidate('Birhane Abrham', new Date(2010, 1, 5));

  expect(Utils.areSimilarCandidates(c1, c2)).toBe(true);
});

test('Similar candidates test', () => {
  const c1 = new Candidate('Berhane Abraham', new Date(2010, 1, 1));
  const c2 = new Candidate('Birhane Abrham', new Date(2010, 2, 5));

  expect(Utils.areSimilarCandidates(c1, c2)).toBe(false);
});

test('Similar candidates test', () => {
  const c1 = new Candidate('Berhane Abraham', new Date(2010, 1, 1));
  const c2 = new Candidate('Berhane', new Date(2010, 1, 1));

  expect(Utils.areSimilarCandidates(c1, c2)).toBe(false);
});

test('Similar candidates test', () => {
  const c1 = new Candidate('Berhane Abraham', new Date(2010, 1, 10));
  const c2 = new Candidate('Berhane Abraham', new Date(2010, 1, 5));

  expect(Utils.areSimilarCandidates(c1, c2)).toBe(true);
});

test('Similar candidates test', () => {
  const c1 = new Candidate('Berhane Abraham', new Date(2010, 1, 1));
  const c2 = new Candidate('Birhane Abrham', new Date(2010, 1, 5));

  expect(Utils.areSimilarCandidates(c1, c2)).toBe(true);
});

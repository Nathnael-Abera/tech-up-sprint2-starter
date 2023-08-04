/* eslint-disable no-unused-vars */
import { Candidate, Skill } from '../common/model.js';

/**
 * Part 2: Duplicate Candidate Detection
 * ------------------------------------------
 *
 * One of the challenges when building an ATS is preventing duplicate entries in the candidate database.
 * We want to prevent scenarios where the same person, knowingly or otherwise, get registered multiple times using different
 * phone numbers or email.
 * This is especially difficult with Ethiopian names where the same name can be written in different ways:
 * - eg: ብርሃኔ = Berhane, Birhane, Birhanie, Birhanne etc
 * - eg: ብስራት = Bisrat, Bsrat, Besrat, Bsrate, Bissrat
 * - eg: አብረሃም = Abreham, Abrham, Abraham, Abriham
 */

/**
 * One strategy for detecting duplicate names is to compare normalized versions of each name.
 * 1. Vowels are often used interchangeably, so we will remove all instances of vowels, ** EXCEPT in the first character **.
 *      eg. Abreham -> Abrhm, Birhanie -> Brhn
 * 2. We will remove double letters. Eg. Bissrat -> Bssrt -> Bsrt
 * 3. We'll remove all non-character letters, eg. spaces, '-' or '/'; Wolde Mariam -> Wld Mrm -> Wldmrm
 * 3. we'll make all characters uppercase. Abreham -> Abrhm -> ABRHM
 *
 * This function returns a normalized version of the given string, according to the
 * above rules.
 *
 * @param {String} name
 * @returns String
 */
const normalizedName = (name) => {
  // ----- Challenge 2.2.1 - Complete the function here ---- //
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  name = name.replace(/[^A-Za-z]/g, '');
  name = name.toUpperCase();
  name = name.replace(/(.)\1+/g, '$1');
  const firstLetter = vowels.includes(name[0]) ? name[0] : '';
  name = name.replace(/[AEIOU]/g, '');

  return firstLetter + name;
};

/**
 * This function compares two candidates and returns true if all of the following are true:
 * - the candidates' normalized names are identical
 * - their dates of birth have no more than 10 days difference.
 *
 * @param {Candidate} candidate1
 * @param {Candidate} candidate2
 * @returns true or false
 */

const areSimilarCandidates = (candidate1, candidate2) => {
  // ----- Challenge 2.2.2 - Complete the function here ---- //
  const dayMilSecond = 24 * 60 * 60 * 1000;
  return Math.abs(candidate1.dateOfBirth - candidate2.dateOfBirth) / dayMilSecond <= 10 &&
  normalizedName(candidate1.name) === normalizedName(candidate2.name);
};

/**
 * Given a candidate, return possible duplicates of this candidate
 * in the given candidateList.
 *
 * @param {Candidate} newCandidate
 * @param {Array<Candidate>} candidateList
 */
const possibleDuplicates = (newCandidate, candidateList) => {
  // ------ Challenge 2.2.3 - Complete the function here ---- //
  const posibbleDuplicate = [];
  candidateList.forEach((candidate) => {
    if (areSimilarCandidates(candidate, newCandidate)) {
      posibbleDuplicate.push(candidate);
    }
  });
  return posibbleDuplicate;
};

/**
 * We want to transform the given candidate list into a dictionary index
 * that enable us to lookup a normalized name and get all the corresponding candidates.
 * A sample output may be:
 * { 'ABRHM' -> [ Candidate {name: 'Abraham', ...},
 *                Candidate {name: 'Abreham', ...},
 *              ],
 *   'BRHN'  -> [ Candidate {name: 'Berhane', ...},
 *                Candidate {name: 'Brhanne', ...},
 *              ]
 * }
 *
 * @param {Array<Candidate>} candidateList
 * @returns
 */

const candidateIndex = (candidateList) => {
  // ------ Challenge 2.2.4 - Complete the function here ---- //
  const candidateNameObj = {};

  candidateList.forEach((candidate) => {
    const normalName = normalizedName(candidate.name);

    normalName in candidateNameObj
      ? candidateNameObj[normalName].push(candidate)
      : candidateNameObj[normalName] = [candidate];
  });
  return candidateNameObj;
};

/**
 * Find the number of (likely) duplicates in the given list,
 * according to the rules implemented in the areSimilarCandidates function.
 *
 * The candidateList can be a very large list, so the solution should only traverse the list once.
 *
 * @param {Array<Candidate>} candidateList
 *
 * @returns
 */

const duplicateCount = (candidateList) => {
  // ------ Challenge 2.2.5 - Complete the function here ---- //
  let duplicateCount = 0;
  const duplicated = [];
  candidateList.forEach((candidate) => {
    if (duplicated.includes(candidate) ||
    possibleDuplicates(candidate, candidateList).length < 2) {
      return;
    }
    duplicated.push(...possibleDuplicates(candidate, candidateList));
    duplicateCount++;
  });
  return duplicateCount;
};

export { normalizedName, areSimilarCandidates, possibleDuplicates, duplicateCount, candidateIndex };

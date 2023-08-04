/* eslint-disable no-unused-vars */
import { Job, Candidate, Skill } from '../common/model.js';
/**
 * Part 1: Basic utility functions.
 *
 * The challenge is to create optimal solutions for implementing some of the
 * common utility functions that we will need to build our ATS solution.
/**
 * Filter the given jobs list and return only jobs that start between the given
 * start and end dates.
 *
 * @param {Array<Job>} jobs
 * @param {Date} startDate
 * @param {Date} endDate
 */
const filterByDate = (jobs, startDate, endDate) => {
  // ----- Challenge 2.1.1 - Complete the function here ---- //
  const filteredJobs = jobs.filter((job) => {
    return job.startDate >= startDate && job.startDate <= endDate;
  });
  return filteredJobs;
};
/**
 * Filter the given candidates list and return only candidates that are born
 * on or after the given date.
 *
 * @param {Array<Candidate>} candidates
 * @param {Date} date
 */
const filterByBornAfter = (candidates, date) => {
  // ----- Challenge 2.1.2 - Complete the function here ---- //
  const bornFilter = candidates.filter((candidate) => {
    return candidate.dateOfBirth >= date;
  });
  return bornFilter;
};
/**
 * Sort the given candidate list, so that candidates with most skills,
 * regardless of the levels, are at the beginning.
 *
 * @param {*} candidateList
 * @returns
 */
const orderBySkills = (candidateList) => {
  // ----- Challenge 2.1.3 - Complete the function here ---- //
  const mostSkills = [];
  const mostSkillCandidate = [];
  candidateList.forEach((candidate) => {
    const skill = candidate.skills;
    mostSkills.push(skill.length);
    skill.length >= Math.max(...mostSkills)
      ? mostSkillCandidate.unshift(candidate)
      : mostSkillCandidate.push(candidate);
  });
  return mostSkillCandidate;
};
/**
 * Sort the given candidate list, so that candidates with more valuable skills,
 * are at the beginning.
 * Each skill will be weighed as follows: Expert levels count as 10, Advanced levels count as 5, Beginner levels count as 1
 *
 * @param {Array<Candidate>} candidateList
 * @returns
 */
const orderByWeightedSkills = (candidateList) => {
  // ----- Challenge 2.1.4 - Complete the function here ---- //
  const skillValues = [];
  const skillLevelSort = [];
  const skillLevel = { 0: 1, 1: 5, 2: 10 };
  candidateList.forEach((candidate) => {
    let skillSum = 0;
    candidate.skills.forEach((skill) => {
      skillSum += skillLevel[skill.level];
    });
    skillValues.push(skillSum);
    skillValues.sort((a, b) => b - a);
    skillLevelSort.splice(skillValues.indexOf(skillSum), 0, candidate);
  });
  return skillLevelSort;
};
/**
 * Return the ratio of female/male candidates in the list
 * @param {Array<Candidate>} candidateList
 * @returns a floating point number indicating the ratio
 */
const genderRatio = (candidateList) => {
  // ----- Challenge 2.1.5 - Complete the function here ---- //
  let genderRatio = 0;
  let maleCount = 0;
  let femaleCount = 0;
  candidateList.forEach((candidate) => {
    if (candidate.gender === 'M') {
      maleCount++;
    } else if (candidate.gender === 'F') {
      femaleCount++;
    }
  });
  genderRatio = femaleCount / maleCount;
  return genderRatio.toFixed(2);
};
/**
 * Return the month with the highest number of jobs starting,
 * indicated by the startDate property of each Job.
 * @param {Array<Job>} jobs
 * @returns number (0-11)
 */
const busiestMonth = (jobs) => {
  // ----- Challenge 2.1.6 - Complete the function here ---- //
  const months = [];
  const frequency = {};
  jobs.forEach((job) => {
    months.push(job.startDate.getMonth());
  });
  for (let i = 0; i < months.length; i++) {
    months[i] in frequency ? frequency[months[i]] += 1 : frequency[months[i]] = 1;
  }
  const values = Object.values(frequency);
  const maxValue = Math.max(...values);
  const mostFrequentMonth = Object.entries(frequency).find(([k, v]) => v === maxValue)?.[0];
  return mostFrequentMonth;
};
/**
 * Return the skill name that is required the most in the given list of Jobs,
 * indicated by the requiredSkills property of each Job.
 *
 * @param {Array<Job>} jobs
 */
const mostInDemandSkill = (jobs) => {
// ----- Challenge 2.1.7 - Complete the function here ---- //
  const requiredSkillFreq = {};
  jobs.forEach((job) => {
    job.requiredSkills.forEach((skill) => {
      skill.name in requiredSkillFreq ? requiredSkillFreq[skill.name] += 1 : requiredSkillFreq[skill.name] = 1;
    });
  });
  const values = Object.values(requiredSkillFreq);
  const maxValue = Math.max(...values);
  const mostFrequentSkill = Object.entries(requiredSkillFreq).find(([k, v]) => v === maxValue)?.[0];
  return mostFrequentSkill;
};
export { filterByDate, filterByBornAfter, orderBySkills, orderByWeightedSkills, genderRatio, busiestMonth, mostInDemandSkill };
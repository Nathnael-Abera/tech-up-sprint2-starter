// ------------------------------------------------------------------------------------//

/**
 * Represents a capability relevant to a candidate or a job.
 * Eg. Javascript, Communication, Driving...
 *
 * @param {*} name
 * @param {*} level
 */
const Skill = class {
  constructor (name, level = 0) {
    this.name = name;
    this.level = level;
  }

  name;
  level; // 0 = beginner, 1 = advanced, 2 = expert
};

// ------------------------------------------------------------------------------------//
/**
 *
 * @param {*} title
 * @param {*} description
 * @param {*} requiredSkills
 * @param {*} requiredGender
 */
const Job = class {
  constructor (title, description, requiredSkills = [], requiredGender = undefined, startDate = undefined) {
    this.title = title;
    this.description = description;
    this.requiredSkills = requiredSkills;
    this.requiredGender = requiredGender;
    this.startDate = startDate;
  }

  title;
  description;
  requiredSkills = []; // of Skill
  requiredGender; // 'M' or 'F' or undefined if no gender requirement
  startDate;
};

// ------------------------------------------------------------------------------------//

const Candidate = class {
  constructor (name, dateOfBirth, skills = [], gender = 'F', recommendedBy = null) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.skills = skills;
    this.gender = gender;
    this.recommendedBy = recommendedBy;
  }

  name;
  dateOfBirth;
  skills = []; // of Skill
  gender; // 'F' or 'M'
  recommendedBy; // Candidate
};

export { Skill, Job, Candidate };

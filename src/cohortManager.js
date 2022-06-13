// const Cohort = require('../src/cohort.js')

class CohortManager {
  constructor() {
    this.cohorts = []
  }

  addCohort(name) {
    this.cohorts.push(name)

    return this.cohorts
  }

  findCohort(cohortName) {
    return this.cohorts.find((element) => element.name === cohortName)
  }

  removeCohort(cohortName) {
    this.cohorts = this.cohorts.filter((element) => element.name !== cohortName)

    return this.cohorts
  }

  addStudent(cohortName, id, firstName, surname, github, emailAddress) {
    const student = {
      studentId: id,
      firstName: firstName,
      lastName: surname,
      githubUsername: github,
      email: emailAddress
    }

    const cohortToAddTo = this.findCohort(cohortName).cohort

    cohortToAddTo.push(student)

    return cohortToAddTo
  }

  // studentSearchById() {

  // }

  // allStudentsMatchingName() {

  // }

  // The below can search all students matching name then filter by cohortname to ensure the right one

  // removeStudent(cohortName, id, firstName, surname, github, emailAddress) {
  //   const student = {
  //     studentId: id,
  //     firstName: firstName,
  //     lastName: surname,
  //     githubUsername: github,
  //     email: emailAddress
  //   }

  //   const cohortToAddTo = this.findCohort(cohortName).cohort

  //   cohortToAddTo.push(student)

  //   return cohortToAddTo
  // }
}

// let cohort1
// cohort1 = new Cohort('cohort1');
// let cohortManager
// cohortManager = new CohortManager();
// console.log(cohortManager.addCohort(cohort1))

module.exports = CohortManager

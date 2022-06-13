// const Cohort = require('../src/cohort.js')

class CohortManager {
  constructor() {
    this.cohorts = []
  }

  addCohort(cohortName) {
    this.cohorts.push(cohortName)

    return this.cohorts
  }

  findCohort(cohortName) {
    if (
      this.cohorts.find((element) => element.name === cohortName) === undefined
    ) {
      return 'Error 404, this cohort could not be found'
    }

    return this.cohorts.find((element) => element.name === cohortName)
  }

  removeCohort(cohortName) {
    if (
      this.cohorts.find((element) => element.name === cohortName) === undefined
    ) {
      return 'Error 404, this cohort could not be found'
    }

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

    if (
      this.cohorts.find((element) => element.name === cohortName) === undefined
    ) {
      return 'Error 404, this cohort could not be found'
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

  removeStudent(cohortName, id, firstName, surname) {
    if (
      this.cohorts.find((element) => element.name === cohortName) === undefined
    ) {
      return 'Error 404, this cohort could not be found'
    }

    let cohortToRemoveFrom = this.findCohort(cohortName).cohort

    if (
      cohortToRemoveFrom.find((element) => element.studentId === id) ===
        undefined ||
      cohortToRemoveFrom.find((element) => element.firstName === firstName) ===
        undefined ||
      cohortToRemoveFrom.find((element) => element.lastName === surname) ===
        undefined
    ) {
      return 'Error 404, this student could not be found'
    }

    cohortToRemoveFrom = cohortToRemoveFrom.filter(
      (element) =>
        element.studentId !== id &&
        element.firstName !== firstName &&
        element.lastName !== surname
    )

    return cohortToRemoveFrom
  }

  // studentSearchById(id) {
  //   let studentsCohort = {}

  //   for (let i = 0; i < this.cohorts.length; i++) {
  //     studentsCohort = this.cohorts[i].cohort.find((element) => element.studentId === id)
  //   }

  //   return studentsCohort
  // }
}

// let cohort1
// cohort1 = new Cohort('cohort1');
// let cohortManager
// cohortManager = new CohortManager();
// console.log(cohortManager.addCohort(cohort1))

module.exports = CohortManager

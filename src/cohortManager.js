const Cohort = require('../src/cohort.js')

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

  addStudent(cohort, cohortName, id, firstName, surname, github, emailAddress) {
    const cohortWithNewStudent = cohort.addStudent(
      id,
      firstName,
      surname,
      github,
      emailAddress
    )

    const arrayWithoutTheCohortStudentIsBeingAddedTo = this.cohorts.filter(
      (element) => element.name !== cohortName
    )

    arrayWithoutTheCohortStudentIsBeingAddedTo.push(cohortWithNewStudent)

    this.cohorts = arrayWithoutTheCohortStudentIsBeingAddedTo

    return this.findCohort(cohortName)
  }

  removeCohort(cohortName) {
    if (
      this.cohorts.find((element) => element.name === cohortName) === undefined
    ) {
      return 'Error 404, this cohort could not be found'
    }

    return (this.cohorts = this.cohorts.filter(
      (element) => element.name !== cohortName
    ))
  }

  removeStudent(cohort, cohortName, id) {
    if (
      cohort === undefined ||
      this.cohorts.find((element) => element.name === cohortName) === undefined
    ) {
      return 'Error 404, this cohort could not be found'
    }

    const cohortWithStudentRemoved = cohort.removeStudentById(id)

    const cohortsWithoutCohortStudentWasRemovedFrom = this.cohorts.filter(
      (element) => element.name !== cohortName
    )

    this.cohorts = cohortsWithoutCohortStudentWasRemovedFrom

    this.cohorts.push(cohortWithStudentRemoved)

    return this.cohorts
  }
}

let cohort1
cohort1 = new Cohort('cohort1')
cohort1 = 0
console.log(cohort1)

module.exports = CohortManager

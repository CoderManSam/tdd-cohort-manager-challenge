const Cohort = require('../src/cohort.js')

class CohortManager {
  constructor() {
    this.cohorts = []
  }

  addCohort(cohortName) {
    // return this.studentInAnotherCohortCheck(cohortName)

    for (let i = 0; i < this.cohorts.length; i++) {
      if (cohortName.name === this.cohorts[i].name) {
        return 'error, this cohort cannot be added as a cohort already exists with this name'
      }
    }

    this.cohorts.push(cohortName)

    return this.cohorts
  }

  // METHOD IS INCOMPLETE AND HAS THEREFORE BEEN COMMENTED OUT
  // studentInAnotherCohortCheck(cohortName) {

  //   let cohortCheck = true

  //   const cohortToAdd = cohortName.getCohort()

  //   for(let j = 0; j < cohortToAdd.length; j++) {

  //     const student = {
  //       studentId: cohortToAdd[j].studentId,
  //       firstName: cohortToAdd[j].firstName,
  //       lastName: cohortToAdd[j].lastName,
  //       githubUsername: cohortToAdd[j].githubUsername,
  //       email: cohortToAdd[j].email
  //     }

  //     for(let i = 0; i < this.cohorts.length; i++) {

  //       const cohort = this.cohorts[i].getCohort()

  //       cohortCheck = cohort.find(((element) => element.firstName === student.studentId) &&
  //                                       ((element) => element.lastName === student.firstName) &&
  //                                       ((element) => element.lastName === student.lastName) &&
  //                                       ((element) => element.lastName === student.githubUsername) &&
  //                                       ((element) => element.lastName === student.email))

  //                                       console.log("student is : ", student)
  //     }

  //   }

  //   return cohortCheck

  // }

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

  studentSearchByName(firstName, lastName) {
    const result = []

    for (let i = 0; i < this.cohorts.length; i++) {
      const cohort = this.cohorts[i].getCohort()

      const filteredCohort = cohort.filter(
        ((element) => element.firstName === firstName) &&
          ((element) => element.lastName === lastName)
      )

      result.push(filteredCohort[0])
    }

    return result
  }
}

let cohort1
cohort1 = new Cohort('cohort1')
cohort1 = 0
console.log(cohort1)

module.exports = CohortManager

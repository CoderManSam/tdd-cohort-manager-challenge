class Cohort {
  constructor(name) {
    this.name = name
    this.cohort = []
    this.capacity = 24
  }

  getCohort() {
    return this.cohort
  }

  addStudent(id, firstName, surname, github, emailAddress) {
    const student = {
      studentId: id,
      firstName: firstName,
      lastName: surname,
      githubUsername: github,
      email: emailAddress
    }

    if (this.cohort.length === this.capacity) {
      return 'error, cohort is full, unable to add this student to the cohort'
    }

    this.cohort.push(student)

    return this
  }

  studentSearchById(id) {
    const searchById = this.cohort.find((element) => element.studentId === id)

    if (searchById === undefined) {
      return 'error 404, this student could not be found'
    }

    return searchById
  }

  removeStudentById(id) {
    if (this.cohort.find((element) => element.studentId === id) === undefined) {
      return 'error 404, this student could not be found'
    }

    this.cohort = this.cohort.filter((element) => element.studentId !== id)

    return this
  }
}

module.exports = Cohort

class Cohort {
  constructor(name) {
    this.name = name
    this.cohort = []
    this.capacity = 24
  }

  addStudent(id, firstName, surname, github, emailAddress) {
    const student = {
      studentId: id,
      firstName: firstName,
      lastName: surname,
      githubUsername: github,
      email: emailAddress
    }

    this.cohort.push(student)

    return this.cohort
  }
}

// console.log(new Cohort(cohort1));
// console.log(new Cohort(cohort2));
// console.log(new Cohort(cohort3));

module.exports = Cohort

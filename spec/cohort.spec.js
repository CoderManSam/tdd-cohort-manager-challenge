const Cohort = require("../src/cohort.js");
const CohortManager = require("../src/cohortManager.js");

describe("Cohort", () => {
    let cohort1
    let cohort2
    let cohort3
    let cohortManager

    beforeEach(() => {
        cohort1 = new Cohort("cohort1");
        cohort2 = new Cohort("cohort2");
        cohort3 = new Cohort("cohort3");
        cohortManager = new CohortManager();
    });


    it("Create a cohort with a cohort name", () => {
        let cohort4
        cohort4 = new Cohort("cohort4");
        cohortManager.addCohort(cohort4)
        const expected = "cohort4"
        const result = cohortManager.findCohort("cohort4").name
        expect(result).toEqual(expected);
    });


    it("Search for a cohort by cohort name", () => {
        cohortManager.addCohort(cohort1)
        cohortManager.addCohort(cohort2)
        const expected = "cohort2"
        const result = cohortManager.findCohort("cohort2").name
        expect(result).toEqual(expected);
    });

    it("When searching for a cohort by cohort name, return an error message if the cohort cannot be found", () => {
        cohortManager.addCohort(cohort1)
        cohortManager.addCohort(cohort2)
        const expected = "Error 404, this cohort could not be found"
        const result = cohortManager.findCohort("cohort3")
        expect(result).toEqual(expected);
    });

    it("Add student to a cohort", () => {
        const expected = [{
            studentId: 1,
            firstName: "jacob",
            lastName: "smith",
            githubUsername: "smithyJ",
            email: "smithyJ@gmail.com"
        }]
        const result = cohort1.addStudent(1, "jacob", "smith", "smithyJ", "smithyJ@gmail.com")
        expect(result).toEqual(expected);
    });

    it("Add student to a specific cohort", () => {
        cohortManager.addCohort(cohort1)
        cohortManager.addCohort(cohort2)
        const expected = [{
            studentId: 1,
            firstName: "jacob",
            lastName: "smith",
            githubUsername: "smithyJ",
            email: "smithyJ@gmail.com"
        }]
        const result = cohortManager.addStudent("cohort1", 1, "jacob", "smith", "smithyJ", "smithyJ@gmail.com")
        expect(result).toEqual(expected);
    });

    it("Remove a cohort by cohort name", () => {
        cohortManager.addCohort(cohort1)
        cohortManager.addCohort(cohort2)
        cohortManager.addCohort(cohort3)
        cohortManager.removeCohort("cohort1")
        const expected = "cohort2 + cohort3"
        const result = cohortManager.findCohort("cohort2").name + " + " + cohortManager.findCohort("cohort3").name  
        expect(result).toEqual(expected);
    });

    it("Remove student from a specific cohort", () => {
        cohortManager.addCohort(cohort1)
        cohortManager.addCohort(cohort2)
        cohortManager.addStudent("cohort1", 1, "jacob", "smith", "smithyJ", "smithyJ@gmail.com")
        cohortManager.addStudent("cohort1", 2, "jason", "samoa", "jazzyS", "jazzyS@gmail.com")
        const expected = [{
            studentId: 2,
            firstName: "jason",
            lastName: "samoa",
            githubUsername: "jazzyS",
            email: "jazzyS@gmail.com"
        }]
        const result = cohortManager.removeStudent("cohort1", 1, "jacob", "smith", "smithyJ", "smithyJ@gmail.com")
        expect(result).toEqual(expected);
    });

    it("Error message if student cannot be found", () => {
        cohortManager.addCohort(cohort1)
        cohortManager.addCohort(cohort2)
        cohortManager.addStudent("cohort1", 1, "jacob", "smith", "smithyJ", "smithyJ@gmail.com")
        cohortManager.addStudent("cohort1", 2, "jason", "samoa", "jazzyS", "jazzyS@gmail.com")
        const expected = "Error 404, this student could not be found"
        const result = cohortManager.removeStudent("cohort1", 1, "jill", "smith", "smithyJ", "smithyJ@gmail.com")
        expect(result).toEqual(expected);
    });

})    
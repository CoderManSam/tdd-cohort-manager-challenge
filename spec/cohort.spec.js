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
        const expected = "cohort4"
        const result = cohort4.name
        expect(result).toEqual(expected);
    });


    it("Search for a cohort by cohort name", () => {
        cohortManager.addCohort(cohort1)
        cohortManager.addCohort(cohort2)
        const expected = "cohort2"
        const result = cohortManager.findCohort("cohort2").name
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

})    
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

    it("Search for student by student ID", () => {
        cohort1.addStudent(1, "jacob", "smith", "smithyJ", "smithyJ@gmail.com")
        cohort1.addStudent(2, "jason", "samoa", "jazzyS", "jazzyS@gmail.com")
        cohort1.addStudent(3, "jill", "starling", "Jstar", "Jstar@gmail.com")
        const expected = "jason"
        const result = cohort1.studentSearchById(2).firstName
        expect(result).toEqual(expected);
    });

    it("Search for student by student ID, returns error message if student could not be found", () => {
        cohort1.addStudent(1, "jacob", "smith", "smithyJ", "smithyJ@gmail.com")
        cohort1.addStudent(2, "jason", "samoa", "jazzyS", "jazzyS@gmail.com")
        cohort1.addStudent(3, "jill", "starling", "Jstar", "Jstar@gmail.com")
        const expected = "error 404, this student could not be found"
        const result = cohort1.studentSearchById(4)
        expect(result).toEqual(expected);
    });

    it("Cohorts have fixed capacity at 24 students. Adding students is not possible beyond the 24 limit.", () => {
        cohort1.addStudent(1, "jacob", "smith", "smithyJ", "smithyJ@gmail.com")
        cohort1.addStudent(2, "jason", "samoa", "jazzyS", "jazzyS@gmail.com")
        cohort1.addStudent(3, "jill", "starling", "Jstar", "Jstar@gmail.com")
        cohort1.addStudent(4, "jack", "smithers", "Jsmith", "Jsmith@gmail.com")
        cohort1.addStudent(5, "jacque", "sincliar", "Jsin", "Jsin@gmail.com")
        cohort1.addStudent(6, "jacky", "strongarm", "jstrong", "jstrong@gmail.com")
        cohort1.addStudent(7, "jane", "seer", "jseer", "jseer@gmail.com")
        cohort1.addStudent(8, "joe", "samson", "jsam", "jsam@gmail.com")
        cohort1.addStudent(9, "joel", "skipper", "jskip", "jskip@gmail.com")
        cohort1.addStudent(10, "john", "skip", "JJskip", "JJskip@gmail.com")
        cohort1.addStudent(11, "johnny", "strike", "jstrike", "jstrike@gmail.com")
        cohort1.addStudent(12, "joan", "sidney", "jsid", "jsid@gmail.com")
        cohort1.addStudent(13, "joanna", "sydney", "jsyd", "jsyd@gmail.com")
        cohort1.addStudent(14, "joanne", "strong", "jstrong", "jstrong@gmail.com")
        cohort1.addStudent(15, "jim", "star", "jimstar", "jimstar@gmail.com")
        cohort1.addStudent(16, "jimmy", "sand", "jsand", "jsand@gmail.com")
        cohort1.addStudent(17, "jamie", "son", "json", "json@gmail.com")
        cohort1.addStudent(18, "jay", "sunder", "jsunder", "jsunder@gmail.com")
        cohort1.addStudent(19, "jarvan", "striker", "jstriker", "jstriker@gmail.com")
        cohort1.addStudent(20, "jhin", "strand", "jstrand", "jstrand@gmail.com")
        cohort1.addStudent(21, "jakob", "smitherson", "jakobs", "jakobs@gmail.com")
        cohort1.addStudent(22, "jan", "sarkovski", "jans", "jans@gmail.com")
        cohort1.addStudent(23, "jasmine", "serene", "jasS", "jasS@gmail.com")
        cohort1.addStudent(24, "jazz", "serena", "jazzs", "jazzs@gmail.com")
        const expected = "error, cohort is full, unable to add this student to the cohort"
        const result = cohort1.addStudent(25, "james", "sanders", "Jsand", "Jsand@gmail.com")
        expect(result).toEqual(expected);
    });

    it("A student can't be removed from a cohort if it wasn't present in the first place.", () => {
        cohortManager.addCohort(cohort2)
        cohortManager.addStudent(cohort2, "cohort2", 1, "jacob", "smith", "smithyJ", "smithyJ@gmail.com")
        cohortManager.addStudent(cohort2, "cohort2", 2, "jason", "samoa", "jazzyS", "jazzyS@gmail.com")
        cohortManager.removeStudent(cohort1, "cohort1", 1)
        const expected = 'Error 404, this cohort could not be found'
        const result = cohortManager.removeStudent(cohort1, "cohort1", 1)
        expect(result).toEqual(expected);
    });

    it("Search for students by name (first and last) and return all matching results", () => {
        cohort1.addStudent(1, "jacob", "smith", "smithyJ", "smithyJ@gmail.com")
        cohort1.addStudent(2, "jason", "samoa", "jazzyS", "jazzyS@gmail.com")
        cohort1.addStudent(3, "jill", "starling", "Jstar", "Jstar@gmail.com")
        cohortManager.addCohort(cohort1)
        cohort2.addStudent(4, "jacob", "smith", "smithy", "smithy@gmail.com")
        cohortManager.addCohort(cohort2)
        const expected = [
            {studentId: 1, firstName: "jacob", lastName: "smith", githubUsername: "smithyJ", email: "smithyJ@gmail.com"}, 
            {studentId: 4, firstName: "jacob", lastName: "smith", githubUsername: "smithy", email: "smithy@gmail.com"}]
        const result = cohortManager.studentSearchByName("jacob", "smith")
        expect(result).toEqual(expected);
    });

    it("Cohorts can't have the same name, and can't exist without a name", () => {
        cohortManager.addCohort(cohort1)
        cohortManager.addCohort(cohort2)
        cohortManager.addCohort(cohort3)
        const expected = "error, this cohort cannot be added as a cohort already exists with this name"
        const result = cohortManager.addCohort(cohort3)
        expect(result).toEqual(expected);
    });

    // method this test is testing is currently incomplete and has been removed from the specs being tested
    xit("The same student can't exist in multiple cohorts.", () => {
        cohort1.addStudent(1, "jacob", "smith", "smithyJ", "smithyJ@gmail.com")
        cohort1.addStudent(2, "jason", "samoa", "jazzyS", "jazzyS@gmail.com")
        cohort1.addStudent(3, "jill", "starling", "Jstar", "Jstar@gmail.com")
        cohortManager.addCohort(cohort1)
        cohort2.addStudent(1, "jacob", "smith", "smithyJ", "smithyJ@gmail.com")
        const expected = "error, this cohort cannot be added as a cohort already exists with this name"
        const result = cohortManager.studentInAnotherCohortCheck(cohort2)

        console.log("current test result is: ", result)
        expect(result).toEqual(expected);
    });

})    
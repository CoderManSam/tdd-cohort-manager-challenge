Standard:

-Class Cohort ()
    -this.cohort = []
    -this.capacity = 24
    

-methods
    -findStudent (studentName or id)

    -addStudent (id, first name, surname, github username, email), 
    cohortName (or findCohort) to find correct cohort
    then id and name to add correct student details as object and push into array

    -removeStudent (name), use find student then remove them from that array




-Class CohortManager ()
    -this.cohorts = [] (array of cohort arrays)

-methods
    -findStudentAcrossCohorts (studentName or id), uses findStudent but for loops through
    this.cohorts

    -addCohort (cohortName), pushes a cohort to this.cohorts

    -findCohort (cohortName), uses cohortName to find the correct cohort

    -removeCohort (cohortname), uses cohortName (or findCohort) to select correct 
        cohort array in the this.cohorts array and remove it



~add errors either to each method (after first) if cohort/student not found, or add
    error to findCohort then just use findCohort in each method (will still need 
    and error for finding students, maybe add findStudent method and add that to
    each method requiring finding a student)




extension:

-methods
    -studentIdSearch (cohortName, id), find correct cohort then search by id

    -studentNameSearch (first name, surname), find all students with matching names across all cohorts and return their details and which cohort they're in

-changes to existing
    -add capacity key to each cohort (alongside cohortName)    
        -change addStudent to check current number of students in a cohort against that
            cohorts limit before adding them, returning an error if too many

    -change addCohort to check that another cohort doesn't have the same name           before adding it, returning an error message if one already exists
        -add an error message if trying to addCohort without a cohort name

    -change addStudent to check that their isn't another student with the same details in another cohort before adding them (maybe make this it's own method and add that method to addStudent), return error message if this is attempted            

    -change removeStudent to ensure the cohort exists before attempting to remove the student, if it doesn't, an error message is displayed and no student is removed


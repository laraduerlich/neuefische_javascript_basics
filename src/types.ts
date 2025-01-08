
type Student = {
    firstName: string,
    lastName: string,
    age: number,
    grades: Grades[]
}

type Grades = GradesGerman | GradesAmerican
type GradesGerman = 1 | 2 | 3 | 4 | 5 | 6 | undefined
type GradesAmerican = "A" | "B" | "C" | "D" | "E" | "F" | undefined

const student1: Student = {
    firstName: "Max",
    lastName: "Mustermann",
    age: 23,
    grades: [2,3,4,"A",undefined]
}
const student2: Student = {
    firstName: "Tim",
    lastName: "Turner",
    age: 24,
    grades: [2,3,4,"A",undefined]
}

const allStudents = [student1,student2]

function printStudent (student: Student) {
    console.log(student.firstName + " " + student.lastName + " (" + student.age + ")")
    console.log("=".repeat(30))
    console.log("Grades: ")
    const gradesString: string = student.grades
        .map((grade: Grades) => {
            if (grade !== undefined) {
                return grade;
            } else {
                return "*";
            }})
        .join(", ");
    console.log(gradesString)
    console.log("-".repeat(30))
}

function printAllStudents (students: Student[]){
    students.forEach((student: Student) => printStudent(student));
}

printAllStudents(allStudents)


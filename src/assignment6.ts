// Create a Person interface with properties like Name, address, age, email, etc.

// Extend the Person interface to create a Student interface that includes additional properties like studentID, and yearOfStudy.

// Extend the Person interface to create a Teacher interface that includes additional properties like employeeID, subjectSpecialization, and yearsOfExperience.

// Then write a function that takes either a Student or Teacher object as a parameter and outputs their details.

// If the object is of type Student, include the studentID and yearOfStudy in the output.
// If the object is of type Teacher, include the employeeID, subjectSpecialization, and yearsOfExperience in the output.
interface Person {
    name: string;
    address: string;
    age: number;
    email: string;
}

interface Student extends Person {
    studentID: string;
    yearOfStudy: number;
}

interface Teacher extends Person {
    employeeID: string;
    subjectSpecialization: string;
    yearsOfExperience: number;
}

type PersonRole = Student | Teacher;
const printPersonDetails = (person: PersonRole): void => {
    console.log(`Name: ${person.name}`);
    console.log(`Address: ${person.address}`);
    console.log(`Age: ${person.age}`);
    console.log(`Email: ${person.email}`);

    if ("studentID" in person) {
        console.log(`Student ID: ${person.studentID}`);
        console.log(`Year of Study: ${person.yearOfStudy}`);
    } else {
        console.log(`Employee ID: ${person.employeeID}`);
        console.log(`Subject: ${person.subjectSpecialization}`);
        console.log(`Experience: ${person.yearsOfExperience} years`);
    }
};

const student: Student = {
    name: "Shiva",
    address: "Lalitpur",
    age: 24,
    email: "shiva@gmail.com",
    studentID: "ST12",
    yearOfStudy: 5
};

const teacher: Teacher = {
    name: "Mr. Gyanus",
    address: "Leapfrog Connect",
    age: 30,
    email: "gyanus@gmail.com",
    employeeID: "EMP20",
    subjectSpecialization: "Coder",
    yearsOfExperience: 5
};


printPersonDetails(student);
printPersonDetails(teacher);

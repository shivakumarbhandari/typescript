//interface Assignment {
  //  id: string;
    //title: string;
    //description?: string;
  //  grade: string;
//}

// Render the assignment description only if description is provided in the object
// Use conditional rendering to achieve this
// If there is no assignment description provided, it should render "No description available"
//const assignmentEvaluation = (assignment: Assignment) => {
  //  console.log(`The assignment ${assignment.id} titled "${assignment.title}" has been graded: ${assignment.grade}`);

    //console.log(`Assignment Description: ${assignment.description}`);
//}
interface Assignment {
    id: string;
    title: string;
    description?: string; 
    grade: string;
}

const assignmentEvaluation = (assignment: Assignment): void => {
    console.log(`The assignment ${assignment.id} titled "${assignment.title}" has been graded: ${assignment.grade}`);

    if (assignment.description) {
        console.log(`Assignment Description: ${assignment.description}`);
    } else {
        console.log("Assignment Description: No description available");
    }
};


const assignmentWithDescription: Assignment = {
    id: "A101",
    title: "Math Homework",
    description: "Solve all exercises from chapter 5",
    grade: "A"
};

const assignmentWithoutDescription: Assignment = {
    id: "A102",
    title: "Science Project",
    grade: "B"
};

assignmentEvaluation(assignmentWithDescription);
assignmentEvaluation(assignmentWithoutDescription);

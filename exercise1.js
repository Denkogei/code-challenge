function getGrade() {
    // Prompt the user to enter student marks
    let marks = (prompt("Enter student marks (0 - 100):"));

    // Check if the input is a valid number within the acceptable range
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Please enter a valid number between 0 and 100.");
        return; // Exit the function if the input is invalid
    }

    let grade; // Variable to store the grade

    // Determine the grade based on the marks
    if (marks > 79) {
        grade = 'A'; // Grade A for marks above 79
    } else if (marks >= 60) {
        grade = 'B'; // Grade B for marks between 60 and 79
    } else if (marks >= 49) {
        grade = 'C'; // Grade C for marks between 49 and 59
    } else if (marks >= 40) {
        grade = 'D'; // Grade D for marks between 40 and 49
    } else {
        grade = 'E'; // Grade E for marks below 40
    }

    // Display the result to the user
    alert(`The grade for marks ${marks} is: ${grade}`);
}

// Call the function to execute the grade calculation
getGrade();
// Function to calculate demerit points based on speed
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

if (speed < speedLimit) {
    console.log("Ok");
} else {
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    if (demeritPoints > 12) {
        console.log("License suspended");
    } else {
        console.log(`Points: ${demeritPoints}`);
    }
}
}

// Prompt the user to enter the speed of the car
let speed = prompt("Enter the speed of the car:");

// Convert the input to a number
speed = Number(speed);

// Check if the input is valid
if (!isNaN(speed) && speed >= 0) {
    // Call the function to check the speed
    checkSpeed(speed);
} else {
    alert("Invalid input. Please enter a valid number.");
}
checkSpeed()

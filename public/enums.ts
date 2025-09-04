// Define an enum for the possible states of a task
enum TaskStatus {
  InProgress,
  Completed,
  Cancelled,
  OnHold
}

// Define a function that takes a TaskStatus enum as an argument
function printTaskStatus(status: TaskStatus) {
  // Use a switch statement to perform actions based on the status
  switch (status) {
    case TaskStatus.InProgress:
      console.log("The task is currently being worked on.");
      break;
    case TaskStatus.Completed:
      console.log("The task has been finished successfully!");
      break;
    case TaskStatus.Cancelled:
      console.log("The task was cancelled by the user.");
      break;
    case TaskStatus.OnHold:
      console.log("The task is paused and will be resumed later.");
      break;
    default:
      console.log("Unknown task status.");
  }
}

// --- Usage ---

// Assign a task status using an enum value
const myTaskStatus = TaskStatus.InProgress;
console.log(`Initial Status: ${TaskStatus[myTaskStatus]}`); // Output: Initial Status: InProgress

// Call the function with an enum value
// printTaskStatus(myTaskStatus);

console.log("--- Changing status ---");

// Change the task status to a new enum value
const updatedTaskStatus = TaskStatus.Completed;
console.log(`New Status: ${TaskStatus[updatedTaskStatus]}`); // Output: New Status: Completed

// Call the function again with the new status
printTaskStatus(updatedTaskStatus);
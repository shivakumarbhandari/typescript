// Create a function that takes a status parameter and returns a message based on the status.
// Allow only the following status: "pending", "approved", "rejected"
// Any other value should result in a compile-time error.

// If pending, return "Your application is pending."
// If approved, return "Congratulations! Your application has been approved."
// If rejected, return "We regret to inform you that your application has been rejected."

type ApplicationStatus = "pending" | "approved" | "rejected";

function getStatusMessage(status: ApplicationStatus): string {
    if (status === "pending") {
        return "Your application is pending.";
    } 
    if (status === "approved") {
        return "Congratulations! Your application has been approved.";
    } 
    if (status === "rejected") {
        return "We regret to inform you that your application has been rejected.";
    }

    const _exhaustiveCheck: never = status;
    return _exhaustiveCheck;
}

console.log(getStatusMessage("pending"));
console.log(getStatusMessage("approved"));
console.log(getStatusMessage("rejected"));



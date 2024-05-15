
// Sample data array with passwords and corresponding full names
const passwordData = [
    { password: "panyako", fullName: "Md Everlyne Panyako Atieno" },
    { password: "ghana", fullName: "Ghana" },
    { password: "23", fullName: "Mr vincent" },
    { password: "2345", fullName: "Mr Maxwel" },
    // Add more entries as needed
];

document.getElementById("passwordForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the selected staff and entered password and arithmetic result
    const selectedStaff = document.getElementById("staff").value;
    const enteredPassword = document.getElementById("password").value;
    const enteredResult = parseInt(document.getElementById("arithmeticResult").value);

    // Perform the arithmetic operation
    const correctResult = (5 * 3 + 10);

    // Check if the entered password matches any in the data array
    const matchedUser = passwordData.find(user => user.password === enteredPassword);

    if (matchedUser && enteredResult === correctResult) {
        // Display the full name using SweetAlert2
        Swal.fire({
            title: 'Welcome!',
            text: `${selectedStaff}!`,
            icon: 'success',
            timer: 5000, // Set the timer to 5 seconds
            showConfirmButton: false, // Hide the "OK" button
        }).then(() => {
            // Programmatically submit the form
            document.getElementById("passwordForm").submit();

            // Alternatively, you can redirect the user using window.location.href
            // Based on the selection, redirect to respective pages
            switch (selectedStaff) {
                case "Md Everlyne Panyako Atieno - HOI":
                    window.location.href = './1.HOI Landing/HOI Landing.html';
                    break;
                case "Mr Obure Fredrick Ghana - Acting D/HOI":
                    window.location.href = './path/to/Ghana';
                    break;
                case "Mr Owuor Jerry Wcyclife":
                    window.location.href = './KanyadetLanding/index.html';
                    break;
                default:
                    // Default redirect if no specific case matches
                    window.location.href = 'what';
            }
        });
    } else {
        // Display an error message if the password or arithmetic result is incorrect
        Swal.fire({
            title: 'Error',
            text: 'Incorrect password or arithmetic result. Please try again.',
            icon: 'error',
        });
    }

    // Clear the password and arithmetic result inputs after submission
    document.getElementById("password").value = "";
    document.getElementById("arithmeticResult").value = "";
});


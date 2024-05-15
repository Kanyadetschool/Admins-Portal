
// Function to count the total cards
function countTotalCards() {
    let totalCards = 0;
    Titles.forEach((Title) => {
        totalCards += Title.students.length;
    });
    return totalCards;
}

// Function to display the total and new cards
function displayCardInfo() {
    const totalCardsContainer = document.getElementById('totalCardsContainer');

    // Get the total count of cards
    const totalCards = countTotalCards();

    // Display the total count of cards
    totalCardsContainer.innerHTML = `<p>Total Docs: ${totalCards}</p>`;

    // Display any new cards (assuming newCards is an array of newly uploaded cards)
    const newCards = getNewCards(); // This function should return an array of new cards
    if (newCards.length > 0) {
        const newCardsList = newCards.map((card) => `<li><a href="#" onclick="populateSearch('${card.Group}'); return false;">${card.Group}</a></li>`).join('');
        // Show a SweetAlert for newly uploaded cards
        Swal.fire({
            // icon: 'info',
            title: 'New Updates 01.0.2024!',
            html: `You have  ${newCards.length} new Documents uploaded Click to view:<br> ${newCardsList}.`,
            confirmButtonText: 'Close',
            footer:'Reload the page to select another Document After first click'
        });
    }
}

// Example function to get new cards (replace with actual implementation)
function getNewCards() {
    return [
        {
            Group: 'KPEEL INSPECTION AND ACCEPTANCE COMMITTE',
            year: 2024,
            students: []
        },
        {
            Group: 'KANYADET PRIMARY AND JUNIOR SCHOOL KPEEL TENDER OPENING   COMMITTEE',
            year: 2024,
            students: []
        },
    ];
}

// Function to populate search input with the clicked name and close the Swal
function populateSearch(name) {
    Swal.close(); // Close the Swal alert
    const searchInput2 = document.getElementById('searchInput2');
    searchInput2.value = name;
    searchStudents(); // Trigger search after populating the search input
}

// Call the displayCardInfo function initially and whenever new cards are uploaded
displayCardInfo();


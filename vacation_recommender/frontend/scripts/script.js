function searchDestinations() {
    console.log("Initiating search...");
    const searchQuery = document.getElementById('searchInput').value;
    console.log("Search query:", searchQuery);
    fetch(`http://localhost:5000/api/destinations?search=${searchQuery}`)
        .then(response => {
            console.log("Received response from server");
            return response.json();
        })
        .then(data => {
            console.log("Data received:", data);
            displayDestinations(data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayDestinations(data) {
    console.log("Displaying destinations...");
    const container = document.getElementById('destinationsContainer');
    container.innerHTML = '';

    if (data.length === 0) {
        container.innerHTML = '<p>No results found for the given search query.</p>';
        console.log("No results found.");
    } else {
        data.forEach(destination => {
            console.log("Processing destination:", destination.name);
            const div = document.createElement('div');
            div.innerHTML = `<h2>${destination.name}</h2>
                             <p>${destination.description ?? 'Description not available'}</p>
                             <p>Location: ${destination.location ?? 'Location not available'}</p>
                             <p>Average Cost: ${destination.average_cost ?? 'Cost not available'}</p>
                             <p>Rating: ${destination.rating ?? 'Rating not available'}</p>`;
            container.appendChild(div);
        });
    }
    console.log("Finished displaying destinations.");
}

window.onload = searchDestinations;

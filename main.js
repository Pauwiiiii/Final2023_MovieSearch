const apiKey = '1bfdbff05c2698dc917dd28c08d41096';
const baseUrl = 'https://api.themoviedb.org/3';


// Function to handle movie search
async function searchMovies() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();

    if (query === '') {
        alert('Please enter a movie name for search.');
        return;
    }

    try {
        const response = await axios.get(`${baseUrl}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`);
        const movies = response.data.results;
        displayMovies(movies);
    } catch (error) {
        console.error('Error searching for movies:', error);
    }
}

// Event listener for the search button
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', searchMovies);
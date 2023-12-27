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

// Function to fetch upcoming movies
async function getUpcomingMovies() {
    try {
        const response = await axios.get(`${baseUrl}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`);
        const movies = response.data.results;
        displayMovies(movies);
    } catch (error) {
        console.error('Error fetching upcoming movies:', error);
    }
}

// Function to display movies on the homepage
function displayMovies(movies) {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = '';

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movieCard';
        movieCard.innerHTML = `<img src="http://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
                               <h3>${movie.title}</h3>
                               <p>${movie.release_date}</p>`;
        movieCard.addEventListener('dblclick', () => showMovieDetails(movie.id));
        movieList.appendChild(movieCard);
    });
}
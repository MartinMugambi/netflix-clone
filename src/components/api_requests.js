const API_KEY= '5d657d365f93f31013f78d331be5420e';

const request = {
fetchTrendingMovies: `trending/all/week?api_key=${API_KEY}`,
fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
fetchTopRatedMovies: `movie/top_rated?api_key=${API_KEY}`, 
fecthActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchComedyMovies:  `discover/movie?api_key=${API_KEY}&with_genres=35`,
fecthHororMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomance: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
fecthDocumentariesMovies: `discover/movie?api_key=${API_KEY}&with_genres=99`,

}

export default request;
const API_KEY = "628d5ea0cad901c0b145bd40e5944822";

// https://api.themoviedb.org/3/movie/550?api_key=628d5ea0cad901c0b145bd40e5944822

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjhkNWVhMGNhZDkwMWMwYjE0NWJkNDBlNTk0NDgyMiIsInN1YiI6IjYwNmI2NGQ0MDI1NzY0MDA1OTQ3YjgxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8eU09nW9qQyMW3kS_WCH6qMF4xxDXi-tz8DiKtxHrLw
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default requests;

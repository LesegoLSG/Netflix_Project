const key = import.meta.env.VITE_TMDB_KEY;// Get the API key from environment variables
const baseUrl = "https://api.themoviedb.org/3";// Base URL for TMDb API

// Object containing various endpoints for TMDb API
const endpoints = {
    popular:`${baseUrl}/movie/popular?api_key=${key}`,
    topRated:`${baseUrl}/movie/top_rated?api_key=${key}`,
    trending:`${baseUrl}/movie/popular?api_key=${key}&language=en-US&page=2`,
    comedy:`${baseUrl}/movie/popular?api_key=${key}&language=US&query=comedy&page=1&include_adult=false`,
    upcoming:`${baseUrl}/movie/upcoming?api_key=${key}`,
}
// Function to create image URLs using the TMDb image base URL and size
export function createImageUrl(filename,size){
    return `https://image.tmdb.org/t/p/${size}/${filename}`;
}
// Export the endpoints object and the createImageUrl function
export default endpoints;
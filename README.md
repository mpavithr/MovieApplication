# MovieApplication
React Native App that shows current trending movies and its details

Two Screen application

## Screen One
Displays a grid of current popular movies
API used: “movie/popular” endpoint (https://developers.themoviedb.org/3/movies/get-popular-movies)

Handles network connectivity via Loading sign (Loading.js)
Handles errors when fetching API

On click of a movie, will be navigated to Screen Two: the movie details screen

## Screen Two
Displays the selected movie details 
APIs used: 
  1. “movie/{movie_id}” endpoint (https://developers.themoviedb.org/3/movies/get-movie-details)
  2. "movie/{movie_id}/credits" endpoint (https://developers.themoviedb.org/3/movies/get-movie-credits)
This screen consists of the movie title, poster image, overview, duration, release date, genre, backdrop image, cast names with images if present
All the images aspect ratio is retained.

## Code structure explanation
`App.js` - consists of the navigation stack of the 2 screens
`Home.js` - Screen 1 of the application
`Components` folder:
  1. `TrendingMovies.js` - contains logic and rendering of Screen 1 
  2. `MovieDetails.js` - contains logic and rendering of Screen 2 
  3. `Loader.js` - incase of network connectivity or other issues
  4. `Cast.js` - contains logic and rendering of cast names and images in Screen 2
`Services/API.js` - consists of the base get API logic
`config.js` - base urls and api key
`Constants.js` - colors of application - for styling
`Styles.js` - stylesheet of application

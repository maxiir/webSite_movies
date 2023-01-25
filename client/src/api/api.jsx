import axios from "axios";


export const PopularMovies = async (state) => {
  const getTitles = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=6c14de7635bb08f505a5b1b816830ee3&language=es-US&page=1`)
  //state(getTitles) //por medio de state le pasa el dato a setPersonaje
  state(getTitles.data.results)
}

export const upComing = async (state) =>{
  const getUpcoming = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=6c14de7635bb08f505a5b1b816830ee3&language=es-US&page=1`)
  state(getUpcoming.data.results)
}

export const searchMovies = async (values) =>{
  const getMovies = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6c14de7635bb08f505a5b1b816830ee3&language=en-US&query=${values}&page=1&include_adult=false`)
  console.log(getMovies)
}

export const getDetalleMovie = async(id_movie) => {
  const detallesMovie = await axios.get(`https://api.themoviedb.org/3/movie/${id_movie}?api_key=6c14de7635bb08f505a5b1b816830ee3&language=es-US&external_source=imdb_id`)
  return detallesMovie.data
}
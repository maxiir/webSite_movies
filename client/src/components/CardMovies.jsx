
import './CardMovies.css'
import { useEffect,useState } from 'react'
import { PopularMovies } from '../api/api'

function CardMovies() {
  
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original'
  const [movies, setMovies] = useState([]) 

  useEffect(()=>{
    PopularMovies(setMovies) 
  },[])

  return (
    <>
    
    {movies.map(movie =>(
    <div key={movie.id} className="card">
      <div className="card-body">

        <img src= {`${URL_IMAGE + movie.poster_path}`} alt="" width={230}/>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <h5>Lanzamiento: {movie.release_date}</h5>
        <h5>Promedio de votos: {movie.vote_average}</h5>
      
        <button className='btn btn-primary'>trailer</button>
      </div>
    </div>
    ))}

    </>

  )
  
}

export default CardMovies
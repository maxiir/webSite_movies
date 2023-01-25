import { getDetalleMovie } from "../api/api"
import {useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function DetalleMovie() {
    const [detalleMovie,setDetalleMovie] = useState([])
    const {id} = useParams() //obtengo los parametros enviados con useParams y los guardo en una variable

    useEffect(()=>{
     
        getDetalleMovie(id).then((data)=>setDetalleMovie(data)) //.then se usa para retornar los datos de la promesa de getDetalleMovie, el return de la api
          
    })
    
    

  return (
      <div>
        <Nav/>
        <h1>detalle de pelicula</h1>
        <h3>{detalleMovie.title}</h3>
        <h3>{detalleMovie.poster_path}</h3>
        <h3>{detalleMovie.overview}</h3>
        <Footer/>
    </div>
  )
}

export default DetalleMovie
import { useEffect, useState } from "react";
import { upComing } from "../api/api";
import {useNavigate} from 'react-router-dom'

import './Carrusel.css'


function Carrusel() {
  const [poster, setPoster] = useState([]);
  const URL_IMG = "https://image.tmdb.org/t/p/original";
  
  const posterCarrusel = poster.slice(0,4); //con slice puedo traer del arreglo de objeto solo la cantidad que deseo
  const posterCarrusel2 = poster.slice(4,8);
  const posterCarrusel3 = poster.slice(8,12);

  const navigate = useNavigate()

  useEffect(() => {
    upComing(setPoster);
  });
  
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          {posterCarrusel.map((posters) => (
            <img
              key={posters.id}
              src={`${URL_IMG + posters.poster_path}`}
              className="w-10"
              alt="..."
              
              onClick={()=>navigate(`/detalleMovie/${posters.id}`)}
              
            />
          ))}
        </div>
        <div className="carousel-item">
          {posterCarrusel2.map((posters) => (
            <img
              key={posters.id}
              src={`${URL_IMG + posters.poster_path}`}
              className="w-10"
              alt="..."
              onClick={()=>navigate(`/detalleMovie/${posters.id}`)}
              
              
            />
            
           
          ))}
        </div>
        <div className="carousel-item">
          {posterCarrusel3.map((posters) => (
            <img
              key={posters.id}
              src={`${URL_IMG + posters.poster_path}`}
              className="w-10"
              alt="..."
              
              onClick={()=>navigate(`/detalleMovie/${posters.id}`)}
            />
           
          ))}
        </div>
        
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carrusel;

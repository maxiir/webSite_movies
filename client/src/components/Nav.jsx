import "./Nav.css";
import { useEffect, useState } from "react";
import { searchMovies } from "../api/api";
import { Formik } from "formik";
import { Link } from "react-router-dom";
// IMPORT ICONS FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFilm} from '@fortawesome/free-solid-svg-icons'


function Nav() {
  const [movies, setMovies] = useState({ title: "loading movies" });
  
  return (
    <nav className="navbar bg-dark">
    <div className="container-fluid">
      <p className="navbar-brand">Tus peliculas <FontAwesomeIcon icon={faFilm} /></p>
      
      
      <Link className="nav-link" to="/">inicio</Link>
      <Link className="nav-link" to="#">quienes somos?</Link>
      <Link className="nav-link" to="#">servicios</Link>

      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Busca una pelicula"
          aria-label="Search"
        />
        <button className="btn btn-primary" type="submit">
          Buscar
        </button>
      </form>
    </div>
  </nav>
  
  )
}

export default Nav;

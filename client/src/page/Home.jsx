import './Home.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import SearchPage from '../components/SearchPage'
import CardMovies from '../components/CardMovies'
import Carrusel from '../components/Carrusel'

function Home() {
  

    return (

    <div className='container-home'>      
      <Nav/>
      
      
      <h2>Ve informacion de Peliculas <br />y estrenos, en un solo <br />lugar</h2>
      
      <Carrusel/>
     
      <h1>Estrenos</h1>
      
      
      

      <div className='container'>
        
        
        <CardMovies/>
        
        
      </div>
      <SearchPage/>
      <Footer/>
    </div>
    
  )
}

export default Home
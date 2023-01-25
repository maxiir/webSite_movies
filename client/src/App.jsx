import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Home from './page/Home'
import NotFount from './page/NotFount'
import SearchMovie from './page/SearchMovie'
import DetalleMovie from './page/DetalleMovie'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/searchMovies' element={<SearchMovie/>}/>
        <Route path='/detalleMovie/:id' element={<DetalleMovie/>}/>
        <Route path='*' element={<NotFount/>} />
      </Routes>
    </div>
  )
}

export default App
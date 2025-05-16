import React from 'react'
import Header from './Component/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import Blog from './Pages/Blog'

const App = () => {
  return (
    <main className='overflow-hidden text-[#222529]'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/collection' element={<Collection />}/>
        <Route path='/blog' element={<Blog />}/>
      </Routes>
    </main>
  )
}

export default App

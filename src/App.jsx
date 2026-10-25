

import './App.css'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router'
import NotFound from './Pages/NotFound'
import ReciepeDetail from './Pages/RecipeDetail'

function App() {


  return (
    <div className="min-h-screen bg-background text-text font-sans">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/recipe/:id" element={<ReciepeDetail/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>


  )
}

export default App

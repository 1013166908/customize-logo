import { useState } from 'react'

import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Index } from './views/Index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
      </Routes>
    </BrowserRouter>
  )
  // return <div className="text-3xl font-bold underline bg-red-200">test</div>
}

export default App

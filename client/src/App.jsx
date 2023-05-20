import React from 'react'
import './App.css'
import Form from './components/Form'
import AllData from './components/AllData'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div className='app_main'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Form/>}/>
      <Route path='/alldata' element={<AllData/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
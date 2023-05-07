import { BrowserRouter ,Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Sidebar from '../Sidebar/Sidebar';
import React from 'react'

function Main() {
  return (
    
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='dashboard' element={<Sidebar/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default Main
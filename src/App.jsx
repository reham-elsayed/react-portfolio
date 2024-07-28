import { useState } from 'react'

import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Layout from './components/layout/layout.jsx'
import Portifolio from './components/Portfolio/Porfolio.jsx'
import Contact from './components/Contact/Contact.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './App.css'

function App() {

const router = createBrowserRouter([
  {
    path: '', element:<Layout />,
    children:[
    { path: '', element:<Home />},
  
  {
    path: '/home', element:<Home />
  },
  {
    path: '/about', element:<About />
  },
  {
    path: '/portfolio', element:<Portifolio />
  },
  {
    path: '/contact', element:<Contact />
  },
  
  {
    path: '*', element:<h1>404</h1>
  },]}

])


  return (
    <RouterProvider router={router}/>
  )
}

export default App

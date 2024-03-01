import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import RootStack from './navigation/RootStack'

function App() {

  return (
    <BrowserRouter><RootStack /></BrowserRouter>
  )
}

export default App

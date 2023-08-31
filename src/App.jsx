import React from "react"
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './assets/Layout'
import * as Pages from './assets/Pages'
import './App.css'





// function TheRideSongs() {

// }

// function TheBalconySongs() {

// }



export default function Artist() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Pages.Home />} />
          <Route path="/albums" element={<Pages.Albums />}/>
        </Route>
      </Routes>
    </>
  )

}
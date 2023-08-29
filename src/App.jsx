import React, { useState } from "react"

function SongList() {

  return (
    <>
      <ul>
        <li>7, release date: 2016 <img src="#"></img></li>
        <li>Anything, release date: 2016 <img src="#"></img></li>
        <li>Cocoon, release date: 2014 <img src="#"></img></li>
        <li>Fallout, release date: 2014 <img src="#"></img></li>
        <li>Homesick, release date: 2014 <img src="#"></img></li>
        <li>Hourglass, release date: 2014 <img src="#"></img></li>
        <li>Kathleen, release date: 2014 <img src="#"></img></li>
        <li>Pacifier, release date: 2014 <img src="#"></img></li>
        <li>Twice, release date: 2016 <img src="#"></img></li>
        <li>Soundcheck, release date: 2016 <img src="#"></img></li>
      </ul>
    </>
  )
}

function ArtistInfo() {
  return (
    <>
      <h1>Catfish and the Bottlemen</h1>
      <h2>Alt</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Sunt laborum ducimus architecto cupiditate voluptates porro 
        error, magnam dolorem nam iusto.</p>
      <SongList />
    </>
  )
}

export default function Artist() {

  const [name, setName] = useState("")

  return (
    <>
    <ArtistInfo />
    </>
  )

}
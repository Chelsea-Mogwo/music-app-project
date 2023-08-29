import React, { useState } from "react"
import './App.css'

function LikeButton() {
  const [like, setLike] = useState("Like")

  const handleLikedButton = () => {
    setLike(previous => "Unlike")
  }

  const handleUnlikedButton = () => {
    setLike(previous => "Like")
  }

  const handleButton = () => {
    if (like === "Like") {
      handleLikedButton()
    } else {
      handleUnlikedButton()
    }
  }

  return (
    <>
      <button
        onClick={handleButton}
      >{like}</button>
    </>
  )
}
  

function SongList() {

  return (
    <>
      <ul>
        <li>7, release date: 2016 <img src="#"></img> <LikeButton /></li>
        <li>Anything, release date: 2016 <img src="#"></img> <LikeButton /></li>
        <li>Cocoon, release date: 2014 <img src="#"></img> <LikeButton /></li>
        <li>Fallout, release date: 2014 <img src="#"></img> <LikeButton /></li>
        <li>Homesick, release date: 2014 <img src="#"></img> <LikeButton /></li>
        <li>Hourglass, release date: 2014 <img src="#"></img> <LikeButton /></li>
        <li>Kathleen, release date: 2014 <img src="#"></img> <LikeButton /></li>
        <li>Pacifier, release date: 2014 <img src="#"></img> <LikeButton /></li>
        <li>Twice, release date: 2016 <img src="#"></img> <LikeButton /></li>
        <li>Soundcheck, release date: 2016 <img src="#"></img> <LikeButton /></li>
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
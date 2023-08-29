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
      <button id="dark-button"
        onClick={handleButton}
      >{like}</button>
    </>
  )
}

function TheBalanceSongs() {
  return (
    <>
      <h3>Top Songs</h3>
      <img src="../src/assets/CATB2016.jpg"></img>7
      <div>
            <p>Release date: 2016</p>
            {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, quia.</p> */}
          </div>
          <span id="right">  <LikeButton /></span>
    </>
  )
}

function TheRideSongs() {

}

function TheBalconySongs() {

}

function Albums() {
  return (
    <>
    <h3>Albums</h3>
    <section>
      <button>
        <img src="../src/assets/The_Balance2019.png" alt="The Balance Album" />
      </button>
      <button>
        <img src="../src/assets/CATB2016.jpg"></img>
      </button>
      <button>
        <img src="../src/assets/CATB2014.jpg"></img>
      </button>
      
    </section>
    </>
  )
}

function TopSongList() {

  return (
    <>
    <h3>Top Songs</h3>
      <ul>
        <li>
          <img src="../src/assets/CATB2016.jpg"></img>7
          <div>
            <p>Release date: 2016</p>
            {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, quia.</p> */}
          </div>
          <span id="right">  <LikeButton /></span>
          
        </li>
        <li>
          <img src="../src/assets/CATB2016.jpg"></img>Anything
          <div>
            <p>Release date: 2016</p>
            {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, quia.</p> */}
          </div>
          <span><LikeButton /></span>
        </li>
        <li>
          <img src="../src/assets/CATB2014.jpg"></img>Cocoon
          <div>
            <p>release date: 2014</p>
            {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, quia.</p> */}
          </div>
          <span><LikeButton /></span>
        </li>
        <li>
          <img src="../src/assets/CATB2014.jpg"></img>Fallout
          <div>
            <p>release date: 2014</p>  </div>
          <span><LikeButton /></span>
        </li>
        <li>
          <img src="../src/assets/CATB2014.jpg"></img>Homesick
          <div>
            <p>release date: 2014</p>  </div>
          <span><LikeButton /></span>
          </li>
        <li>
          <img src="../src/assets/CATB2014.jpg"></img>Hourglass
          <div>
            <p>release date: 2014</p>  </div>
          <span><LikeButton /></span>
        </li>
        <li>
          <img src="../src/assets/CATB2014.jpg"></img>Kathleen
          <span><LikeButton /></span>
          </li>
        <li>
          <img src="../src/assets/CATB2014.jpg"></img>Pacifier
          <div>
            <p>release date: 2014</p>  </div>
          <span><LikeButton /></span>
        </li>
        <li>
          <img src="../src/assets/CATB2016.jpg"></img>Twice
          <div>release date: 2016  </div>
          <span><LikeButton /></span>
        </li>
        <li>
          <img src="../src/assets/CATB2016.jpg"></img>Soundcheck
          <div>
            <p>release date: 2016</p>  </div>
          <span><LikeButton /></span>
        </li>
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
      <Albums />
      <TopSongList />
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
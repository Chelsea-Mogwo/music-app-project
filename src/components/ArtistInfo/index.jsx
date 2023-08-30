import React from 'react'
import Albums from '../Albums'
import TopSongList from '../TopSongList'

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

export default ArtistInfo
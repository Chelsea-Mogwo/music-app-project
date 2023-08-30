import React from 'react'
import TheBalanceSongs from '../TheBalanceSongs'

function Albums() {
    return (
      <>
      <h3>Albums</h3>
      <section>
        <button onClick={TheBalanceSongs}>
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

export default Albums
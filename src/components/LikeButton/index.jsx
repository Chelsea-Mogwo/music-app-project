import React, { useState } from 'react'

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

export default LikeButton
import React from 'react'
import LikeButton from '../LikeButton'

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

export default TopSongList
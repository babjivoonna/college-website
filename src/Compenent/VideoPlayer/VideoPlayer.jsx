import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../Assets/college-video.mp4'

const VideoPlayer = ({playState,setPlayState}) => {
    const player=useRef(null)
    const closePlayer=(e)=>{
        if(e.target===player.current){
            setPlayState(false)
        }
    }
  return (
    <div className={`video-palyer ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
      <video src={video} autoplay muted controls></video>
    </div>
  )
}

export default VideoPlayer

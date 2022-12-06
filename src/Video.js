import React,{useRef, useState} from 'react'
import './video.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker'
import ShareIcon from '@mui/icons-material/Share';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


function Video({song,title,desc ,likes , comments , share,video}) {


  const [like , setlike]=useState(false)

  const likeVideo = ()=>{
  !like ? setlike(true) : setlike(false);
  }




  const [playVid,setplayVid]=useState(false)
  
  const refToTheVideo = useRef(null) 
    const videoPlay=()=>{
    if(playVid){
      refToTheVideo.current.pause()
      setplayVid(false)
    }else {
      refToTheVideo.current.play()
      setplayVid(true)
    }
    }


  

  return (
    <div className='video'>
      <video src={video}
      loop
      onClick={videoPlay}
      ref={refToTheVideo}
      >
      </video>
      <div className='footer'>
      <div className='footer-text'>
       <h1>{title}</h1>
       <p>{desc}</p> 
       <div  className='music-div'>
       <MusicNoteIcon  className='music-icon'/>
        <Ticker mode='smooth'>
          {()=>(
            <h3>{song}</h3>
         )}
        </Ticker>
      </div>
      </div>
      <div className='footer-record'>
      <div className='controls'>
    <div className='side-controls' onClick={likeVideo}> {like ? <FavoriteIcon fontSize='large' />: <FavoriteBorderIcon fontSize='large' />} <span>{like ? likes + 1: likes}</span></div>
    <div className='side-controls'><MessageIcon fontSize='large' /> <span>{comments}</span></div>
    <div className='side-controls'><ShareIcon fontSize='large' /><span>{share}</span></div>
    </div>
  <img src='./images/record.png' alt='' />
      </div>
    
    </div>
    </div>
  )
}

export default Video
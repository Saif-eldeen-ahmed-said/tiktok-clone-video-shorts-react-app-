import React,{useState,useEffect} from 'react';
import './App.css';
import Video from './Video';
import db from './firebase';
import { collection, onSnapshot } from 'firebase/firestore';



function App() {

  const [videos , setvideos] =useState([])

  useEffect(()=>{
 onSnapshot(collection(db,"videos"),(snapshot)=>{
  setvideos(snapshot.docs.map(doc=>doc.data()))
})
}
 ,[])




  return (
    <div className='app'>
    <div className="video-app">
    {videos.map(({song,title,desc ,likes , comments , share,video} )=>(
          <Video 
          desc={desc}
          likes={likes}
          video={video}
          share={share}
          title={title}
          song={song}
          comments={comments}
          />
      )

      )}
    </div>
    </div>
  );
}

export default App;

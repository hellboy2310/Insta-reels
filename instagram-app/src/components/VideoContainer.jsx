
import './videocontainer.css'
import { useState } from "react"



function VideoContainer() {
    let [playing, setPlaying] = useState(true);
    let [commentbox, setComment] = useState(false);
    return (



            <div className="video_card">
            
            <video className='video-card-video' onClick={(e) => {
                    if (playing) {
                        e.currentTarget.pause();
                        setPlaying(false);
                    }
                    else {
                        e.currentTarget.play();
                        setPlaying(true);
                    }
                }}
                
                    src="https://firebasestorage.googleapis.com/v0/b/reel-c6fe6.appspot.com/o/insta_image1.mp4?alt=media&token=edd6b3d3-cb9c-4e8c-961f-b99dcc6c6285"></video>

 
              
                <p className='video-card-username' >Fake Name</p>
                <span className='video-card-music'>Song Name</span>

                <span  onClick={(e)=>{
                    if(setComment){
                        setComment(true);
                        console.log("comment was pressed");
                    }
                    else{
                        setComment(false);
                    }
                }}>
                   <button class = "chat_button">comment</button> 
                </span>

              {commentbox ? 
              <div className="video-card-comment-box">
                <div className="actual-comments">
                    <h5>User Name</h5>
                    <p>This is actual comment</p>
                </div>
                <div className="comment-form">
                    <div className="post-user-comment">

                        <input type = 'text'/>
                        <button>post</button>
                    </div>

                </div>

              </div>:("")}
                



              
            </div>

    )
}

export default VideoContainer;
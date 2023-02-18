import { useState } from "react"



function VideoContainer(){
    let[playing,setPlaying] = useState(false); 
    
    return(
        <>
        <div className="video_card">
            <p>Fake Name</p>
            <span>Song Name</span>

            <video onClick={(e)=>{
                if(playing){
                e.currentTarget.pause();
                setPlaying(false);
                }
                else{
                    e.currentTarget.play();
                    setPlaying(true);
                }
            }} 
             src = ""></video>

        </div>
        </>
    )
}

export default VideoContainer;
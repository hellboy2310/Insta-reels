
import './videocontainer.css'
import { useContext, useState } from "react"
import { db } from "../firebase";
import { AuthContext } from '../context/AuthContext';
import { setDoc, doc } from "firebase/firestore";
import { updateDoc } from "firebase/firestore";


function VideoContainer(props) {
    let [playing, setPlaying] = useState(true);
    let [commentbox, setComment] = useState(false);
    let [currUserComment, setCurrUserComment] = useState("");
    // console.log('videoContainer', props);
let user = useContext(AuthContext);
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

                src={props.data.profileImageUrl}></video>



            <p className='video-card-username' >Fake Name</p>
            <span className='video-card-music'>Song Name</span>

            <span onClick={(e) => {
                if (setComment) {
                    setComment(true);
                    console.log("comment was pressed");
                }
                else {
                    setComment(false);
                }
            }}>
                <button class="chat_button">comment</button>
            </span>

            {commentbox ?
                <div className="video-card-comment-box">
                    <div className="actual-comments">
                        <h5>User Name</h5>
                        <p>This is actual comment</p>
                    </div>
                    <div className="comment-form">
                        <div className="post-user-comment">

                            <input type='text' value={currUserComment} onChange={(e) => setCurrUserComment(e.currentTarget.value)} />

                            <button onClick={async () => {
                                let commentId = user.uid + '$' + Date.now();
                                const docRef = await setDoc(doc(db, "newcommentsinsta", commentId), {
                                    email: user.email,

                                    comments: currUserComment,



                                });
                                
                                setCurrUserComment(" ");
                                let postCommentsArr = props.data.comments;
                                console.log(postCommentsArr);
                                postCommentsArr.push(commentId);    
                                const  postcommentRef = doc(db, "newpostsinsta", props.data.id);
                                await updateDoc(postcommentRef, {
                                    comments:postCommentsArr
                                  });

                            }}>post</button>
                            
                        </div>

                    </div>

                </div> : ("")}





        </div>

    )
}

export default VideoContainer;
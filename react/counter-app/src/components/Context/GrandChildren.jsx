import {useContext} from 'react'
import {Context} from './ContextMemo'



function GrandChildren(){
    let message = useContext(Context);
    console.log("rendered Grandchildren");
    return(
        <>
        <div>------------------------</div>
        <div>I am a GrandChildren</div>
        <div>God send this message {message}</div>
        </>
    )
}

export default GrandChildren
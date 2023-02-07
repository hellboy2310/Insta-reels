import { useContext } from "react"
import {Context} from './contextmemo'

function Grandchildren(){
    let message = useContext(Context);
  console.log("grandchildren is rendered");
    return(
        <>
        <div>I am the grandchildren</div>
        <div>this message is {message}</div>
        </>
    )
}

export default Grandchildren


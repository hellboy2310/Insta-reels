import {Context} from "./ContextMemo";
import { useContext } from "react";

function GrandChildren(){
    console.log("Grandchildren function");
    
    let message = useContext(Context);
    return(
        <>
        <div>'God has sent this ${message}'</div>
        </>
    )
}

export default GrandChildren


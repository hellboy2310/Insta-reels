import ChildC from "./ChildC";


function ChildB({fname,lname}){
    return(
    <>
            <h1>This is ChildB and its children is ChildC</h1>   
            <ChildC fn = {fname} ln = {lname}/>
    </>
    
    
     )
}

export default ChildB;
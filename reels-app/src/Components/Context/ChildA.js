import ChildB from "./ChildB";


function ChildA({fname,lname}){
    return(
        
        <>
        <h1>This is ChildA and his childrenB</h1>
        <ChildB fname = {fname} lname = {lname}/>
        </>
        )
}

export default ChildA;
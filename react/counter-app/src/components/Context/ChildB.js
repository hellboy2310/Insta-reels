import ChildC from './ChildC'

function ChildB({fname,lname}){
    return(
        <div>
            <h1>This is child B and its children is C</h1>
            <ChildC fname = {fname} lname = {lname}/>
        </div>
    )
}


export default ChildB;
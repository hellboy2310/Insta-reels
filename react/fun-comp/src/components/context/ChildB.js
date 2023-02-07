import ChildC from './ChildC'

function ChildB({firstName,lastName}){
    return(
        <div>
            <h1>this is child b and its children c</h1>
            <ChildC fname  = {firstName} lname = {lastName}/>
        </div>   
    )
}

export default ChildB;
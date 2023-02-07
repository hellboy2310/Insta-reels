import ChildB from './ChildB'

function ChildA({firstName,lastName}){
return(
    <div>
        <h1>This is child a and its childdren is b</h1>
        <ChildB fname = {firstName} lname = {lastName}/>
    </div>
)
    
}


export default ChildA;
import ChildB from './ChildB'

function ChildA({firstName,lastName}){
    return(
        <div>
           <h1> this is ChildA and its children B</h1>
           <ChildB firstName = {firstName} lastName = {lastName}/> 
            </div>
    )
}

export default ChildA;
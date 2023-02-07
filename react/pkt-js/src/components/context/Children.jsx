import Grandchildren from './Grandchildren'

function Children(){
    console.log("children is rendered");
    return(
        <>
        <div>I am chidlren</div>
        <Grandchildren></Grandchildren>
        </>
    )
}

export default Children;
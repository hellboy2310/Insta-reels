import GrandChildren from './Grandchildren';
function Children(){
    console.log("children function");
    return(
        <>
<div> this is a children component</div>
  <GrandChildren></GrandChildren>     
        </>
    )
}

export default Children;


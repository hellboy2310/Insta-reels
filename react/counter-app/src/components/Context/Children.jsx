import GrandChildren from './GrandChildren'



function Children(){
   
    console.log("rendered Children");
     return(
         <>
         <div>I am a children</div>
         <GrandChildren></GrandChildren>
         </>
     )
 }

 export default Children;
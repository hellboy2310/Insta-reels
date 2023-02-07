import  Children  from './Children';
import React from 'react'


function Parent(){
    console.log("Rendered parent");
    return(
        <>
        <div>I am a Parent</div>
        <Children></Children>
        </>
    )
}

export default React.memo(Parent);
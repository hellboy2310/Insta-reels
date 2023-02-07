import Children from './Children'
import React from 'react';


function Parent(){
    console.log("rendered parent");
    return(
        <>
        <div>I am a parent</div>
        <Children></Children>
        </>
    )
}

export default React.memo(Parent);
import React from 'react';
import Children from './Children';

function Parent(){
    console.log("parent function")
    
    return(
        <>
                <div>This is parent component</div>
        <Children></Children>
        </>
        
    )
}

export default React.memo(Parent);
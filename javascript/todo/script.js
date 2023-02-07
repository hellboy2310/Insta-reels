let inputTag = document.querySelector("input");
let ultag = document.querySelector("ul");
inputTag.addEventListener("keydown",function(e){
    let key = e.key;
    // console.log(key);
    if(key == 'Enter'){
        let value = inputTag.value;
        if(value == " "){
            return;
        }
        
        console.log(value);
        inputTag.value = "";

        let liTag = document.createElement("li");
       liTag.innerHTML =  `<div> ${value}</div>
        <div class = "delete"><i class="fa fa-trash" aria-hidden="true"></i></div>`

        
        ultag.appendChild(liTag);
        handleremoval(liTag);

    }

})


function handleremoval(liTag){
    let deletediv = liTag.querySelector(".delete")
        deletediv.addEventListener('click',function(){
            liTag.remove();
        })
}

let addBtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont");
let taskAreaCont = document.querySelector(".textarea-cont");
let addModal = true;
let mainCont = document.querySelector(".main-cont");
let allpriorityColors = document.querySelectorAll(".priority-color");
let removeBtn  = document.querySelector(".remove-btn");
let removeFlag = false;
let colors = ['lightpink','blue','green','black'];
let modalpriorityColor = colors[colors.length-1];
var uid = new ShortUniqueId();


//this is used to display the modal container
addBtn.addEventListener("click",function(){
    if(addModal){
        //show modal
        modalCont.style.display = "flex";
    }
    else{
        //hide
        modalCont.style.display = "none";
    }

    addModal = !addModal;
})

    for(let i = 0 ;i<allpriorityColors.length;i++){
        let priorityDivOneColor = allpriorityColors[i];
        
        priorityDivOneColor.addEventListener('click',function(){
            for(let j=0;j<allpriorityColors.length;j++){
                allpriorityColors[j].classList.remove("active");
            }
            priorityDivOneColor.classList.add("active");
            modalpriorityColor = priorityDivOneColor.classList[0];
        })
    }


modalCont.addEventListener("keydown",function(e){
    let key = e.key;
    if(key == 'Enter'){
        createTicket(modalpriorityColor,taskAreaCont.value);
        taskAreaCont.value = "";
        modalCont.style.display = "none";
        addModal = !addModal;

    }
})

removeBtn.addEventListener("click",function(){
    if(removeFlag){
        removeBtn.style.color='black';
    }
    else{
        removeBtn.style.color = "red";
    }
    removeFlag = !removeFlag;
})


function createTicket(ticketColor,task){

    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class","ticket-cont");
    ticketCont.innerHTML = `<div class = "ticket-color ${ticketColor}"></div>
        <div class = "ticket-id">#${uid()}</div>
        <div class = "task-area">${task}</div> 
        <div class = "lock-unlock"><i class="fa fa-lock"></i></div>`

    let lockUnlockBtn = ticketCont.querySelector(".lock-unlock i");
    let ticketTaskArea = ticketCont.querySelector(".task-area");

        lockUnlockBtn.addEventListener("click",function(){
            if(lockUnlockBtn.classList.contains("fa-lock")){
                lockUnlockBtn.classList.remove("fa-lock");
                lockUnlockBtn.classList.add("fa-unlock");
                ticketTaskArea.setAttribute("contenteditable","true");
            }
            else{
                lockUnlockBtn.classList.remove("fa-unlock");
                lockUnlockBtn.classList.add("fa-lock");
                ticketTaskArea.setAttribute("contenteditable","false");
            }
        })



        mainCont.appendChild(ticketCont);
//handling delete
            ticketCont.addEventListener("click",function(){
                if(removeFlag){
                    ticketCont.remove();
                }
            })


            //handle color
     let ticketColorBand = ticketCont.querySelector(".ticket-color");
     ticketColorBand.addEventListener("click",function(){
        let currentTicketColor = ticketColorBand.classList[1];
        let currentTicketColorIdx = -1;
        for(let i = 0;i<colors.length-1;i++){
            if(currentTicketColor == colors[i]){
                currentTicketColorIdx = i;
                break;
            }
        }
        let nextColorIdx = (currentTicketColorIdx + 1)%colors.length;
        let nextColor = colors[nextColorIdx];


        ticketColorBand.classList.remove(currentTicketColor);
        ticketColorBand.classList.add(nextColor);
    })       

}
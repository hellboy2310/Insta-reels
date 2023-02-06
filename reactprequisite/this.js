
// //this keyword depend upon how it is called

// // console.log(a);


// // function abc(){
// //     console.log(this);
// // }
// // abc();

// let obj = {
//     name : "bhavesh",
//     age : 24,
//     fn:function(){
        
//         function abc(){
//             console.log(this);
//         }
//     abc();
//     }

// }
// let ghi = obj.fn;
// ghi();

// let sum = function(a,b){
//     return a + b;
// }

// console.log(sum(2,3));


// let add = (a,b) =>{
//     console.log(a + b);
// }


// add(2,3);

// let arrowfunction = () =>{
//     console.log(this);
// }


// arrowfunction();




let obj = {
    name:"Bhavesh",
    age:22,
showDetails:function(){
    console.log(this.name + " " + this.age);
},
showDetailsArrow:()=>{
    console.log(this);
    console.log(this.name + "" + this.age);
}
}

obj.showDetails();
obj.showDetailsArrow();
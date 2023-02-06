let arr = [1,2,3];
// let a = arr[0];
// let b = arr[1];
// let c = arr[2];

// let [a,b=20,c,d = 10] = arr;


// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


// let obj = {
//     name : "bhavesh",
//     state:"Gujarat",
//     pincode:"380051"
// }

// let {name,state} = obj;
// console.log(name);
// console.log(state);

//nested obj

let obj = {

    name : "bhavesh",
    address:{
        country:"USA",
        state:{
            stateName:"Newyork",
            pincode:123455
        }
    }
}

let {name} = obj;
console.log(name);


let {address:{country:cd}}= obj;
console.log(cd);


let {address:{state:{pincode}}} = obj;
console.log(pincode);
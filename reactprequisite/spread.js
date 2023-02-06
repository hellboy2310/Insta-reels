// let arr = [1,2,3];

// let arr2  = [...arr];
// arr2[0] = 111;

// console.log(arr);
// console.log(arr2);



let obj = {
    name:"bhavesh",
    address:{
        country:"america",
        state:{
            stateName:"taxes",
            pincode:3900512
        }
    }
}


//shallow copy

let obj2 = {...obj};
obj2.name = "hellboy";
obj2.address.country = "india";


// console.log(obj.name);
// console.log(obj.address);
// console.log("##################");
// console.log(obj2.name);
// console.log(obj2.address);

 
//deep copy

let obj3 = JSON.parse(JSON.stringify(obj));//json.stringify will convert it into string and json.parse will again convert it into an object
obj3.address.country = "japan";

console.log(obj.address.country);
console.log(obj3.address.country);


function car(name,model,color){
    this.name = name;
    this.model = model;
    this.color = color;


    this.test = function(){
        console.log(`i am driving ${this.model}`  )
    }
}

let car1 = new car('bmw','x4','red');
console.log(car1);

car1.test();
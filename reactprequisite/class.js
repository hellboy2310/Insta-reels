class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    welcome(){
        console.log(this.name + "hello");
    }
}


class Teacher extends Person{
    constructor(name,age,classStrength){
        super(name,age);
        this.classStrength = classStrength;
    }
}



let person = new Person("adam",25);
console.log(person);

let person2  = new Teacher("bhavesh",20,101);
console.log(person2);
person.welcome();
person2.welcome();
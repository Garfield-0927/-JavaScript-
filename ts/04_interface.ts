// interface myInterface{
//   name: string;
//   age: number;
//   sex: number;
//   birth ?: string;

//   run():void;
// }

// let boy : myInterface;
// boy = {
//   name: "garfield",
//   age: 18,
//   sex: 0,
  
//   run(){
//     console.log("i'm running");
//   }
// }
// boy.run()   // i'm running

interface Animal{
  name: string;
  age: number;
  sex: number;
  birth ?: string;

  bark():void
}

class Dog implements Animal{
  name: string;
  age: number;
  sex: number;
  birth ?: string;

  constructor(name:string, age:number, sex:number, birth?:string){
    this.name = name;
    this.age = age;
    this.sex = sex;
    if(birth) 
      this.birth = birth;
  }
  
  bark(){
    console.log("wangwangwang!!");
  }
}

const dog = new Dog("sangchen", 21, 0)
console.log(dog.name+" "+dog.age);    // sangchen 21
dog.bark()      // wangwangwang!!
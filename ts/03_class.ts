// class Person{
//   name: string = "garfield";
//   static age: number = 18;
//   readonly sex: number = 1;

//   sayHello(){
//     console.log("hello, my name is "+this.name);
//   }
// }
// const per = new Person();
// console.log(Person.age);    // 18
// console.log(per.name);      // garfield
// per.sayHello()              // hello, my name is garfield



// 构造函数
// class Dog{
//   name: string;
//   age: number;

//   // 构造函数
//   constructor(name: string, age: number){
//     this.name = name;
//     this.age = age;
//   }


//   bark(){
//     alert("wang wang wang!!!")
//   }
// }

// const dog = new Dog("zhangsan", 2);
// const dog2 = new Dog("lisi", 4);
// console.log(dog);
// console.log(dog2);



// 类的继承
class Animal{
  name: string;
  age: number;

    constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  sayHello(){
    console.log("hahaha");
    
  }
}

class Dog extends Animal{
  sayHello(){
    console.log("wang wang wang!!!");
    
  }
}

class Cat extends Animal{
  sayHello(){
    console.log("miao~~~~~");
  }
}

const dog = new Dog("rango", 2)
const cat = new Cat("Rach", 4)
dog.sayHello()
console.log(dog);
cat.sayHello()
console.log(cat);










### 0、安装

​		此步骤省略。自行百度。



### 1、Hello World

- 创建01_helloTs.ts

  ```typescript
  console.log("Hello" + "TpyeScript");
  ```

- 在ts文件目录下输入`tsc + 文件命`进行ts编译，在当前目录下会生成相应js文件



### 2、类型指定

##### 2.1 变量类型的指定

- JavaScript中

  ```javascript
  let a;
  a = 2;
  a = 3;
  a = "hello"
  ```

  对a进行number类赋值以及字符串类赋值均可。

- TypeScript中

  ```typescript
  // 指定变量的类型
  // let 变量名: 类型
  let a: number;
  a = 2;
  a = 3;
  a = "hello"		// ERROR: Type 'string' is not assignable to type 'number'.
  
  // let 变量名 = 值
  // 如果声明和赋值是同时进行的，ts会自动对变量进行类型限定
  let b = false
  b = 123		//Type 'number' is not assignable to type 'boolean'.
  ```

  

##### 2.2 函数中参数类型的指定

- JavaScript中，函数的参数是不考虑个数以及类型的。

  ```javascript
  function sum(a,b){
      return a + b;
  }
  
  sum(123,456); 		// 579
  sum(123,"456")		// "123456"
  ```

  

- TypeScript中指定函数参数的类型。

  ```typescript
  function sum(a: number, b: number): number{
    return a + b;
  }
  sum(123,456);		// 579
  sum(123,"456");		// Argument of type 'string' is not assignable to parameter of type 'number'.
  sum(123,456,789)	// Expected 2 arguments, but got 3.
  ```

  

##### 2.3 any指定

​		有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 `any`类型来标记这些变量：

```typescript
let c: any;
c = 2;			// OK
c = false		// OK
```



##### 2.4 对象静态类型

- 对象类型

  ```typescript
  let beauty : {
    name: string,
    age: number
  } = {
    // 对象的属性名的类型必须一致
    name: "Rachel",
    age: 18
  }
  ```

  

- 数组类型

  ```typescript
  // beauties是一个数组，数组中的内容是string类型
  let beauties : string [] = ["Rachel","Lily","Lucy"]
  ```

  

- 类对象

  ```typescript
  class Person{}
  let rachel : Person = new Person()
  ```

  

- 函数对象

  ```typescript
  // greeting是一个函数，函数的返回值是string类型
  let greeting :()=>string = ()=>{return "how are you doing --Joey"}
  ```



##### 2.5 数组的类型指定

```typescript
// 指定数组均为number类型
let numArr : number[] = [1,2,3]

// 指定数组均为string类型
let strArr : string[] = ['string','hello']

// 指定数组中的混合类型
let Arr : (number|string)[] = ["string",1,2,"hello"]

// 指定数组中的对象类型
// 方法一： type alias 类型别名
// 方法二： class 类
type Beauty = {
  name: string,
  age: number
}
let beauties2 : Beauty[] = [{name:"Rachel", age:18},{name:"Cephass", age:21}]

class Cute{
  name: string;
  age: number
}
let cutes : Cute[] = [{name:"Rachel", age:18},{name:"Cephass", age:21}]
```





### 3、类（class）

#### 3.1 类的定义

​		使用class关键字来定义一个类，一个类中，既有方法，也有属性。

​		属性：

		- 实例属性：直接定义，需要通过对象的实例去访问
		- 静态属性：使用static开头定义的属性（类属性），直接通过类去访问
		- 只读属性：使用readonly开头定义的属性，表示无法修改

```typescript
class Person{
  name: string = "garfield";
  static age: number = 18;
  readonly sex: number = 1;

  sayHello(){
    console.log("hello, my name is "+this.name);
  }
}
const per = new Person();
console.log(Person.age);    // 18
console.log(per.name);      // garfield
per.sayHello()              // hello, my name is garfield
```



#### 3.2 构造函数

​		在编写类的时候，我们通常不能把属性给写死，不然new出来的对象的属性都是一模一样的，就是去了类存在的意义，所以我们需要构造函数constructor，每当我们new一个对象时，类中的构造函数就会立刻执行。而构造函数可以接受参数，我们通过接收得参数，以及this指针来设置我们对象中的属性值。

```typescript
class Dog{
  name: string;
  age: number;

  // 构造函数
  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }


  bark(){
    alert("wang wang wang!!!")
  }
}

const dog = new Dog("zhangsan", 2);
const dog2 = new Dog("lisi", 4);
console.log(dog);	// Dog {name: "zhangsan", age: 2}	
console.log(dog2);	// Dog {name: "lisi", age: 4}
```



#### 3.3 类的继承

​		首先我们举一个很常见的例子。我们把狗和猫都看作是一个类，狗类里面有 age 和 name 属性，有 sayhello 方法， 猫类里面也有相同的方法和属性，如果不用继承，我们两个class中都要写age和name属性以及sayhello方法，这样代码重复性高，看起来也比较冗长，所以引入继承。

​		一个类继承一个类，用关键字 ***extend*** ，被继承的那个类叫父类，继承于别人的类叫子类，**子类拥有父类中的所有属性以及方法**，在子类中，可以定义属于子类自己的方法，也可以**重写父类中的方法**，**重写不会影响到父类中的方法**！

```typescript
// 创建一个父类
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
// 子类
class Dog extends Animal{
  sayHello(){
    console.log("wang wang wang!!!");
    
  }
}
// 子类
class Cat extends Animal{
  sayHello(){
    console.log("miao~~~~~");
  }
}

const dog = new Dog("rango", 2)
const cat = new Cat("Rach", 4)
dog.sayHello()		// wang wang wang!!!
console.log(dog);  	// Dog {name: "rango", age: 2}
cat.sayHello()		// miao~~~~~
console.log(cat);	// Cat {name: "Rach", age: 4}
```



### 4、接口（interface）

#### 4.1 接口介绍

​		简单来说，接口有两个作用。

- 作为一种数据类型，就类似number，string，可以进行类型指定
- 用来约束类中的属性以及方法

#### 4.2 定义接口

​		通过关键字`interface`来定义接口。

```typescript
interface myInterface{
  name: string;
  age: number;
  sex: number;
  birth ?: string;

  run():void;
}
```

​		上面这个接口中，表示了myInterface类型中有name，age等属性以及run这个方法。

​		接下来我们可以指定某一个变量为myInterface类型，并运用里面的方法或者访问属性。

```typescript
let boy : myInterface;
boy = {
  name: "garfield",
  age: 18,
  sex: 0,
  
  run(){
    console.log("i'm running");
  }
}
boy.run()   // i'm running
```

#### 4.3 实现接口

​		上面提及了接口作为一种数据类型来使用，这里就介绍接口的另外一个作用——用来约束类中的属性以及方法。

```typescript
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
```



### 5、属性的封装

#### 5.1 属性修饰符

​		类中的属性有3种修饰符，它们分别起着不一样的效果

- public（default）：表示该属性是公有属性，随便在哪里都能进行访问以及修改
- private：表示该属性是私有属性，只能在该类的内部进行访问以及修改，在外部需要通过类中的getter和setter方法进行访问以及修改。在继承时，私有类也不会继承。
- protect：表示该属性是被保护的属性，同样只能在类的内部进行访问以及修改，但是与private不同的是在继承时，该属性会被继承至子类当中，也是作为被保护类。



#### 5.2 Ts中的getter与setter方法

​		与java类似，typescript中为了类中属性的安全，也同样有getter与setter机制。具体使用方法如下。

```typescript
class Person{
  private _name: string;
  private _age: number;

  constructor(name:string, age:number){
    this._name = name;
    this._age = age;
  }

  get name(){
    return this._name;
  }
  set name(name:string){
    this._name = name;
  }

  get age(){
    return this._age;
  }
  set age(age: number){
    if(age>0){
      this._age = age;
    }
  }

}

const per = new Person("gar",18)
console.log(per.name);		// gar
console.log(per.age);		// 18
// 修改内部私有属性
per.name = "field"
per.age = 17


```

​		有人可能会说，你这样也可以通过`person.age`以及`person.name`来进行修改和访问啊。但实际上只要把类中get和set后面的变量名写的稍复杂些，就没那么简单了，而且在getter与setter方法中，我们可以对想修改的值进行判断以及处理，这样就加强了程序的健壮性。



### 6、 泛型

#### 6.1 泛型的作用

​		在定义函数或者是类的时候，如果遇到类型不明确就可以使用泛型。那这时候就有帅气的小伙伴问了，我用any不行嘛？当然可以，但是用any的弊端在于使用了any就相当于关闭了typescript的类型判断，那typescript的作用又何在呢，JavaScript它不像嘛？所以泛型的作用就是在定义函数或者是类的时候，遇到类型不明确，就使用泛型。



#### 6.2 泛型的使用

​		通过**<>**（左右尖括号），来使用泛型。例如下面这个例子：

```typescript
function fn<T>(a:T):T{
  return a;
}
let res = fn<string>("garfield")  // 指定泛型为string
let res2 = fn<number>(123456)   // 指定泛型为number
```

​		这个类型T就是我声明的泛型，fn函数表示接受一个类型为T的参数，返回值也是T类型的。



​		此外，泛型可以同时指定多个。

```typescript
function fn2<T, K>(a:T, b:K):T{
  console.log(b);
  return a;
}

let res3 = fn2<number, string>(18, "garfield")
```



​		还可以指定继承特定接口或者特定类的泛型。用关键词extends，表示泛型T必须是接口Inter的子类或者是实现类。

```typescript
function fn3<T extends Inter>(a:T):number{
  return a.length
}
let res4 = fn3("garfield")		// 因为string中有length属性
console.log(res4);    //  8
```


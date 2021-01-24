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





### 3、类型注解（annotation）和类型推断（inference）


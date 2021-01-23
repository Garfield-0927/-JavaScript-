# TypeScript从入门到入坟



### 0、安装

​		此步骤省略。自行百度。



### 1、Hello World

- 创建01_helloTs.ts

  ```typescript
  console.log("Hello" + "TpyeScript");
  ```

- 在ts文件目录下输入`tsc + 文件命`进行ts编译，在当前目录下会生成相应js文件



### 2、TypeScript中的类型指定

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

  
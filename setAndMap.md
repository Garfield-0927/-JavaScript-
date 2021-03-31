### # 1. Set

#### 0. 定义

​		Set是ES6提供的一种新的数据结构，类似于数组，但是成员的值都是唯一的，没有重复的成员。



#### 1. 用法

```javascript
const s = new Set();
[1,2,3,4,5,1,1,2,3].forEach(item=>s.add(item))
console.log(s);		// Set(5) { 1, 2, 3, 4, 5 }
```

​		上面代码可以通过add()这个定义在Set上面的api来对Set实例添加成员。

​		Set的初始化可以接受一个数据（或者具有iterable接口的其他数据结构）作为参数。

```javascript
// eg1:
const s1 = new Set([1,2,3,4,2,3,1,5]);
console.log(...s1);     // 1,2,3,4,5

// eg2:
const s2 = new Set(document.querySelectorAll('div'));
// 上面这行代码和下面的代码是一样的效果
const s2_copy = new Set();
document
  .querySelectorAll('div')
  .forEach(div=>s2.add(div))
```



​		**需要注意的是向Set加入值的时候，不会发生类型转换，所以1和“1”是两个不同的值。**



#### 2. api

Set 结构的实例有以下属性。

- `Set.prototype.constructor`：构造函数，默认就是`Set`函数。
- `Set.prototype.size`：返回`Set`实例的成员总数。

Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。

操作方法：

- `Set.prototype.add(value)`：添加某个值，返回 Set 结构本身。
- `Set.prototype.delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。
- `Set.prototype.has(value)`：返回一个布尔值，表示该值是否为`Set`的成员。
- `Set.prototype.clear()`：清除所有成员，没有返回值。

遍历方法：

- `Set.prototype.keys()`：返回键名的遍历器
- `Set.prototype.values()`：返回键值的遍历器
- `Set.prototype.entries()`：返回键值对的遍历器
- `Set.prototype.forEach()`：使用回调函数遍历每个成员

`keys`方法、`values`方法、`entries`方法返回的都是遍历器对象。由于 Set 结构键名和键值是同一个值，所以`keys`方法和`values`方法的行为完全一致。

```javascript
const s4 = new Set(['foo','bar','baz'])
for (const item of s4.keys()) {
  console.log(item);
}
/*
foo
bar
baz
*/
for (const item of s4.values()) {
  console.log(item);
}
/*
foo
bar
baz
*/
for (const item of s4) {
  console.log(item); 	// 用forof遍历可以直接遍历Set（因为默认遍历生成器函数是他的value方法）
}
/*
foo
bar
baz
*/
for (const item of s4.entries()) {
  console.log(item);
}
/*
[ 'foo', 'foo' ]
[ 'bar', 'bar' ]
[ 'baz', 'baz' ]
*/
```



Set转成数组

`Array.from`方法可以将 Set 结构转为数组。

```javascript
const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items);
```



#### 3. 作用

- 去重

  ```javascript
  // 去除数组的重复成员
  console.log(...new Set([1,2,3,4,2,3,1,5]));         // 1 2 3 4 5 
  
  // 字符串去重
  console.log([...new Set('abbccefddc')].join(""))   // abcefd
  ```

  

- 实现并交差集

  ```javascript
  const a = new Set([1, 2, 4, 6]);
  const b = new Set([1, 6, 7, 3, 4]);
  // 并集
  const union = new Set([...a, ...b]);
  console.log(...union);      // 1 2 4 5 7 3
  // 交集
  const intersect = new Set([...a].filter(item => b.has(item)));
  console.log(...intersect);  // 1 4 6
  // 差集
  const difference = new Set([...a].filter(item => !b.has(item)));
  console.log(...difference); // 2
  ```

  

#### 4. Weakset

​		这里不介绍Weakset的含义以及使用，感觉也不太常用，牵扯到弱引用和垃圾回收机制。

​		有兴趣的小伙伴可以点击[这里](https://es6.ruanyifeng.com/#docs/set-map)。





### # 2. Map

#### 0. 定义

​		引言：JavaScript中的对象的本质是键值对的集合（hash结构），但是对象中的键只能是字符串形式，这产生了很大的约束和限制。

```js
const data = {};
const element = document.getElementById('myDiv');

data[element] = 'metadata';
data['[object HTMLDivElement]'] // "metadata"
```

​		上面代码原意是将一个 DOM 节点作为对象`data`的键，但是由于对象只接受字符串作为键名，所以`element`被自动转为字符串`[object HTMLDivElement]`。

​		为了解决这个问题，ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。



#### 1. 用法

​		我们还是通过new关键字来实例化Map，参数可以接受一个数组，该数组的成员是一个个表示键值对的数组。

```js
const item = [
  ['name', "gar"],
  ['school', "hust"]
]

const m1 = new Map(item)
console.log(m1);    // Map(2) { 'name' => 'gar', 'school' => 'hust' }
```

​		我们也可以通过set来给一个Map添加/修改键的值。

```js
const m2 = new Map();
m2.set('name', 'gar');
m2.set('school', 'hust');
console.log(m2);	// Map(2) { 'name' => 'gar', 'school' => 'hust' }
```

​		我们通过get方法来获取键所对应的值。

```js
const item = [
  ['name', "gar"],
  ['school', "hust"]
]
const m3 = new Map(item);
console.log(m3.get('name'));    // gar
console.log(m3.get('school'));  // hust
```

​		需要注意的是：Map中的键实际上都是对一个地址的引用，说白了就是指针，只有指针指向同一个地方，就是内存地址一样的情况下，Map才将其视为同一个键。下面通过一个例子来说明。

```js
const m4 = new Map();
const a = [1,2];
const b = [1,2];
m4.set(['a'], 'aaa');
console.log(m4.get(['a']));   // undefined
m4.set(a,'array1');
m4.set(b,'array2');
console.log(m4.get(a));       // array1
console.log(m4.get(b));       // array2
```

​		上面代码中，当我们给Map结构设置一个键为`['a']`之后，通过`get(['a'])`来获取值但是最终获取到的是`undefined`，原因是在Map眼中，它们的内存地址不同，同理上面中的变量`a`和`b`的值实际上是一样的，但是Map将他们视作了两个不同的键，因为他们俩在内存中的地址不同。



#### 2. api

Map的实例有以下属性：

- `Map.prototype.constructor`：构造函数，默认就是`Map`函数。
- `Map.prototype.size`：返回`Map`实例的成员总数。

Map实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。

操作方法：

- `Map.prototype.set(key, value)``set` ：方法设置键名`key`对应的键值为`value`，然后返回整个 Map 结构。如果`key`已经有值，则键值会被更新，否则就新生成该键。
- `Map.prototype.get(key)`：`get`方法读取`key`对应的键值，如果找不到`key`，返回`undefined`。
- `Map.prototype.has(key)`：`has`方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。
- `Map.prototype.delete(key)`：`delete`方法删除某个键，返回`true`。如果删除失败，返回`false`。
- `Map.prototype.clear()`：`clear`方法清除所有成员，没有返回值。

遍历方法：

- `Map.prototype.keys()`：返回键名的遍历器。
- `Map.prototype.values()`：返回键值的遍历器。
- `Map.prototype.entries()`：返回所有成员的遍历器。
- `Map.prototype.forEach()`：遍历 Map 的所有成员。

```js
const item = [
  ['name', "gar"],
  ['school', "hust"]
]

let m = new Map(item);

for (const key of m.keys()) {
  console.log(key);
}
// name
// school
for (const value of m.values()) {
  console.log(value);
}
// gar
// hust
for (const item of m.entries()) {
  console.log(item[0], item[1]);
}
// name gar
// school hust
for (const item of m) {
  console.log(item[0], item[1]);
}
// name gar
// school hust
m.forEach((value, key)=>console.log(value, key))
// gar name
// hust school
```



#### 3. 作用

- Map <==> Array

  ​	通过...操作符来展开Map

```js
const m1 = new Map()
  .set('height', 180)
  .set({name: 'gar', age: 18}, ['abc']);
console.log([...m1]);  
// [ [ 'height', 180 ], [ { name: 'gar', age: 18 }, [ 'abc' ] ] ]
```



- Map <==> Object

```js
function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k,v] of strMap) {
    obj[k] = v;
  }
  return obj;
}

const myMap = new Map()
  .set('yes', true)
  .set('no', false);
strMapToObj(myMap)
// { yes: true, no: false }
```

​		但是需要注意的是如果map的键或者值的结构比较复杂，比如说对象里面套对象，那么上面的方法就不起作用了。

```js
function Map2Obj(map){
  let obj = {};
  for (const [key, value] of map) {
    obj[key] = value;
  }
  return obj;
}
const item = [
  [{address:{
    country: "china",
    province: "shanghai"
  }, name: 'zjh'}, 'is a huster']
]
const m = new Map(item);
const obj = Map2Obj(m);
console.log(obj);		// { '[object Object]': 'is a huster' }
```

​		对象转为 Map 可以通过`Object.entries()`。

```javascript
let obj = {"a":1, "b":2};
let map = new Map(Object.entries(obj));
```



#### 4. Weakmap

​		这里不介绍Weakmap的含义以及使用，感觉也不太常用，牵扯到弱引用和垃圾回收机制。

​		有兴趣的小伙伴可以点击[这里](https://es6.ruanyifeng.com/#docs/set-map)。
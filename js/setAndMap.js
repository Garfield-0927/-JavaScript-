// const s = new Set();
// [1,2,3,4,5,1,1,2,3].forEach(item=>s.add(item))
// console.log(s);


// // eg1:
// const s1 = new Set();
// console.log(...s1);     // 1,2,3,4,5

// // eg2:
// const s2 = new Set(document.querySelectorAll('div'));
// // 上面这行代码和下面的代码是一样的效果
// const s2_copy = new Set();
// document
//   .querySelectorAll('div')
//   .forEach(div=>s2.add(div))

// // 去除数组的重复成员
// console.log(...new Set([1,2,3,4,2,3,1,5]));         // 1 2 3 4 5 

// // 字符串去重
// console.log([...new Set('abbccefddc')].join(""))   // abcefd


// let set = new Set();
// let a = NaN;
// let b = NaN;
// set.add(a);
// set.add(b);
// console.log(set.size); // Set {NaN}


// const s4 = new Set(['foo','bar','baz'])
// for (const item of s4.keys()) {
//   console.log(item);
// }
// /*
// foo
// bar
// baz
// */
// for (const item of s4.values()) {
//   console.log(item);
// }
// /*
// foo
// bar
// baz
// */
// for (const item of s4.entries()) {
//   console.log(item);
// }
// /*
// [ 'foo', 'foo' ]
// [ 'bar', 'bar' ]
// [ 'baz', 'baz' ]
// */


// const a = new Set([1, 2, 4, 6]);
// const b = new Set([1, 6, 7, 3, 4]);
// // 并集
// const union = new Set([...a, ...b]);
// console.log(...union);      // 1 2 4 5 7 3
// // 交集
// const intersect = new Set([...a].filter(item => b.has(item)));
// console.log(...intersect);  // 1 4 6
// // 差集
// const difference = new Set([...a].filter(item => !b.has(item)));
// console.log(...difference); // 2





// ==================   Map  ======================
// const item = [
//   ['name', "gar"],
//   ['school', "hust"]
// ]

// const m1 = new Map(item)
// console.log(m1);    // Map(2) { 'name' => 'gar', 'school' => 'hust' }


// const m2 = new Map();
// m2.set('name', 'gar');
// m2.set('school', 'hust');
// console.log(m2);
// const item = [
//   ['name', "gar"],
//   ['school', "hust"]
// ]
// const m3 = new Map(item);
// console.log(m3.get('name'));    // gar
// console.log(m3.get('school'));  // hust

// const m4 = new Map();
// const a = [1,2];
// const b = [1,2];
// m4.set(['a'], 'aaa');
// console.log(m4.get(['a']));   // undefined
// m4.set(a,'array1');
// m4.set(b,'array2');
// console.log(m4.get(a));       // array1
// console.log(m4.get(b));       // array2

// const item = [
//   ['name', "gar"],
//   ['school', "hust"]
// ]

// let m = new Map(item);

// for (const key of m.keys()) {
//   console.log(key);
// }
// // name
// // school
// for (const value of m.values()) {
//   console.log(value);
// }
// // gar
// // hust
// for (const item of m.entries()) {
//   console.log(item[0], item[1]);
// }
// // name gar
// // school hust
// for (const item of m) {
//   console.log(item[0], item[1]);
// }
// // name gar
// // school hust
// m.forEach((value, key)=>console.log(value, key))
// // gar name
// // hust school


// const m1 = new Map()
//   .set('height', 180)
//   .set({name: 'gar', age: 18}, ['abc']);
// console.log([...m1]);   // [ [ 'height', 180 ], [ { name: 'gar', age: 18 }, [ 'abc' ] ] ]


// function Map2Obj(map){
//   let obj = {};
//   for (const [key, value] of map) {
//     obj[key] = value;
//   }
//   return obj;
// }
// const item = [
//   [{address:{
//     country: "china",
//     province: "shanghai"
//   }, name: 'zjh'}, 'is a huster']
// ]
// const m = new Map(item);
// const obj = Map2Obj(m);
// console.log(obj);   // { '[object Object]': 'is a huster' }

let obj = {"a":1, "b":2};
console.log(Object.entries(obj));
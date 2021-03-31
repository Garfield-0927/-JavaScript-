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
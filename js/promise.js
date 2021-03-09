
function timeout(ms){
  let a = "i will be shown when promise is resolved";
  let b = "i will be shown when promise is rejected";
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if (ms>100) {
        resolve(a);     // 改变状态为fulfilled
      } else{
        reject(b)       // 改变状态为rejected
      }

    }, ms)
  })
}

// timeout(100).then(res=>{
//   console.log(res);
// }, err=>{
//   console.log(err);
// })

// timeout(200).then(res=>{
//   console.log(res);
// }, err=>{
//   console.log(err);
// })

// const p = timeout(300)
// p.then((val) => console.log('fulfilled:', val))
//   .catch((err) => console.log('rejected', err));
// const q = timeout(100);
// q.then((val) => {throw new Error("error")})
//   .catch((err) => console.log('rejected', err));    // rejected

// const q = timeout(100);
// q.then((val) => {throw new Error("error")})
//   .catch((err) => console.log('rejected', err))
//   .finally(()=>{
//     console.log("whatever the status of Promise is, i will always be executed!");
//   });

const a = timeout(1);
const b = timeout(50);
const c = timeout(100);
const p = Promise.all([a,b,c])
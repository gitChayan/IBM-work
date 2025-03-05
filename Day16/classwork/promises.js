//setTimeout,setInterval,setImmediate--------macrotask(depends on time not program order)
//promises,queMicroTask----------------microtask
// let name="synchronous";
// console.log(name);
// let surName="code";
// console.log(surName);

// setTimeout(()=>{
//     console.log("synchronously syncing-1");
// },3000);

// setTimeout(()=>{
//     console.log("synchronously syncing-2");
// },4000);
// console.log(name,surName);
// queueMicrotask(()=>console.log("Microtask syncing"))
// for(let i=0;i<5;i++){
//     console.log(i);
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
//     console.log(i);
// }
// for(let i=0;i<5;i++){
//     console.log(i);
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// }
// console.log(name,surName);

//promise
// let myPromise= new Promise((resolve,reject)=>{
//     let flag=true;
//     if(flag){
//         resolve("Promises are green flag");
//     }else{
//         reject("promises with red flag")
//     }
// });
// console.log(myPromise)
 async function fetchData(){
    let Data= await fetch("https://fakestoreapi.com/products");
    let ans= await Data.json();
    console.log(Data);
}
fetchData();
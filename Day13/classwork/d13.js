// foreach
let arr=[1,2,3,4,5,6,6,7,8,"mc","bc"];
// arr.forEach((element,index) => {
//    console.log(element,index); 
// });
// let ans= arr.forEach((el,i)=>{
//             return el;
// });   
// console.log(ans) ;//this return undefined whereas map return arry

// let ans= arr.map((el,i)=>{
//             //  return el;
//              return el**4;// this is task perform by 
//      }); 
//      console.log(ans);

//filter
// let output= arr.filter((el,i)=>{   //filter out on condition and return a new array
//     // return el%2==0 && el!=6;
//     return typeof el=="string" || el%5==0;
// });
// console.log(output);

//reduce
// let output=arr.reduce((ace,el)=>{
//     return ace+el;
// },1); //accumulator   "When accumulator not defined then first elemet of array assign as accumulator"
// console.log(output);


// let output= arr.filter((el,i)=>{   
//      return el%2==0 ;
        
//      }).map((el,index)=>{
//         return el*2;
//      }).reduce((ace,el)=>{
//         return ace+el;

//      });
//      console.log(output);

// let a=[123,35,4,6,2323,65,74,4,7];
// let anss=a.sort((a,b)=>{
//     return a-b;
// });
// console.log(anss);
    
let data =[
    {name:"watch",price:22200,des:"poor",rating:4},
    {name:"watch1",price:1200,des:"good",rating:4},
    {name:"watch1",price:2100,des:"good",rating:4},
    {name:"watch1",price:21100,des:" good good",rating:4},
    {name:"watch1",price:211100,des:" very good",rating:4}
]
data.sort((a,b)=>{
   return a.price-b.price;
})
console.log(data);
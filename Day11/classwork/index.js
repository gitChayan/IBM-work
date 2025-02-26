// let obj ={
//     name:"Chayan",
//     age:21,
//     roll:131,
//     subject:["math","science","english"],
//     myfunction:function(){
//         console.log("hey i am method of object");
//     },
//     subject:["math","science","english"],
//     newobj:{
//         name:"Ayan",
//         age:20,
//         roll:132,
//         subject:["math","science","english"],
//         nestedfunction:function(){
//             console.log("hey i am method of object");
//         },
//         nestedobj:{
//             myMethod:function(){
//                 console.log("another nested");
//             }
//         }

//     }
// }
// console.log(obj);
// console.log(obj.myfunction());
// obj.newobj.nestedfunction();
// obj.newobj.nestedobj.myMethod();

//if else 
// let n=15;
// if(n%3==0 && n%5==0){
//     console.log("FIZZ BUZZ");
// }
//  else if(n%3==0){
//     console.log("FiZZ");
// }
// else if(n%5==0){
//     console.log("BUZZ");
// }
//for loop
//for(start;condition;inc/dec)
// let num=100;
// for(let i=0;i<num;i++){
//     console.log(i);
// }
// let arr = [1,3,4,5,6,6,7];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i],i);
// }
// let str="sumon chyan ";
// for(let i=0;i<str.length;i++){
//     console.log(str[i]+i);
// }
// let ar=["1","a","r"];
// for(num of ar){
//     console.log(num);
// }

let arr=[1,2,3,4,5,6,7,8,9,10];
for(let i=1;i<arr.length;i++){
      if(i%2==0){
        console.log(i,"is even");
      }
      else{
        console.log(i,"odd");
      }
}
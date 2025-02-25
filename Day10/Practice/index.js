let str= "cgsudwhuwedihc csd";
console.log(str.length);
console.log(str.charAt(0));
console.log(str.length-1);
console.log(str[str.length-1]);

let arr =[1,2,3,4 ,"chyan", 1.12, true, false,undefined];
console.log(arr[arr.length-1]);
console.log(arr[4]);
arr.push("hello");
console.log(arr);
// arr.pop();
// console.log(arr);
arr.pop();
console.log(arr);
//splice and slice
//Object----------
let obj={
    //in object key is always string
    Chayan:{name:"Chayan",age:21,roll:131,subject:["math","science","english"]},
    ayan:{name:"Ayan",age:20,roll:132,subject:["math","science","english"]},
    1:undefined   
}
console.log(obj);
console.log(obj.Chayan.subject[1]);
delete obj.ayan
console.log(obj);

let name="Chayan";
let Class="B Tech";
let age=21;
let obj1={
    name,Class,age

}
console.log(obj1);


let ans=[1,2,3,4,[5,6,7,8,[9,10,11,12]]];
console.log(ans[4][4][0]);
//example
let superHeroes = {
    1: {
        name: 'Batman',
        power: ['intelligence', 'money'],
        health: 45,
        villains: [
            { name: 'Redhood', health: 34 },
            { name: 'Twoface', health: 64 }
        ],
        metadata: { favouriteColor: 'red', age: 15 }
    },
    2: {
        name: 'Ironman',
        power: ['jarvis', 'money'],
        health: 33,
        villains: [
            { name: 'Manderin', health: 44 },
            { name: 'Titanium Man', health: 56 }
        ],
        metadata: { favouriteColor: 'red', age: 13 }
    }
}

 console.log(superHeroes[2].villains[1].name);
 console.log(superHeroes[2].health);
    console.log(superHeroes[2].metadata.favouriteColor);
// Problem 1: Create a Student Management System (Using Objects) 
// Task: 
// Create an object student that has the following properties: 
// • name (string) 
// • rollNumber (number) 
// • marks (object containing subject-wise marks) 
// • getAverageMarks (method that calculates and returns the average of all subjects) 
// • checkPassOrFail (method that checks if the student has passed. A student is considered 
// passed if their average marks are above 40.)
let student ={
    name:"chayan",
    rollNumber:131,
    marks:{
        Algorithm:80,
        DBMS:95,
        Network:80,
        Software:100,
        Neumericals:100,
    },
    getAvgMarks:function(){
        let totalMarks = 0;
        let subjectCount = 0;
        for (const subject in this.marks) {
            totalMarks += this.marks[subject];
            subjectCount++;
        }
        return totalMarks / subjectCount;
    },
    getPassFail:function(){
        const avgMarks=this.getAvgMarks();
        if(avgMarks>40){
            console.log("Passed with -",avgMarks);
        }
        else{
            console.log("Fail");
        }
    },
    
}
console.log(student.getAvgMarks());
console.log(student.getPassFail());

// Problem 2: Library System (Nested Objects & Methods) 
// Task: 
// Create an object library that contains a books object, where each book has the following details: 
// • title (string) 
// • author (string) 
// • availableCopies (number) 
// • borrowBook (method that reduces the availableCopies by 1 if copies are available) 
// • returnBook (method that increases the availableCopies by 1)
const library={
    books: { 
        "Atomic Habits": { author: "James Clear", availableCopies: 3 }, 
        "The Alchemist": { author: "Paulo Coelho", availableCopies: 5 }, 
        }, 
        borrowBook: function(bookName) { 
        // Logic for borrowing a book 
        }, 
        returnBook: function(bookName) { 
        // Logic for returning a book 
        }
};
library.borrowBook("Atomic Habits"); 
console.log(library.books["Atomic Habits"].availableCopies);  
// Problem 3: Generate Multiplication Table (For Loop) 
// Task: 
// Write a function generateTable(num, limit) that prints the multiplication table of a given num up to 
// limit.

// function Multiplication(num,limit){
//     for(let n=1;n<=limit;n++){
//         console.log(`${num} x ${n} = ${num * n}`);
//     }
//     return ans;

// }
// Multiplication(5,10);

// Problem 5: Reverse a String Without Using .reverse() 
// Task: 
// Write a function reverseString(str) that takes a string and reverses it without using .reverse() 
// method.
let newString="";
function reverseString(str){
    for(let i=str.length-1;i>=0;i--){
       newString+=str[i]; 
    }
    return newString;
}
console.log(reverseString("chayan"));

// Problem 6: Remove Duplicates from an Array 
// Task: 
// Write a function removeDuplicates(arr) that removes duplicate elements from an array without 
// using Set(). 

function removeDuplicates(arr){
    let a=[];
    for(let  i=0;i<arr.length;i++){
        if(a.indexOf(arr[i])===-1){
            a.push(arr[i]);

        }
    }
    return a;
}
let ar=[1,1,2,3,4,5,6];
console.log(removeDuplicates(ar));
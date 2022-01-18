// Fat Arrow Function or Arrow Function

// 1. function without parameter & without return type
let num1= ()=>{
    console.log("Fat Arrow function is called...");
}
num1();

// 2. function with parameter & without return type
let num2= (a,b)=>{
    console.log("Addition is: " + (a+b));
}
num2(45,78);

// 3. function without parameter & with return type
let num3= ()=>{
    return(66+44);
}
let res1=num3();
console.log("Addition is: " + res1);

// 4. function with parameter & with return type
let num4= (a,b)=>{
    return(a+b);
}
let res2=num4(89,23);
console.log("Addition is: " + res2);

// OUTPUT
// Fat Arrow function is called...
// Addition is: 123
// Addition is: 110
// Addition is: 112
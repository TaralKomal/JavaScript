// Anonymous Function
// function does not have any name that function is called Anonymous Function

// 1. function without parameter & without return type
let temp1= function (){
    console.log("Anonymous Function is called");
}
temp1();

// 2. function with parameter & without return type
let temp2= function (a,b){
    console.log("2. Addition of a and b: "+(a+b));
}
temp2(89,11);

// 3. function without parameter & with return type
let temp3= function (){
    return (23+56);
}
let res1=temp3();
console.log("3. Addition of a and b: "+res1);

// 4. function with parameter & with return type
let temp4= function (a,b){
    return(a+b);
}

let res2=temp4(34,67);
console.log("4. Addition of a and b: "+res2);

// OUTPUT
// Anonymous Function is called
// 2. Addition of a and b: 100
// 3. Addition of a and b: 79
// 4. Addition of a and b: 101

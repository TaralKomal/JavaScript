// user defined function
// 1. function without parameter & without return type
function add1(){
    console.log("Type 1 function is called");
}

// 2. function with parameter & without return type
function add2(a,b){
    console.log("Type 2 function is called: "+ (a+b));
}

// 3. function without parameter & with return type
function add3(){
    return (71+96);
}

// 4. function with parameter & with return type
function add4(x,z){
    return (x+z);
}

add1();
add2(54,67);
let res1=add3();
console.log("Type 3 function is called: "+ res1);
let res2=add4(34,78);
console.log("Type 4 function is called: "+ res2);

// OUTPUT
// Type 1 function is called
// Type 2 function is called: 121
// Type 3 function is called: 167
// Type 4 function is called: 112

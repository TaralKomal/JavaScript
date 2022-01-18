// Control statement 
// if, if-else, if ladder, switch, break, continue, nested if-else 

if(45<56){
    console.log("if statement called...");
}
  
// OUTPUT:
// if statement called...

var time = 22;
if(time < 10){
    console.log("if statement called...Good Day");
} 
else{
    console.log("else statement called...Good Evening");
}

// OUTPUT:
// else statement called...Good Evening

var time = 14;
if(time < 10){
    console.log("Good Morning");
} 
else if(time < 18){
    console.log("Good Day");
} 
else{
    console.log("Good Evening");
}

// OUTPUT:
// Good Day

var day=7;
switch(day){
    case 1: console.log("Case 1...Monday");
            break;
    case 2: console.log("Case 2...Tuesday");
            break;
    case 3: console.log("Case 3...Wednesday");
            break;
    case 4: console.log("Case 4...Thursday");
            break;
    case 5: console.log("Case 5...Friday");
            break;
    case 6: console.log("Case 6...Saturday");
            break;
    case 7: console.log("Case 7...Sunday");
            break;
    default: console.log("Please choose correct day");   
}

// OUTPUT:
// Case 7...Sunday

var day=10;
switch(day){
    case 1: console.log("Case 1...Monday");
            break;
    case 2: console.log("Case 2...Tuesday");
            break;
    case 3: console.log("Case 3...Wednesday");
            break;
    case 4: console.log("Case 4...Thursday");
            break;
    case 5: console.log("Case 5...Friday");
            break;
    case 6: console.log("Case 6...Saturday");
            break;
    case 7: console.log("Case 7...Sunday");
            break;
    default: console.log("Please choose correct day");   
}

// OUTPUT:
// Please choose correct day
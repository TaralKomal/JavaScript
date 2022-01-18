// Loops
// for loop, while, do-while

var count1=5;
while(count1!=0){
    console.log("Count is: "+count1);
    count1--;
}

// OUTPUT:
// Count is: 5
// Count is: 4
// Count is: 3
// Count is: 2
// Count is: 1

var count2 =4;
do{
    console.log("Count is: "+count2);
    count2--;
}while(count2!=2)

// OUTPUT
// Count is: 4
// Count is: 3

for(let i=1; i<=5; i++){
    console.log("Value od i inside the for loop: "+i);
}

// OUTPUT:
// Value od i inside the for loop: 1
// Value od i inside the for loop: 2
// Value od i inside the for loop: 3
// Value od i inside the for loop: 4
// Value od i inside the for loop: 5

for(var i=1; i<=5; i++){
    console.log("Value od i inside the for loop: "+i);
}

console.log("Value of i outside the for loop: "+i);

// OUTPUT:
// Value od i inside the for loop: 1
// Value od i inside the for loop: 2
// Value od i inside the for loop: 3
// Value od i inside the for loop: 4
// Value od i inside the for loop: 5
// Value of i outside the for loop: 6

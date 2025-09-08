console.log(1)
console.log(2)
console.log(3)

    //start    condition   update
for (let i = 1; i <= 3; i = i+1) {  //first type of for loop
    console.log(i) //loop body --> things inside the curly brackets  
} //iteration --> anything pass the loop body


//second type of for loop
fav_fruits = ["mango","banana","apple"];
fav_fruits.push("strawberry")
var popped = fav_fruits.pop()

var shifted = fav_fruits.shift() //it's like sliding the stuff in the brackets to the left so that mango will be removed (pushes from right to left)
fav_fruits.unshift("kiwi") //pushes from left to right

console.log(popped)

for (let i = 0; i<=fav_fruits.lenght; i++) { //.length gives the number of things in the array
    console.log(fav_fruits[i]) 
}


//third type --> phyton style
for(let fruits of fav_fruits) {
    console.log(fruits)
}

//Next type --> favorite ni sir Roy  || more straightforward and easier to understand
fav_fruits.forEach(print_fruit) 

function print_fruit(fruit) {
    console.log(fruit)
}


i = 1; //start
while (i <= 10) {  //condition
    console.log(i);  //update
    i++; //this updates the value i
}


i = 1;
do {
    console.log(i);
    i++;
} while (i <= 3);


grades = [90, 88, 99, 98, 97, 10, 2]

sum = 0;
for (let i = 0; i < grades.length; i++) {
    sum += grades[i]
}
console.log(sum)

console.log(Math.min(...grades)) //we need the "...", not just grades

min = 10000000000000
for(let grade of grades) {
    if (grade < min) {
        min = grade
    }
}
console.log(min)


max = 10000000000000
for(let grade of grades) {  // same as for(i=0; i < grades.length; i++) {if (grades[i] > max) max = grades[i]}
    if (grade > max) {        
        max = grade
    }
}
console.log(max)

grades.push(100,20)
grades.sort((a,b) =>    a-b) //this is AI version
console.log(grades)






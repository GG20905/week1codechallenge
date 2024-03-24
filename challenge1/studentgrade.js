let userInput = prompt("Please enter a number:");
let number = parseFloat(userInput); // Convert the input to a floating-point number
console.log("User input as number:", number);


function studentGrades(marks){

if( marks >=79){
    return console.log('A')
}
else if(marks<79 && marks>=60){
    return console.log('B')
}
else if(marks <60 && marks >=49){
   return  console.log('C')
}
else if(marks>49 && marks >=40){
    return console.log('D')
}
else if (marks>40){
    return console.log('E')
}
}



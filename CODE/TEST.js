function createStudent(name,score){
    return{
        name:name,
        score:Number(score)
}}
function getScores(score){
    return Number(score)
}


let addMore = true;
let student = [];
let scores = [];
while(addMore){
 
    name = prompt("Input Name ");
    score = prompt("Enter Score: ");
    student.push(createStudent(name,score));
    scores.push(getScores(score));
    let again = prompt("Add more,'yes or no': ");
    if (again == "no"){
        addMore = false
    }
   
}
console.log(student);
//make a score array
console.log(scores);
//average score
let sum = 0
for(let num of scores){
    sum= sum+num;
}
let average = sum/scores.length
console.log("THIS IS THE AVERAGE OF THE STUDUDENTS" + average);
//name of student with the highest score

 
 let highest = student[0]
 for (let num of student){
     if (student.score > highest.score){
         highest = student
     }
 }
 console.log("Highest score: " + highest.score + " by " + highest.name);
 //passed and Failed
let pass = 0  
let fail = 0
for (let num of scores){
     if (num >= 50)
     pass++
     if (num < 50)
     fail++
     
}
console.log("amount that passed"+ pass)
console.log("failed"+fail)



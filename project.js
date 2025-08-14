

        //JS AND HTML LINKING CODE
          let student = [];
          let score = []; 
          function createStudent(name,score){
        return{
            name:name,
            score:Number(score)
        }
    }
    
         

           function updateStudentTable(){
        let tbody = document.getElementById("table-content");
        tbody.innerHTML = "";

       student.forEach(function(stu){
            tbody.innerHTML +=
            `<tr class="clear2">` +
            "<td>" + stu.name + "</td>" +
            "<td>" + stu.score + "</td>" +
            "</tr>";
        });

    }
      document.getElementById("studentForm").addEventListener("submit",function(event){
    event.preventDefault();

    let name = document.getElementById("name").value;
    let score = document.getElementById("score").value;
    
  
    student.push(createStudent(name,score));
    console.log(student)
    // create your student
    // display students
    // clear the form
    

});
//ADDMORE
document.getElementById("addMoreBtn").addEventListener("click",function(event){
    
    let name = document.getElementById("name").value;
    let score = document.getElementById("score").value;
    event.preventDefault();
    if (name && score){
    student.push(createStudent(name,score));
    console.log(student);
    document.getElementById("name").value = "";
    document.getElementById("score").value = "";
    
   
updateStudentTable();
    }else{
        console.log("one or both field are empty!")
        document.getElementById("sign").innerHTML="one or both field are empty!!"
       
    }

});


//CALC

document.getElementById("submit").addEventListener("click",function(event){
score = [];
function getScores(array){
 for (let i = 0; i < array.length; i++) {
    score.push(array[i].score);
}
return score;
}
function createAverage(array){
    let sum = 0;
    for(let n of array){
    sum = sum+n
}
let average = sum/array.length

return average;

}

let test1 = getScores(student)
let test2 = createAverage(score)

console.log(test1);
console.log(test2);


document.getElementById("score").value = "";
let highest = student[0]
 for (let num of student){
     if (num.score > highest.score){
         highest = num
     }
 }
 console.log("Highest score: " + highest.score + " by " + highest.name);
 //passed and Failed
let passMark = document.getElementById("passMark").value 
let pass = 0  
let fail = 0
for (let num of score){
     if (num >= passMark)
     pass++
     if (num < passMark)
     fail++
     
}
console.log("amount that passed"+ pass)
console.log("failed"+fail)
document.getElementById("result1").innerHTML="THE AVERAGE OF THE STUDENTS: "+ test2
document.getElementById("result2").innerHTML="THE NUMBER THAT PASSED: "+ pass
document.getElementById("result3").innerHTML="THE NUMBER THAT failed: "+ fail
document.getElementById("result4").innerHTML="Highest score: " + highest.score + " by " + highest.name
score = [];
});

//CLEAR BUTTON

document.getElementById("clear").addEventListener("click",function(event){
   let tbody = document.getElementById("table-content").innerHTML = "";
 
   student=[];
   score = [];
});
   




    

    

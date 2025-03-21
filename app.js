//UC 1
const IS_Absent = 0;
 
let empCheck = Math.floor(Math.random()* 10) % 2;

if(empCheck == IS_Absent){
    console.log("Employee is Absent");
    return;
}
else{
    console.log("Employee is Present");
}
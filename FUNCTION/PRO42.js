//H W

student={
    name:'poul',
    rollnumber:16,
    class:10,
    subject:'chemistry'


}
//display object
console.log(student);

//access value
console.log(student.subject);
//or
console.log(student['class']);

//access key

for(i in student){
    console.log(i);
}

//add seminar

student['seminar']='water scarcity'
console.log(student);

//remove seminar

delete student.seminar
console.log(student);

//update rollno to 10

student.rollnumber-=6
console.log(student);

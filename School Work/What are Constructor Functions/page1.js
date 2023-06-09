//constructor functions

function Student(id, name, subjects = [] ){         //capitalize function because it is there to creat objects. Not an operation
    this.id =  id;
    this.name = name;
    this.subjects = subjects;
}


//can not use an arrow function. 
Student.prototype.addSubject = function(subject){
    this.subjects = [...this.subjects, subject]
}


//example
const student1 = new Student(060507, Joseph, "Programming")  //creating a new student from the Constructor function.
const student2 = new Student(12345, Amber, "Physics")


//You can now add individual classes to each student and create students to shorten the length.
student2.addSubject("Math")
student1.addSubject("English")
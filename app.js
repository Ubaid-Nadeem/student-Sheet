
// console.log(random)
var students = [];
var shifted = ['Morning','Afternoon'];
var subjected = ['English','Math','Urdu','Computer','Biology','Chemistry']
for(let i=0;  i<100; i++){
    students.push({
        name: `student${i}`,
        class: `${Math.round( Math.random()*10)}`,
        shift: `${shifted[ Math.round( Math.random()*1)]}`,
        subject: `${subjected[ Math.round( Math.random()*5)]}` 
    })}
console.log(students);

document.write(`<table class='sheet' border 1><tr><th>Name</th><th>Class</th><th>Subject</th><th>Shift</th></tr>`);
for(let j=0; j<100; j++){
    document.write(`<tr><td>${students[j].name}</td> <td>${students[j].class}</td> <td>${students[j].subject}</td> <td>${students[j].shift}</td>`)
}
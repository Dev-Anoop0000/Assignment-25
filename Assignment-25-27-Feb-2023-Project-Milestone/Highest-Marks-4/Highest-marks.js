let student = ["Anoop", "Amit", "Narendra", "Ritesh", "Sumit"];
let marks = [98, 95, 90, 92, 93];
console.log(student, marks);

let highestMarks = marks.reduce((a, b) => a > b ? a : b);
console.log("Highest Marks : ", highestMarks);
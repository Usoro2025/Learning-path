const students = ["Alice", "Bob", "Charlie", "David", "Eva"];

const keys = {
    name: "Samuel",
    class: "10th",
    department: "Science",
    age: 10
}

for(let i = 0; i < students.length; i++) {
    console.log(` ${students[1]} and ${students[2]} are students in the class. They are in the ${keys.department} department. They are both in ${keys.class} grade, Mr. ${keys.name} is their class teacher. They are ${keys.age} years old.`);
    break;
}


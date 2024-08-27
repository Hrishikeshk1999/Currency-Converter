let student = {
    "id": 101,
    "name": "Amit",
    "brnach": "Comp",
    "perc": 76.34,
    "marks": [58,96,68,83,91],
    "address": {
        "city": "thane",
        "state": "MS",
        "pincode": "400601"
    }
}
console.log(student);
console.log(student.name);
console.log(student.marks);
console.log(student.marks[0]); //in [] bracket we are writing index number thats start from 0. so here total 0 to 4 index numbers are possible.
console.log(student.marks[4]);
console.log(student.marks[5]); // this index number is not valid as there are only 5 values in table.
console.log(student.address.city);
const student = [

    {id: 23, name : "orma saind"},
    {id: 24, name : "Manna"},
    {id: 25, name : "Moyoui"},
    {id: 23, name : "abul"}
];

const output = [];

for(let i; i < student.length; i++){
    const element = student[i];
  //  const nn = element[name];
    const nn = element.name;
    output.push(nn);
}
console.log(output);


// const names = student.map(s=>s.name);
// const ids = student.map(s=>s.id);
// const bigger = student.filter(s=> s.id>23);
// console.log(bigger);
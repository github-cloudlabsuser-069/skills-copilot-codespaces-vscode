const data = [
    [{ name: 'John', age: 25 }],
    [{ name: 'Jane', age: 30 }],
    [{ name: 'Bob', age: 35 }]
];

const names = data.flatMap(item => item.map(obj => obj.name));
console.log(names);

interface Human {
  name: String;
  age: Number;
  gender: String;
}

const person = {
  name: 'Seonghwan Cho',
  age: 19,
  gender: "male"
}

const sayHello = (person: Human): String => {
  return `Hello! ${person.name}, you are ${person.age} years old, and you are ${person.gender}`;
}

console.log(sayHello(person));

export {};
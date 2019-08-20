class Human {
  public name: string;
  public age: number;
  public gender: string;

  constructor (name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const seonghwan = new Human("seonghwan", 19, "male");

const sayHello = (person: Human): String => {
  return `Hello! ${person.name}, you are ${person.age} years old, and you are ${person.gender}`;
}

console.log(sayHello(seonghwan));

export {};
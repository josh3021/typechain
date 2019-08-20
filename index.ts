const name = "SeonghwanCho",
  age = 19,
  gender = "male";

const sayHello = (name: any, age: any, gender?: any) => {
  console.log(`Hello! ${name}, you are ${age} years old, and you are ${gender}`);
}

sayHello(name, age);

export {};
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const seonghwan = new Human("seonghwan", 19, "male");
const sayHello = (person) => {
    return `Hello! ${person.name}, you are ${person.age} years old, and you are ${person.gender}`;
};
console.log(sayHello(seonghwan));
//# sourceMappingURL=index.js.map
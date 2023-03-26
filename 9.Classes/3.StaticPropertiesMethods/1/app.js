class Rabbit extends Object {
  constructor(name) {
    super(); // надо вызвать конструктор родителя, когда наследуемся
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

alert( rabbit.hasOwnProperty('name') ); // true
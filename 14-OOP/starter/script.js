'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // this.calcAge = function () {
//   //   console.log('object function copy');
//   //   return 2023 - this.birthYear;
//   // };
// };

// let person = new Person('Bilal', 1999);
// console.log(person);
// // console.log(Person.prototype);
// // console.log(person.__proto__);
// // console.log(Person.prototype === person.__proto__);

// // ///////////////////////////////////////
// // // Prototypes

// // Person.prototype.calcAge = function () {
// //   return 2037 - this.birthYear;
// // };

// Person.prototype.numOFObject = 10;
// // console.log(person.calcAge());

// // // Person.prototype.__proto__ = null;

// // let bilal = {
// //   firstName: 'Bilal',
// //   birthYear: 1999,
// //   currentYear: 2023,
// //   __proto__: Person.prototype,
// // };
// // console.log(bilal);
// // console.log(person);
// // console.log(person.__proto__); //Person.prototype
// // console.log(person.__proto__.__proto__); //Object.prototype
// // console.log(person.__proto__.__proto__.__proto__); //null

// // // person.__proto__ = null;
// // console.log(person.hasOwnProperty('calcAge'));

// // // const h1 = document.querySelector('h1');
// // // console.log(h1);
// // // console.dir(h1);
// // console.dir(function () {});

// class PersonCl {
//   constructor(birthYear) {
//     // this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   firstName = 'Hello';
//   calcAge() {
//     return 2023 - this.birthYear;
//   }
// }

// PersonCl.prototype.greet = function () {
//   console.log('Hey', this.firstName);
// };

// let bilal = new PersonCl(1999);

// console.log(bilal, bilal.calcAge());
// bilal.greet();
// console.log(bilal.__proto__ === PersonCl.prototype);

// class Person {
//   constructor(name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
//   }

//   set name(name) {
//     if (typeof name === 'string') this._name = name;
//     else throw Error('Name not a string');
//   }
//   get name() {
//     return this._name;
//   }
// }

// let bilal = new Person('Bilal', 1999);
// console.log(bilal, bilal.name);
// bilal.name = 'Muskan';
// console.log(bilal);

// const PersonProto = {
//   calcAge() {
//     return 2023 - this.birthYear;
//   },
// };

// let bilal = { __proto__: PersonProto };
// // let bilal = Object.create(PersonProto);
// console.log(bilal);

////////////////////////////////////////////////////////////////////////////////
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   return 2023 - this.birthYear;
// };

// let bilal = new Person('Bilal', 1999);
// console.log(bilal, bilal.calcAge());

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   // this.firstName = firstName;
//   // this.birthYear = birthYear;
//   this.course = course;
// };

// // Student.prototype.__proto__ = Person.prototype;
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;
// // Student.prototype = { __proto__: Person.prototype, constructor: Student };

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// bilal = new Student('Bilal', 1999, 'Mechanical Engineering');
// console.log(bilal);
// bilal.introduce();

///////////////////////////////////////////////////////////////////////////////////

// class Person {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     return 2023 - this.birthYear;
//   }
// }

// let bilal = new Person('Bilal', 1999);
// console.log(bilal, bilal.calcAge());

// class Student extends Person {
//   constructor(firstName, birthYear, course) {
//     // Don't need to call Person.call(this, firstName, birtYear);
//     super(firstName, birthYear);
//     this.course = course;
//   }

//   intrduction() {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
//   }
// }

// bilal = new Student('Bilal', 1999, 'Mechanical Engineering');
// console.log(bilal, bilal.calcAge());
// bilal.intrduction();

/////////////////////////////////////////////////////////////////////////////////
// Inheritance Between "Classes": Object.create

// const PersonProto = {
//   calcAge() {
//     return 2037 - this.birthYear;
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// let bilal = Object.create(PersonProto);
// bilal.init('Bilal', 1999);
// console.log(bilal, bilal.calcAge());

// // StudentProto = Object.create(PersonProto);
// const StudentProto = {
//   introduction() {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
//   },

//   init(firstName, birthYear, course) {
//     PersonProto.init.call(this, firstName, birthYear);
//     this.course = course;
//   },
//   __proto__: PersonProto,
// };

// bilal = Object.create(StudentProto);
// bilal.init('Bilal', 1999, 'Mechanical Engineering');
// console.log(bilal, bilal.calcAge());
// bilal.introduction();

// ////////////////////////////////////////////////////////////////////////////////////

// Encapsulation: Protected Properties and Methods
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)
/*
class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      // if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  static count = 0;

  // 4) Private methods
  #approveLoan(val) {
    // _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit = function () {};
const acc2 = new Account('Jonas', 'EUR', 1111);
console.log(acc1.count);

// acc1._movements.push(250);
// acc1._movements.push(-140);
// acc1.approveLoan(1000);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();
console.dir(Account);

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));
*/

/** 1. prototype */
// const fruits = ['Apple', 'Banana', 'Cherry'];
// const fruits = new Array('Apple', 'Banana', 'Cherry');
// // JS에서 데이터는 생성자 함수에서 반환된 하나의 인스턴스(instance)

// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits.includes('Banana')); // includes() - 배열 데이터 안에 특정한 아이템 있는지 확인
// console.log(fruits.includes('Orange')); 

// Array.prototype.roze = function () {
//     console.log(this);
// }
// fruits.roze();

// const arr = [];
// arr.roze();

// const roze = {
//     firstName: 'Roze',
//     lastName: 'Kang',
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
    
// }

// const neo = {
//     firstName: 'Neo',
//     lastName: 'Lee'
// }

// console.log(roze.getFullName());
// console.log(roze.getFullName.call(neo));

// function User(first, last) {
//     this.firstName = first;
//     this.lastName = last;
// }

// User.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`
// }

// const roze = new User('roze', 'kang');
// const neo = new User('neo', 'lee');

// console.log(roze);
// console.log(neo);
// console.log(roze.getFullName());
// console.log(neo.getFullName());

//----------------------------------------------------------------------

/** 2. ES6 Class 기본문법 */
// function User(first, last) {
//     this.firstName = first;
//     this.lastName = last;
// }

// User.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// }

// class User {
//     constructor(first, last) {
//         this.firstName = first;
//         this.lastName = last;
//     }
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const roze = new User('Roze', 'Kang');
// const neo = new User('Neo', 'Lee');
// console.log(roze);
// console.log(neo);

// console.log(roze.getFullName());
// console.log(neo.getFullName());

//----------------------------------------------------------------------

/** 3. Getter, Setter */
// class User {
//     constructor(first, last) {
//         this.firstName = first;
//         this.lastName = last;
//         // this.fullName = `${first} ${last}`;
//     }
//     get fullName() { // Getter - 값을 조회
//         console.log('Getting Full Name!!');
//         return `${this.firstName} ${this.lastName}`;
//     }
//     set fullName(value) { // Setter - 값을 할당
//         console.log(value);
//         console.log(value.split(' '));
//         [this.firstName, this.lastName] = value.split(' ');
//     }
// }

// const roze = new User('Roze', 'Kang');
// console.log(roze.fullName);

// roze.firstName = 'Neo';
// console.log(roze.fullName);

// roze.fullName = 'Neo Lee';
// console.log(roze);

//----------------------------------------------------------------------

/** 4. 정적메소드(Static Methods) */
// class User{
//     constructor (first, last) {
//         this.firstName = first;
//         this.lastName = last;
//     }
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
//     static isUser(user) { // 정적 메소드(Static Methods) - 클래스 자체에서 바로 호출해서 사용 가능
//         if (user.firstName && user.lastName) {
//             return true;
//         }
//         return false;
//     }
// }

// const roze = new User('Roze', 'Kang');
// const neo = new User('Neo', 'Lee');
// const lewis = {
//     name: 'Lewis Yang',
//     age: 85
// }

// console.log(roze.getFullName());
// console.log(neo.getFullName());
// console.log(User.isUser(roze));
// console.log(User.isUser(neo));
// console.log(User.isUser(lewis));

//----------------------------------------------------------------------

/** 5. 상속과 instanceof */

// 상속(Inheritance)

// 운송수단
// class Vehicle {
//     constructor (acceleration = 1){
//         this.speed = 0;
//         this.acceleration = acceleration;
//     }
//     accelerate() {
//         this.speed += this.acceleration;
//     }
//     decelerate() {
//         if(this.speed <= 0){
//             console.log('정지!!');
//             return;
//         }
//         this.speed -= this.acceleration;
//     }
// }

// // 자전거
// class Bicycle extends Vehicle { // Bicycle은 Vehicle에서 상속 받아서 사용중
//     constructor(price = 100, acceleration) {
//         super(acceleration); // Vehicle 클래스가 가지고 있는 constructor
//         this.price = price;
//         this.wheel = 2;
//     }
// }

// const bicycle = new Bicycle(300);
// bicycle.accelerate();
// bicycle.accelerate();
// console.log(bicycle);

// // instanceof - instanceof의 키워드 앞쪽에 있는 데이터가 키워드 뒤쪽에 있는 클래스에서 인스턴스로 만들어져있는지 확인
// console.log(bicycle instanceof Bicycle); 
// console.log(bicycle instanceof Vehicle); 

// // 자동차
// class Car extends Bicycle {
//     constructor (license, price, acceleration) {
//         super(price, acceleration);
//         this.license = license;
//         this.wheel = 4;
//     }
//     accelerate() { // 오버라이딩
//         if(!this.license){
//             console.error('무면허!!');
//             return;
//         }
//         this.speed += this.acceleration;
//         console.log('가속!!', this.speed);
//     }
// }

// const carA = new Car(true, 7000, 10);
// const carB = new Car(false, 4000, 6);

// carA.accelerate();
// carA.accelerate();
// carB.accelerate();

// console.log(carA);
// console.log(carB);

// console.log(carA instanceof Vehicle);
// console.log(carB instanceof Car);

// // 보트
// class Boat extends Vehicle{
//     constructor(price, accelerate) {
//         super(accelerate);
//         this.price = price;
//         this.moter = 1;
//     }
// }

// const boat = new Boat(10000, 5);
// console.log(boat);
// console.log(boat instanceof Boat);
// console.log(boat instanceof Vehicle);
// console.log(boat instanceof Bicycle);
// console.log(boat instanceof Car);

//----------------------------------------------------------------------

/** 6. instanceof와 constructor */
// class A {
//     constructor(){

//     }
// }
// class B extends A { // class B는 class A를 상속받음
//     constructor(){
//         super();
//     }
// }
// class C extends B { // class C는 class B를 상속받음
//     constructor(){
//         super();
//     }
// }

// const a = new A();
// const b = new B();
// const c = new C();

// console.log(a instanceof A);
// console.log(a instanceof B);
// console.log(a instanceof C);

// console.log('');

// console.log(b instanceof A);
// console.log(b instanceof B);
// console.log(b instanceof C);

// console.log('');

// console.log(c instanceof A);
// console.log(c instanceof B);
// console.log(c instanceof C);

// console.log('');

// // constructor 속성과 해당하는 클래스의 constructor 비교
// console.log(c.constructor === A); 
// console.log(c.constructor === B); 
// console.log(c.constructor === C); 

// // const fruits = ['Apple', 'Banana'];
// const fruits = new Array('Apple', 'Banana');

// console.log(fruits.constructor === Array);
// console.log(fruits instanceof Array);
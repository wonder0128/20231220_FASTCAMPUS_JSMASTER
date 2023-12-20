//-----------------------------------------------------------------------

/* 1. 원시형 - string, number */

// console.log(123)

// const string1 = "Hello";
// const string2 = 'hello';
// const string3 = `Hello ${string1} ?!`; // 백틱 - 데이터 채워넣을때 사용(템플릿 리터럴)

// console.log(string3)

// const number = 123
// const number1 = -123

// console.log(typeof (number + undefined)) // NaN 
// console.log(number1 + 1)

// const number2  = 123.1234
// const pi = .14 // 0.14
// console.log(typeof pi)

// const a = 0.1
// const b = 0.2

// console.log(a + b) // 0.30000000000000004
// console.log((a + b).toFixed(1)) // 0.3 - 문자
// console.log(Number((a + b).toFixed(1))) // 0.3 - 숫자

//-----------------------------------------------------------------------

/* 2. 원시형 - boolean, null, undefined */


// Boolean(불린)
// const a = true;
// const b = false;

// if(b){
//     console.log("hello")
// }

// // let age = null; // 명시적
// let age; // 암시적(자동) - 변수에 아무것도 정의 안하면 undefined
// console.log(age)

// setTimeout(function(){
//     age = 85
//     console.log(age)
// }, 1000)

// const user = {
//     name: "ROZE",
//     age: 85,
//     email: null
// }
// console.log(user.name)
// console.log(user.age)
// console.log(user.email)
// console.log(user.abc)

//-----------------------------------------------------------------------

/* 3. 참조형 - Array */

// Array(배열)

// 'Apple', 'Banana', 'Cherry' - 아이템, 요소(Element)
// const fruits = new Array('Apple', 'Banana', 'Cherry');

// const fruits = ['Apple', 'Banana', 'Cherry']; // 리터럴 방식 - 배열 리터럴
// console.log(fruits);
// console.log(fruits[1]); // 인덱싱(대괄호 표기법)
// console.log(fruits.length); // 3
// console.log(fruits[fruits.length - 1]); // Cherry

//-----------------------------------------------------------------------

/* 4. 참조형 - Object */

// Object(객체)
// const user = new Object();
// user.name = 'ROZE';
// user.age = 85

// key:value 
// key : 속성, property  / value : 값
// console.log(user) // {name: 'ROZE', age: 85}

// function User(){
//     this.name = "ROZE";
//     this.age = 85;
// }
// const user = new User();

// const userA = {
//     name: 'ROZE',
//     age: 85
// }

// const userB = {
//     name: 'NEO',
//     age: 22,
//     parent: userA
// }

// console.log(userB);
// console.log(userB.parent);
// console.log(userB.parent.name);
// console.log(userB['parent'].name);
// console.log(userB['parent']['name']);

// const users = [userA, userB];

// console.log(users[0].name);
// console.log(users[0]["name"]);

// const key = 'age';

// console.log(user)

// console.log(user.name); // 점 표기법
// console.log(user.age); // 점 표기법

// console.log(user['name']); // 대괄호 표기법
// console.log(user['age']); // 대괄호 표기법
// console.log(user[key]); // 대괄호 표기법

// -----------------------------------------------------------------------

/* 5. 참조형 - function */

// function hello(){
//     console.log('Hello!!!');
// }

// // hello() // Call(호출)
// console.log(hello);
// console.log(hello());

// function getNumber(){
//     return 123;
// }

// 익명 함수
// const getNumber = function(){
//     return 123;
// }

// console.log(typeof getNumber); // function
// console.log(typeof getNumber()); // number

// const a = function (){
//     console.log('A');
// }

// const b = function (c){
//     console.log(c);
//     c();
// }

// b(123);
// b(a);

// -----------------------------------------------------------------------

/* 6. 형변환(Type Conversion) */

// const a = 1; // Number
// const b = '1'; // String

// const a = 0;
// const b = false;

// const a = true;
// const b = 1;

// console.log(a === b); // 일치 연산자(===)
// console.log(a == b); // 동등 연산자(==)

// -----------------------------------------------------------------------

/* 7. 참과 거짓(Truthy & Falsy) */

// 참 - 아래 7개의 값 제외하고는 나머지 true
// 1) false 
// 2) 0
// 3) null
// 4) undefined
// 5) NaN
// 6) '' 빈문자열
// 7) 0n - BigInt

// if('') {
//     console.log('참!!');
// }

// const fruits = ['Apple', 'Banana']; // truthy
// const fruits = []; // falsy
// const fruits = ['Apple']; // truthy

// if (fruits.length) {
//     console.log('아이템이 들어가 있음!!');
// }

// -----------------------------------------------------------------------

/* 8. 데이터 타입 확인 */
const a = 123;
console.log(typeof a); // number

console.log(typeof 'Hello'); // string
console.log(typeof 'Hello' === 'string');
console.log(typeof 123 === 'number');
console.log(typeof false === 'boolean');
console.log(typeof undefined === 'undefined');

console.log(typeof null); // object
console.log(typeof null === 'object'); 

console.log(typeof []);
console.log(typeof [] === 'object');

console.log(typeof {});
console.log(typeof {} === 'object');

console.log(typeof function(){});
console.log(typeof function(){} === 'function');

console.log([].constructor);
console.log([].constructor === Array);

console.log({}.constructor);
console.log({}.constructor == Object);

// console.log(null.constructor);
// console.log(Object.prototype.toString.call(null).slice(8,-1) === 'Null');

function checkType(data){
    return Object.prototype.toString.call(data).slice(8,-1);
}

console.log(checkType(null) === 'Null');
console.log(checkType([]) === 'Array');
console.log(checkType({}) === 'Object');
console.log(checkType(undefined) === 'Undefined');
console.log(checkType('hello') === 'String');
console.log(checkType(123) === 'Number');
console.log(checkType(function(){}) === 'Function');

//-----------------------------------------------------------------------
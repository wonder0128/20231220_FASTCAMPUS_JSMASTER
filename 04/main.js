//----------------------------------------------------------------------

/* 1. 선언과 표현 그리고 호이스팅 */

// 함수(Function)

// 함수 선언문(Declaration)
// function hello () {}

// 함수 표현식(Expression) - 기명함수나 익명함수에 상관 없이 무조건 함수 표현식
// const hello = function () {}
// const world = function hello () {}

// 호이스팅(Hoisting) 
// 선언된 부분 내에서 유효한 범위 안에서 제일 꼭대기로 끌어올려서 함수 동작 - 함수 선언문에서만 발생

// function hello () {
//     console.log('Hello~');
// }

// hello();

// function hello () {
//     console.log('Hello~');
// }

// const hello = function () {
//     console.log('hello!!!');
// }

//----------------------------------------------------------------------

/* 2. 반환 및 종료 */
// function hello() {
//     return 'Hello~';
//     console.log('wow'); // 반환 후 다음 코드 동작 안하고 종료됨.
// }

// function hello() {
//     return; // undefined
// }

// console.log(hello());
// console.log(hello);

// function plus(num){
//     if(typeof num !== 'number'){
//         console.log('숫자 입력 해주세요');
//         return 0;
//     }
//     return num + 1;
// }

// console.log(plus(2));
// console.log(plus(7));
// console.log(plus()); // undefined + 숫자 = NaN

//----------------------------------------------------------------------

/* 3. 매개변수 패턴 */

// 매개변수 패턴(Parameter Pattern)

// 1. 기본값(Default value) - 매개변수에 기본값 지정, 인수가 없을 경우에 기본값 사용.
// function sum(a, b = 1) {
//     return a + b;
// }

// console.log(sum(1, 2));
// console.log(sum(7)); 

// 2. 구조 분해 할당(Destructuring assignment)
// const user = {
//     name: 'Roze',
//     age: 85,
//     email: 'rexlam@naver.com'
// }

// function getName(user) {
//     const {name} = user;
//     return name;
//     // return user.name;
// }

// function getName({name}){
//     return name;
// }

// function getEmail({email = '이메일이 없습니다.'}) {
//     return email;
// }

// console.log(getName(user));
// console.log(getEmail(user)); 

// const fruits = ['Apple', 'Banana', 'Cherry'];
// const numbers = [1, 2, 3, 4, 5, 6, 7];

// function getSecondItem (array){
//     return array[1];
// }

// function getSecondItem ([, b]){
//     return b;
// }

// console.log(getSecondItem(fruits));
// console.log(getSecondItem(numbers));

// 3. 나머지 매개변수(Rest parameter)
// function sum (...rest) {
//     console.log(rest);
//     console.log(arguments); // arguments - 유사 배열(Array-Like)
//     //reduce() - 배열 데이터의 아이템 갯수 만큼 콜백 함수 실행
//     return rest.reduce(function (acc, cur){
//         return acc + cur;
//     }, 0);
// }

// console.log(sum(1, 2));
// console.log(sum(1, 2, 3, 4));
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//----------------------------------------------------------------------

/* 4. 화살표 함수(Arrow Fucntion) - 함수 표현식으로 작성 */
// function sum() {}
// const sum = function () {};
// const sum = () => {}

// function sum(a, b) {
//     return a + b;
// }

// const sum = (a, b) => {
//     return a + b
// }
// const sum = (a, b) => a + b;

// console.log(sum(1, 2));
// console.log(sum(10, 20));

// const a = () => {}
// const b = x => {}
// const c = (x, y) => {}
// const d = x => {return x * x}
// const e = x => x * x;
// const f = x => {
//     console.log(x*x);
//     return x * x;
// }
// const g = () => {return {a: 1}}
// const h = () => ({a: 1}); // 객체데이터와 함수 범위를 지정하는 중괄호 기호가 동일하므로 소괄호로 한번 더 묶어서 반환해야 함.
// const i = () => {return [1, 2, 3]}
// const j = () => [1, 2, 3];

//----------------------------------------------------------------------

/* 5. 즉시실행함수(IIFE, Immediately-Invoked Function Expression) */
// const a = 7;
// const double = () => {
//     console.log(a * 2);
// }
// double();

// (() => {
//     console.log(a * 2);
// })();

// (() => {console.log(a * 2);})();       // (F)()
// (function () {console.log(a * 2);})(); // (F)()
// (function () {console.log(a * 2);}()); // (F())
// !function() {console.log(a * 2);}();   // !F()
// +function() {console.log(a * 2);}();   // +F()

// ((a, b) => {
//     console.log(a);
//     console.log(b);
// })(1, 2); // 두번째 소괄호에 들어가는 데이터들이 매개변수로 전달.

// ((a, b) => {
//     console.log(a.innerWidth);
//     console.log(b.body);
// })(window, document); 

//----------------------------------------------------------------------

/* 6. 콜백(Callback) - 함수가 실행 될 때 인수로 들어가는 또 하나의 함수 */
// const a = callback => {
//     callback(); // b함수 실행
//     console.log('A');
// };

// const b = () => {
//     console.log('B');
// };

// a(b); // 콜백 함수 - a함수가 호출 될때 b함수가 인수로 들어감

// const sum = (a, b) => a + b;
// const sum = (a, b, c) => {
//     setTimeout(() => {
//         c(a + b);
//     }, 1000); // 코드를 지정한 시간만큼 지연해서 실행
// }

// sum(1, 2, value => {
//     console.log(value);
// });
// sum(3, 7, value => {
//     console.log(value);
// });

// 
// const loadImg = (url, cb) => {
//     const imgEl = document.createElement('img');
//     imgEl.src = url;
//     imgEl.addEventListener('load', () => {
//         setTimeout(() => {
//             cb(imgEl);
//         }, 1000);

//     });
// }

// const containerEl = document.querySelector('.container');
// loadImg('https://media.istockphoto.com/id/1482199015/ko/%EC%82%AC%EC%A7%84/%ED%96%89%EB%B3%B5%ED%95%9C-%EA%B0%95%EC%95%84%EC%A7%80-%EC%9B%A8%EC%9D%BC%EC%8A%A4-%EC%96%B4-%EC%BD%94%EA%B8%B0-14-%EC%A3%BC%EB%A0%B9-%EA%B0%9C%EA%B0%80-%EC%9C%99%ED%81%AC%ED%95%98%EA%B3%A0-%ED%97%90%EB%96%A1%EC%9D%B4%EA%B3%A0-%ED%9D%B0%EC%83%89%EC%97%90-%EA%B3%A0%EB%A6%BD%EB%90%98%EC%96%B4-%EC%95%89%EC%95%84-%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4.jpg?s=2048x2048&w=is&k=20&c=ay8lSz7x8m5VILFQGik-7cQO6tk2fwYFklMuHHWzcYs=', imgEl => {
//     containerEl.innerHTML = '';
//     containerEl.append(imgEl);
// }); 

//----------------------------------------------------------------------

/* 7. 재귀함수(Recursive) - 하나의 함수에서 자기 자신을 호출하는 함수, 무한 동작 */
// let i = 0;
// const a = () => {
//     console.log('A');
//     i++;
//     if(i < 4){
//         a(); // 재귀 함수
//     }
// }

// a();

// const userA = {name: 'A', parent: null}
// const userB = {name: 'B', parent: userA}
// const userC = {name: 'C', parent: userB}
// const userD = {name: 'D', parent: userC}

// const getRootUser = user => {
//     if(user.parent){
//         return getRootUser(user.parent);
//     }
//     return user;
// }
// console.log(getRootUser(userA));

//----------------------------------------------------------------------

/* 8. 호출 스케줄링(Scheduling a function call) */

// const hello = () => {
//     console.log('Hello~')
// };

// // const timeout = setTimeout(hello, 2000);
// const timeout = setInterval(hello, 2000); // 2초마다 함수 실행
// // clearTimeout(timeout); // 타이머 해제

// const h1El = document.querySelector('h1');
// h1El.addEventListener('click', () => {
//     console.log('clear');
//     // clearTimeout(timeout);
//     clearInterval(timeout); // Interval 함수 해제
// })

//----------------------------------------------------------------------

/* 9. this */
// 일반 함수의 this는 호출 위치에서 정의
// 화살표 함수의 this는 자신이 선언된 함수(렉시컬 - 함수가 동작 할 수 있는 유효한 범위) 범위에서 정의

// const user = {
//     firstName: 'Roze',
//     lastName: 'Kang',
//     age: 85,
//     // getFullName: function(){
//     //     return `${this.firstName} ${this.lastName}` // this는 user객체의 데이터
//     // }
//     getFullName: () => {
//         return `${this.firstName} ${this.lastName}` // undefined undefined
//     }
// }

// function user() {
//     this.firstName = 'Neo'
//     this.lastName = 'Lee'

//     return { // 멤버 = firstName, lastName, age -> 속성 / getFullName -> method
//         firstName: 'Roze',
//         lastName: 'Kang',
//         age: 85,
//         // getFullName: () => {
//         //     return `${this.firstName} ${this.lastName}` // Neo Lee - 현재 함수를 감싸고 있는 또 다른 외부 함수를 참조
//         // }
//         // getFullName: function () {
//         //     return `${this.firstName} ${this.lastName}`; // Roze Kang
//         // }
//         getFullName() { // 일반함수
//             return `${this.firstName} ${this.lastName}`; // Roze Kang
//         }
//     }
// }

// const lewis = {
//     firstName: 'Lewis',
//     lastName: 'Yang'
// }

// const u = user();
// console.log(u.getFullName());
// console.log(u.getFullName.call(lewis)); // Lewis Yang - u가 가지고 있는 getFullName 메소드를 빌려서 호출

// const timer = {
//     title: 'TIMER!',
//     timeout() {
//         console.log(this.title);
//         setTimeout(() => {
//             console.log(this.title); // 일반 함수 사용 -  undefined, 화살표 함수 - TIMER!
//         }, 1000);
//     }
// }
// timer.timeout();

//----------------------------------------------------------------------
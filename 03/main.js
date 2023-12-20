//-----------------------------------------------------------------------

/* 1. 산술, 할당, 증감 연산자 */

// 산술(Arithmetic)
// console.log(1 + 2);
// console.log(5 - 7);
// console.log(3 * 4);
// console.log(10 / 2);
// console.log(7 % 5);

// function isEven(num) {
//     return num % 2 === 0;
// }
// console.log(isEven(3));
// console.log(isEven(12));
// console.log('------------------')

// 할당(Assignment)
// const a = 3; // const - 값 재할당이 안됨

// let a = 3; // let - 값 재할당 가능

// a = a + 2;
// a += 2;

// a = a - 2;
// a -= 2;

// a = a * 2;
// a *= 2;

// a = a / 2;
// a /= 2;

// a = a % 2;
// a %= 2;

// console.log(a);
// console.log('------------------')

// 증감(Increment & Decrement)
// let b = 3;

// console.log(b++); // 증가연산자
// console.log(++b); // 증가연산자
// console.log(b);

// console.log('')

// console.log(b--); // 감소연산자
// console.log(--b); // 감소연산자
// console.log(b);

//-----------------------------------------------------------------------

/* 2. 부정, 비교 연산자 */
// 부정(Negation) - !
// console.log(!true); // false
// console.log(!false); // true

// console.log(!0); // true
// console.log(!!0); // true -> false
// console.log(!!!0); // true -> false -> true
// console.log(!null); // true
// console.log(!undefined); // true
// console.log(!NaN); // true
// console.log(!''); // true

// console.log(!{}); // false
// console.log(![]); // false

// 비교(Comparison)
// const a = 1;
// const b = 3;

// 동등연산자(형변환)
// console.log(a == b); // false

// 부동연산자(형변환)
// console.log(a != b); // true

// 일치연산자
// console.log(a === b); // false

// 불일치 연산자
// console.log(a !== b); // true

// 큼
// console.log(a > b); // false

// 크거가 같음
// console.log(a >= b); // false

// 작음
// console.log(a < b); // true

// 작거나 같음
// console.log(a <= b); // true

//-----------------------------------------------------------------------

/* 3. 논리 연산자(Logical) */

// const a = true;
// const b = false;
// const b = true;

// AND(그리고) 연산자
// if(a && b) {
//     console.log('모두가 참');
// }

// OR(또는) 연산자
// if (a || b) {
//     console.log('하나 이상이 참');
// }

// AND 연산자 - 가장 먼저 만나는 거짓 데이터를 반환
// console.log(true && false);
// console.log(1 && 0); 
// console.log(1 && 2 && 0); 
// console.log(1 && 0 && 1); 
// console.log(0 && 1 && 2);
// console.log('A' && 'B' && '');
// console.log('A' && 'B' && 'C'); // 모두가 참이면 가장 마지막 참 데이터를 반환

// console.log('-----------------------------------')

// OR 연산자 - 가장 먼저 만나는 참 데이터 반환
// console.log(false || true);
// console.log(0 || 1);
// console.log(false || 0 || {});
// console.log(false || [] || null);
// console.log(function () {} || undefined || '');
// console.log(false || 0 || NaN); // 모두가 거짓이면 가장 마지막 거짓 데이터를 반환

//-----------------------------------------------------------------------

/* 4. Nullish 병합, 삼항 연산자 */

// Nullish 병합(Nullish Coalescing)
// const n = 0;

// OR연산자를 사용한 경우
// const num1 = n || 7; 
// console.log(num1); // 7

// Nullish 병합 연산자를 사용한 경우 - null 또는 undefined 제외하고 가장 먼저 만나는 데이터 반환
// const num2 = n ?? 7;
// console.log(num2); // 0

// console.log(null ?? 1); // 1
// console.log(undefined ?? 2); // 2
// console.log(null ?? undefined); // undefined
// console.log(null ?? 1 ?? 2); // 1
// console.log(false ?? 1 ?? 2); // false
// console.log(0 ?? 1 ?? 2); // 0

// 삼항 연산자(Ternary)
// const a = 1;

// if (a < 2) {
//     console.log('참!');
// } else {
//     console.log('거짓..');
// }

// 삼항연산자
// 조건 ? 참 : 거짓
// console.log(a < 2 ? '참' : '거짓');

// function getAlert(message) {
//    // return message ? message : '메시지가 존재하지 않습니다.';
//     return message 
//         ? message 
//         : '메시지가 존재하지 않습니다.';
// }

// console.log(getAlert('안녕하세요'));
// console.log(getAlert(''));

//-----------------------------------------------------------------------

/* 5. 전개 연산자(Spread Operator) - ... */
// const a = [1, 2, 3];
// console.log(a); // [1, 2, 3]
// console.log(...a); // 1 2 3 - 배열 데이터를 펼쳐서 전개
// console.log(1, 2, 3);

// const b = [4, 5, 6];
// const c = a.concat(b); // concat - 배열 합치기
// console.log(c);

// const d = [a, b];
// const d = [...a, ...b];
// console.log(d); // [...[1, 2, 3], ...[4, 5, 6]] -> [1, 2, 3, 4, 5, 6]

// const a = {x:1, y:2};
// const b = {y:3, z:4};

// const c = Object.assign({}, a, b); // Object.assign() - 객체 합치기
// console.log(c); // {x:1, y:3, z:4}

// const d = {a, b};
// const d = {...a, ...b};
// console.log(d); // {a: ...{x:1, y:2}, b: ...{y:3, z:4}} -> {x:1, y:3, z:4}

// function fn (x, y, z) {
//     console.log(x, y, z);
// }

// fn(1, 2, 3);

// const a = [1, 2, 3];
// fn(a[0], a[1], a[2]);
// fn([1, 2, 3]);
// fn(a); // [1, 2, 3], undefined, undefined
// fn(...a); // 1 2 3 

//-----------------------------------------------------------------------

/* 6. 구조 분해 할당(Destructuring assigment) */

// 배열 구조 분해 할당 - 배열의 구조를 분해해서 각각 변수에 재 할당
// let a = 0;
// let b = 0;
// let c = 0;
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const [a, b, c] = arr; 
// [a, b, c] = arr; 
// [, , c] = arr; // 사용하지 않은 변수는 쉼표로 구분하고 비워둬야 함.

// console.log(a, b, c); 
// console.log(c); 

// const arr = [1, 2, 3];
// const [a, ...rest] = arr;

// console.log(a, rest); // 1, [2, 3]

// 객체 구조 분해 할당 - 배열 구조 분해 할당과 다르게 속성의 이름으로 데이터를 찾을 수 있음
// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     x: 7, 
//     y: 100
// }

// const a = obj.a;
// const b = obj.b;
// const c = obj.c;

// const {a, b} = obj;
// const {c} = obj;
// const {x = 4, a} = obj; // 값이 undefined일 경우 기본값 부여, 값이 있을 경우 속성의 데이터 출력
// const {x = 4, a: Roze, y: ten = 10} = obj; // 변수 이름을 변경 하고 싶으면  - :'변경하고자하는 변수명'
// const { c, ...rest } = obj; 

// console.log(a, b);
// console.log(c);
// console.log(x, Roze, ten);
// console.log(c, rest); // 3, {a:1, b:2, x:7, y:100}

//-----------------------------------------------------------------------

/* 7. 선택적 체이닝(Optional Chaining) */
// const user = {};
// const user = null;
// // const user = undefined;

// console.log(user?.name); // ? 앞쪽에 데이터가 점표기법을 사용할 수 없는 데이터인 경우에 에러발생 X - undefined 출력

// const userA = {
//     name: 'Roze',
//     age: 30, 
//     address: {
//         country: 'Korea',
//         city: 'Seoul'
//     }
// }

// const userB = {
//     name: 'Neo',
//     age: 85
// }

// function getCity(user) {
//     return user.address?.city || '주소 없음';
// }

// console.log(getCity(userA));
// console.log(getCity(userB));

//-----------------------------------------------------------------------

/* 8. if, switch 조건문 */

// If 조건문
// if(조건){
//     // 참일때 실행
// }

// if(조건){
//     // 참일때 실행
// }else{
//     // 거짓일때 실행
// }

// if(조건1){
//     // 참일때 실행
// }else if(조건2) {
//     // 조건1이 거짓이고 조건2가 참일때 실행
// } else if(조건3) {
//     // 조건1과 조건2가 거짓이고 조건3이 참일때 실행
// } else{
//     // 모든 조건이 거짓일때 실행
// }

// function isPositive(number) {
//     if (number > 0) {
//         return '양수';
//     } else if(number === 0){
//         return '0'
//     } else {
//         return '음수';
//     }
// }

// console.log(isPositive(1));
// console.log(isPositive(10));
// console.log(isPositive(-2));
// console.log(isPositive(0));

// console.log('');

// Switch 조건문
// switch(조건){
//     case 값1:
//         // 조건이 '값1'일 때 실행
//         break; // 실행 이후 switch문 종료. 없을 경우 default문 실행
//     case 값2:
//         // 조건이 '값2'일 때 실행
//         break;
//     default:
//         // 조건이 '값1'도 '값2'도 아닐때 실행
// }

// function price(fruit) {
//     let p;
//     switch(fruit){
//         case 'Apple':
//             p = 1000;
//             break;
//         case 'Banana': 
//             p = 1500;
//             break;
//         case 'Cherry':
//             p = 2000;
//             break;
//         default:
//             p = 0;
//     }
//     return p;
// }

// function price(fruit) {
//     switch(fruit){
//         case 'Apple':
//             return 1000; // return문을 사용할 경우 break문 없이도 함수 종료됨.
//         case 'Banana': 
//             return 1500;
//         case 'Cherry':
//             return 2000;
//         default:
//             return 0;
//     }
// }

// function price(fruit) {
//     if (fruit === 'Apple'){
//         return 1000;
//     } else if (fruit === 'Banana'){
//         return 1500;
//     } else if (fruit === 'Cherry'){
//         return 2000;
//     } else {
//         return 0;
//     }
// }

// console.log(price('Apple'));
// console.log(price('Banana'));
// console.log(price('Cherry'));
// console.log(price('Hello'));

//-----------------------------------------------------------------------

/* 9. for, for of, for in 반복문 */

// For 반복문
// for(초기화; 조건; 증감){
//     // 반복 실행할 코드
// }

// for (let i = 0; i < 10; i++){
//     console.log(i);
// }

// for(let i = 9; i > -1; i--){
//     // if(i < 4) {
//     //     break;
//     // }
//     if (i % 2 === 0){
//         continue; // 현재 반복 종료 후 다음 반복 진행
//     }
//     console.log(i);
// }

// For of 반복문 - 배열 데이터
// const fruits = ['Apple', 'Banana', 'Cherry'];

// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// for (const fruit of fruits) { // const 변수명 of 키워드 뒤에 반복하고자 하는 배열 데이터 작성
//     console.log(fruit);
// }

// const users = [
//     {
//         name: 'Roze',
//         age: 85
//     },
//     {
//         name: 'Neo',
//         age: 22
//     },
//     {
//         name: 'David',
//         age: 30
//     }
// ]

// for (let i = 0; i < users.length; i++){
//     console.log(users[i].name);
// }

// for(const user of users){
//     console.log(user.age);
// }

// // For in 반복문 - 객체 데이터

// const user = {
//     name: 'Roze',
//     age: 85,
//     isValid: true,
//     email: 'rexlam@naver.com'
// }

// for(const key in user){ // const 변수명 in 키워드 뒤에 반복하고자 하는 객체 데이터 작성
//     console.log(key);
//     console.log(user[key]);
// }

// console.log(user.name);
// console.log(user.age);
// console.log(user['name']);
// console.log(user['age']);

//-----------------------------------------------------------------------

/* 10. while, do while 반복문 */

// While 반복문
// while (조건) { // 조건이 true일 경우엔 무한 반복

// }

// let n = 0;
// while (n < 4) {
//     console.log(n);
//     n++;
// }

// Do While 반복문
let n = 0;
do {
    console.log(n); // do{}안에 있는 키워드 먼저 실행 후 while문 실행
    n++;
} while (n < 4)

//-----------------------------------------------------------------------
//--------------------------------------------

/** 심볼(Symbol) */

// - 변경이 불가한 데이터로, 유일한 식별자를 만들어 데이터를 보호하는 용도로 사용할 수 있다

// Symbol('설명')
// '설명'은 단순 디버깅을 위한 용도일 뿐, 심볼 값과는 관계가 없다
// const sKey = Symbol('Hello!');
// const user = {
//   key: '일반정보!',
//   [sKey]: '민감한 정보!'
// }

// console.log(user.key);
// console.log(user['key']);
// console.log(user[sKey]);
// console.log(user[Symbol('Hello!')]);
// console.log(sKey);
// console.log(typeof sKey);

// import roze from './roze.js'
// import {birthKey, emailsKey} from './key.js'

// console.log(roze);
// console.log(Object.keys(roze));
// for(const key in roze){
//   console.log(roze[key]);
// }

// console.log(roze[birthKey]);
// console.log(roze[emailsKey]);

/** BigInt */
// BigInt는 길이 제한이 없는 정수(integer)
// 숫자(Number) 데이터가 안정적으로 표시할 수 있는, 최대치(`2^53 - 1`)보다 큰 정수를 표현할 수 있다
// 정수 뒤에 `n`을 붙이거나 `BingInt()`를 호출해 생성한다

// console.log(1234567890123456789012345678901234567890);

// console.log(1234567890123456789012345678901234567890n);
// console.log(BigInt('1234567890123456789012345678901234567890'));

// const a = 11n;
// const b = 22

// // 숫자 => BigInt
// console.log(a + BigInt(b));
// console.log(typeof (a + BigInt(b)));

// // BigInt => 숫자
// console.log(Number(a) + b);
// console.log(typeof (Number(a) + b));

//--------------------------------------------

/** 불변성 & 가변성 */
// 불변성(Immutability)은 생성된 데이터가 메모리에서 변경되지 않고,
// 가변성(Mutability)은 생성된 데이터가 메모리에서 변경될 수 있음을 의미함.

// 자바스크립트 원시형은 불변성을, 참조형은 가변성을 가지고 있다

// let a = 1;
// let a = {x: 1};
// let b = a;

// b = 2;
// b.x = 2;
// console.log(b);
// console.log(a);

// a.x = 7;
// console.log(b);
// console.log(a);

// b.x = 1;
// console.log(b);
// console.log(a);

// console.log(a === b); // === : 일치 연산자는 양쪽 피 연산자의 메모리 주소가 같은지 비교함.

// let a = {x: 1};
// let b = {x: 1};

// console.log(a === b);

// b.x = 2;
// console.log(b);
// console.log(a);

// let a = [1, 2, 3];
// let b = a;

// b[0] = 4;
// console.log(b); // [4, 2, 3]
// console.log(a); // [4, 2, 3]

//--------------------------------------------

/** 얕은복사 & 깊은복사 */

// 참조형은 가변성으로 인해, 데이터를 복사할 때 주의가 필요함.

// 얕은 복사(Shallow Copy) - 참조형의 1차원 데이터만 복사
// 깊은 복사(Deep Copy) - 참조형의 모든 차원 데이터를 복사

// let a = 1;
// let b = a;

// b = 2;

// console.log(b);
// console.log(a);

// b = 3;

// console.log(b);
// console.log(a);

// const a = {x: 1};
// const b = a;

// 얕은 복사
// const b = Object.assign({}, a); 
// const b = {...a};

// 깊은 복사
// import cloneDeep from 'lodash/cloneDeep'
// const a = {x: {y: 1}};
// const b = cloneDeep(a);

// // b.x = 2;
// b.x.y = 2;

// console.log(b); // {x: 2}
// console.log(a); // {x: 2}


// const a = [1, 2, 3];
// const b = a;

// 얕은 복사
// const b = a.concat([]);
// const b = [...a];

// 깊은 복사
// import cloneDeep from 'lodash/cloneDeep.js';
// const a = [[1, 2], [3]];
// const b = cloneDeep(a);

// b[0][0] = 4;

// console.log(b); 
// console.log(a); 

//--------------------------------------------

/** 가비지 컬렉션(GC, Garbage Collection, 쓰레기 수집) */

// 자바스크립트의 메모리 관리 방법으로 자바스크립트 엔진이 자동으로 
// 데이터가 할당된 메모리에서 더 이상 사용하지 않는 데이터를 해제하는 것
// 가바지 컬렉션은 개발자가 직접 강제 실행하거나 관리할 수 없다

// let a = {x: 1};
// let b = a;

// b.x = 2;
// console.log(b);
// console.log(a);

// const user = {
//   name: 'roze',
//   age: 31,
//   emails: ['rexlam@naver.com', 'wonder0128@eltov.com']
// }

// delete user.emails;
// console.log(user);

//--------------------------------------------

/** 클로저(Closure) */
// 함수가 선언될 때의 유효범위(렉시컬 범위)를 기억하고 있다가
// 함수가 외부에서 호출될 때 그 유효범위의 특정 변수를 참조할 수 있는 개념

// function createCount() {
//   let a = 0;
//   return function() {
//     return a+=1;
//   }
// }

// const count = createCount(); //  클로저

// console.log(count()); // 1
// console.log(count()); // 2
// console.log(count()); // 3

// const count2 = createCount();
// console.log(count2());
// console.log(count2());

// const h1El = document.querySelector('h1');
// const h2El = document.querySelector('h2');

// 별도의 상태 관리 필요
// let h1IsRed = false;
// let h2IsRed = false;

// h1El.addEventListener('click', e => {
//   h1IsRed = !h1IsRed;
//   h1El.style.color = h1IsRed ? 'red' : 'black';
// })

// h2El.addEventListener('click', e => {
//   h2IsRed = !h2IsRed;
//   h2El.style.color = h2IsRed ? 'red' : 'black';
// })

// 하나의 함수로 정리
// const createToggleHandler = () => {
//   let isRed = false;
//   return e => {
//     isRed = !isRed;
//     e.target.style.color = isRed ? 'red' : 'black';
//   }
// }
// h1El.addEventListener('click', createToggleHandler());
// h2El.addEventListener('click', createToggleHandler());

//--------------------------------------------

/** 메모리 누수(Memory Leak) */

// 더 이상 필요하지 않은 데이터가 해제되지 못하고 메모리를 차지되는 현상

// - 불필요한 전역 변수 사용
// window.hello = 'Hello world!';
// window.roze = {name: 'Roze', age: 31};

// - 분리된 노드 참조
// const btn = document.querySelector('button');
// // const parent = document.querySelector('.parent');

// btn.addEventListener('click', () => {
//   const parent = document.querySelector('.parent'); // 수정
//   console.log(parent);
//   parent && parent.remove(); // 수정
// })

// - 해제하지 않은 타이머
// let a = 0;
// const intervalId = setInterval(() => {
//   a += 1;
// }, 100)

// setTimeout(() => {
//   console.log(a);
//   clearInterval(intervalId);
// }, 1000)

// - 잘못된 클로저 사용
// const getFn = () => {
//   let a = 0;
//   return name => {
//     // a += 1;
//     // console.log(a);
//     return `Hello ${name}~`;
//   }
// }

// const fn = getFn();
// console.log(fn('Roze'));
// console.log(fn('Neo'));
// console.log(fn('Lee'));

//--------------------------------------------

/** 콜 스택, 테스크 큐, 이벤트 루프 */

// setTimeout(() => {
//   console.log(1);
// }, 0);

// console.log(2);

// function a() {
//   console.log('A');
//   function b() {
//     // console.log('B');
//     setTimeout(() => {
//       console.log('B1');
//       console.log('B2');
//     })
//   }
//   b();
// }

// function c() {
//   console.log('C');
// }

// function first() {
//   a();
//   c();
// }
// function second() {
//   c();
// }

// first();
// second();






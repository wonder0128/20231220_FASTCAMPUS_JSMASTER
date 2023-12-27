//--------------------------------------------------------------------------

/** 1. 문자 */

// .length
// 문자의 길이(숫자)를 반환한다.
// const str = 'Hello World!'
// //           012345678901
// console.log(str.length);

// .includes()
// 대상 문자에 주어진 문자가 포함되어 있는지(불린) 확인한다.
// const str = 'Hello World!';
// console.log(str.includes('Hello', 1));

// .indexOf() 
// 대상 문자에서 주어진 문자와 일치하는 첫 번째 인덱스(숫자)를 반환한다.
// 일치하는 문자가 없을 경우 '-1'을 반환.
// const str = 'Hello World!';
// //           012345678901
// console.log(str.indexOf('!'));
// console.log(str.indexOf('ROZE'));

// // if(str.indexOf('ROZE') === -1){
// if(!str.includes('ROZE')){
//     console.log('ROZE가 없습니다');
// }

// .padEnd()
// 대상 문자의 길이(length)가 지정된 길이보다 작으면,
// 주어진 문자를 지정된 길이까지 끝에 붙여 새로운 문자를 반환한다.
// const str = '1234567'
// // const str = '1234567890123'
// console.log(str.padEnd(10, '0')); // 1234567000
// console.log(str);

// .padStart()
// 대상 문자의 길이(length)가 지정된 길이보다 작으면,
// 주어진 문자를 지정된 길이까지 앞에 붙여 새로운 문자를 반환한다.
// const str = '1234567';
// // const str = '1234567890123'
// console.log(str.padStart(10, '0')); // 0001234567
// console.log(str);

// .replace()
// 대상 문자에서 패턴(문자, 정규식)과 일치하는 부분을 교체한 새로운 문자를 반환한다.
// const str = 'Hello, Hello?!';
// console.log(str.replace('Hello', 'Hi'));
// console.log(str.replace(/Hello/g, 'Hi'));
// console.log(str);

// .slice()
// 대상 문자의 일부를 추출해 새로운 문자를 반환한다.
// 두 번째 인수 직전까지 추출하고, 두 분째 인수를 생략하면 대상 문자의 끝까지 추출한다.
// const str = 'Hello World!';
// //           012345678901
// //          -210987654321
// console.log(str.slice(0,5));
// console.log(str.slice(6,-1));
// console.log(str.slice(6));
// console.log(str);

// .split()
// 대산 문자를 주어진 구분자로 나눠 배열로 반환한다.
// const str = 'Apple / Banana / Cherry';
// // console.log(str.split(', '));
// console.log(str.split(' / '));

// .toLowerCase()
// 대상 문자를 영어 소문자로 변환해 새로운 문자로 반환한다.
// const str = 'Apple, Banana, Cherry';
// console.log(str.toLowerCase());
// console.log(str);

// .toUpperCase()
// 대상 문자를 영어 대문자로 변환해 새로운 문자로 반환한다.
// const str = 'Apple, Banana, Cherry';
// console.log(str.toUpperCase());
// console.log(str);

// .trim()
// 대상 문자의 앞뒤 공백 문자(space, tab 등)를 제거한 새로운 문자를 반환한다.
// const str = '    RO  ZE    ';
// console.log(str.trim()); // ROZE
// console.log(str);// '    ROZE    '

//--------------------------------------------------------------------------

/** 2. 숫자 */

// .toFixed()
// 숫자를 지정된 고정 소수점 표기(자릿수)까지 표현하는 문자로 반환한다.
// const num = 3.1415926535;
// console.log(typeof num.toFixed(2)); // string - 3.14
// console.log(typeof parseFloat(num.toFixed(2))); // number - 3.14

// .toLocaleString()
// 숫자를 현지 언어 형식의 문자로 반환한다.
// const num = 1000000;
// console.log(num.toLocaleString());
// console.log(`${num.toLocaleString()}원`);

// Number.isInteger() - 정적 메소드
// 숫자가 정수(Integer)인지 확인하고 불린데이터로 반환한다.
// const num = 123;
// const pi = 3.14;
// console.log(Number.isInteger(num)); // true
// console.log(Number.isInteger(pi)); // false

// Number.isNaN()
// 주어진 값이 'NaN'인지 확인하고 불린 데이터로 반환한다.
// const num1 = NaN;
// const num2 = 123;
// const str = 'Hello world!';
// const nul = null;

// console.log(Number.isNaN(num1)); //true
// console.log(Number.isNaN(num2)); // false
// console.log(Number.isNaN(str)); // false
// console.log(Number.isNaN(nul)); // false

// Number.parseInt() 또는 parseInt()
// 주어진 값(숫자, 문자)을 파싱해 특정 진수(radix)의 정수로 반환한다.
// const str = '3.1415926535';
// const num = 3.1415926535;
// console.log(parseInt(str, 10));
// console.log(Number.parseInt(num, 10));

// Number.parseFloat() 또는 parseFloat()
// 주어진 값(숫자, 문자)을 파싱해 부동소수점 실수로 반환(숫자)한다.
// const str = '3.1415926535';
// const num = 3.1415926535;
// console.log(Number.parseFloat(str));
// console.log(parseFloat(num));

//--------------------------------------------------------------------------

/** 3. 수학 */

// Math.abs()
// 주어진 숫자의 절댓값을 반환한다.
// console.log(Math.abs(2));
// console.log(Math.abs(-2));

// Math.ceil()
// 주어진 숫자를 올림해 정수를 반환한다.
// console.log(Math.ceil(3.1415926535));

// Math.floor()
// 주어진 숫자를 내림해 정수를 반환한다.
// console.log(Math.floor(3.1415926535));

// Math.max()
// 주어진 숫자 중에서 가장 큰 숫자를 반환한다.
// console.log(Math.max(1, 22, 38, 1000, 192));

// Math.min()
// 주어진 숫자 중에서 가장 작은 숫자를 반환한다.
// console.log(Math.min(1, 22, -1000, 38, 192));

// Math.pow()
// 주어진 숫자의 거듭제곱한 값을 반환한다.
// console.log(Math.pow(4, 2));
// console.log(Math.pow(7, 2));
// console.log(Math.pow(10, 3));

// Math.random()
// 숫자 0 이상, 1 미만의 난수를 반환한다
// console.log(Math.random());
// // 특정 범위의 랜덤 정수를 얻는 함수
// function random(min = 0, max = 10){
//     return Math.floor(Math.random() * (max - min)) + min;
// }
// console.log(random());
// console.log(random(11, 20));
// console.log(random(101, 999));

// Math.round()
// 주어진 숫자를 반올림해 정수를 반환한다.
// const num1 = 3.141;
// const num2 = 3.768;
// console.log(Math.round(num1));
// console.log(Math.round(num2));

//--------------------------------------------------------------------------

/** 5. 날짜 */
// const date = new Date();
// console.log(date);
// // 타임스탬프 - Tue Dec 26 2023 14:21:12 GMT+0900 (한국 표준시)

// const d1 = new Date(2022, 11, 16, 12, 57, 30);
// console.log(d1);

// const d2 = new Date('Fri Dec 16 2022 12:57:30 GMT+0900 (한국 표준시)');
// console.log(d2);
// console.log(d2.getFullYear());

// .getFullYear()와 .setFullYear()
// 날짜 인스턴스의 '연도'를 반환하거나 지정한다.
// const date = new Date();
// console.log(date.getFullYear());

// date.setFullYear(2024);
// console.log(date.getFullYear());
// console.log(date);

// .getMonth()와 .setMonth()
// 날짜 인스턴스의 '월'을 반환하거나 지정한다.
// 0부터 시작(Zero-based numbering)한다.
// const date = new Date();
// console.log(date.getMonth());
// console.log(date);

// date.setMonth(0); // 1월
// console.log(date.getMonth());
// console.log(date);

// .getDate()와 .setDate()
// 날짜 인스턴스의 '일'을 반환하거나 지정한다.
// const date = new Date();
// console.log(date.getDate());
// console.log(date); 

// date.setDate(11);
// console.log(date.getDate());
// console.log(date);

// .getHours()와 .setHours
// 날짜 인스턴스의 '시간'을 반환하거나 지정한다.
// const date = new Date();
// console.log(date.getHours());
// console.log(date);

// date.setHours(7);
// console.log(date.getHours());
// console.log(date);

// .getMinutes()와 .setMinutes()
// 날짜 인스턴스의 '분'을 반환하거나 지정한다.
// const date = new Date();
// console.log(date.getMinutes());
// console.log(date);

// date.setMinutes(2);
// console.log(date.getMinutes());
// console.log(date);

// .getSeconds()와 .setSeconds()
// 날짜 인스턴스의 '초'를 반환하거나 지정한다.
// const date = new Date();
// console.log(date.getSeconds());
// console.log(date);

// date.setSeconds(57);
// console.log(date.getSeconds());
// console.log(date);

// .getDay()
// 날짜 인스턴스의 '요일'을 반환한다.
// const date = new Date();
// const day = date.getDay();
// console.log(day);
// console.log(getDayKo(day));

// function getDayKo(day){
//     switch (day) {
//         case 0: return '일요일';
//         case 1: return '월요일';
//         case 2: return '화요일';
//         case 3: return '수요일';
//         case 4: return '목요일';
//         case 5: return '금요일';
//         case 6: return '토요일';
//     }
// }

// .getTime()와 .setTime()
// `1970-01-01 00:00:00`(유닉스타임)부터 경과한,
// 날짜 인스턴스의 '밀리초(ms)'로 반환하거나 지정한다.
// const date = new Date();
// console.log(date.getTime());
// console.log(date);

// date.setTime(1700000000000);
// console.log(date.getTime());
// console.log(date);

// Date.prototype.isAfter = function (date){
//     const a = this.getTime();
//     const b = date.getTime();
//     console.log(a);
//     console.log(b);
//     return a > b;
// }

// const d1 = new Date('Sat Jan 01 2022 00:00:00 GMT+0900 (한국 표준시)');
// const d2 = new Date('Sun Jan 01 2023 00:00:00 GMT+0900 (한국 표준시)');

// console.log(d1.isAfter(d2)); // false
// console.log(d2.isAfter(d1)); // true

// Date.now()
// `1970-01-01 00:00:00`(유닉스 타임)부터 경과한,
// 메소드가 호출될 때의 '밀리초(ms)'로 반환한다.
// const time = new Date().getTime();
// console.log(Date.now());
// console.log(time);

// setTimeout(() => {
//     console.log(Date.now());
//     console.log(time);
// }, 1000);

//--------------------------------------------------------------------------

/** 6. 배열 */

// .length
// 배열의 길이(숫자)를 반환한다.
// const arr = ['A', 'B', 'C'];
// console.log(arr.length);

// .at()
// 대상 배열을 인덱싱한다
// 음수 값을 사용하면 뒤에서부터 인덱싱 한다.
// const arr = ['A', 'B', 'C', 'D'];
// console.log(arr[0]);
// console.log(arr.at(0));

// console.log(arr[arr.length - 1]);
// console.log(arr.at(-1));
// console.log(arr.at(-2));

// .concat()
// 대상 배열과 주어진 배열을 병합해 새로운 배열을 반환한다.
// const arr1 = ['A', 'B', 'C'];
// const arr2 = ['D', 'E', 'F'];
// // const arr3 = arr1.concat(arr2);
// const arr3 = [...arr1, ...arr2];

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// .every()
// 대상 배열의 모든 요소가 콜백 테스트에서 참(Truthy)을 반환하는지 확인한다.
// const arr = [1, 2, 3, 4];
// const isValid = arr.every(item => item < 5);
// const isValid1 = arr.every(item => item < 4); // 하나라도 false값이 있으면 false를 반환함.
// console.log(isValid); // true
// console.log(isValid1); // false

// .filter()
// 주어진 콜백 테스트를 통과(참(Truthy)을 반환)하는 모든 요소를 새로운 배열로 반환한다.
// 모든 요소가 테스트를 통과하지 못하면 빈 배열을 반환한다.
// const numbers = [1, 20, 7, 9, 104, 0, 58];
// const filteredNumbers = numbers.filter(number => number < 30);
// const filteredNumbers1 = numbers.filter(number => number < 0);
// console.log(filteredNumbers); // [1, 20, 7, 9, 0]
// console.log(filteredNumbers1); // []

// const users = [
//     {name: 'Neo', age: 85},
//     {name: 'Amy', age: 22},
//     {name: 'Lewis', age:11}
// ]
// // const adults = users.filter(user => {
// //     return user.age >= 19;
// // });
// const adults = users.filter(user => user.age >= 19);
// console.log(adults);

// .find()
// 대상 배열에서 콜백 테스트를 통과하는 첫 번째 요소를 반환한다.
// const arr = [5, 8, 130, 12, 44];
// const foundItem = arr.find(item => item > 10);
// console.log(foundItem);

// const users = [
//     {name: 'Neo', age: 85},
//     {name: 'Amy', age: 22},
//     {name: 'Lewis', age: 11}
// ]
// const foundUser = users.find(user => user.name === 'Amy');
// console.log(foundUser);

// .findIndex()
// 대상 배열에서 콜백 테스트를 통과하는 첫 번째 요소의 인덱스를 반환한다.
// const arr = [5, 8, 130, 12, 44];
// //           0  1   2    3  4
// const index = arr.findIndex(item => item >10);
// console.log(index); // 2

// .flat()
// 대상 배열의 모든 하위 배열을 지정한 깊이(Depth)까지 이어붙인 새로운 배열을 생성한다.
// 깊이의 기본값은 '1'
// const arr = [1, 2, [3, 4, [5, 6, [7, 8]]]];
// console.log(arr.flat()); // [1, 2, 3, 4, [5, 6, [7, 8]]]
// console.log(arr.flat(2)); // [1, 2, 3, 4, 5, 6, [7, 8]]
// console.log(arr.flat(3)); // [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(arr.flat(Infinity)); // [1, 2, 3, 4, 5, 6, 7, 8]

// .forEach()
// 대상 배열의 길이만큼 주어진 콜백을 실행한다.
// const arr = ['A', 'B', 'C'];
// arr.forEach(item => console.log(item));

// for(let i = 0; i < arr.length; i++){
//     if(i > 1){
//         break;
//     }
//     console.log(arr[i]);
// }

// .includes()
// 대상 배열이 특정 요소를 포함하고 있는지 확인한다.
// const arr = [1, 2, 3];
// console.log(arr.includes(2)); // true
// console.log(arr.includes(9)); // false

// const fruits = ['Apple', 'Banana', 'Cherry'];
// console.log(fruits.includes('Apple')); // ture
// console.log(fruits.includes('cherry')); // false

// const users = [
//     {name: 'Neo', age: 85},
//     {name: 'Amy', age: 22},
//     {name: 'Lewis', age: 11}
// ]
// // 참조형 - 객체, 배열, 함수 -> 데이터의 생김새는 동일해도 다른 데이터일 수도 있음.
// console.log(users.includes({name:'Neo', age: 85})); // false

// const neo = users[0];
// console.log(users.includes(neo)); // true

// .join()
// 대상 배열의 모든 요소를 구분자로 연결한 문자를 반환한다.
// const arr = ['Apple', 'Banana', 'Cherry'];
// console.log(arr.join());
// console.log(arr.join(', '));
// console.log(arr.join(' / '));

// .map()
// 대상 배열의 길이만큼 주어진 콜백을 실행하고, 콜백의 반환 값을 모아 새로운 배열을 반환한다.
// const numbers = [1, 2, 3, 4];
// const newNumbers = numbers.map(item => item * 2);
// console.log(newNumbers); // [2, 4, 6, 8]
// console.log(numbers);

// const users = [
//     {name: 'Neo', age: 85},
//     {name: 'Amy', age: 22},
//     {name: 'Lewis', age: 11}
// ]
// const newUsers = users.map(user => ({
//     ...user,
//     isValid: true,
//     email: null
// }));
// console.log(newUsers);

// .pop()
// 대상 배열에서 마지막 요소를 제거하고 그 요소를 반환한다.
// 대상 배열 원본이 변경 된다.
// const fruits = ['Apple', 'Banana', 'Cherry'];
// console.log(fruits.pop()); // Cherry
// console.log(fruits); // ['Apple', 'Banana']

// .push()
// 대상 배열의 마지막에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환한다.
// 대상 배열 원본이 변경된다.
// const fruits = ['Apple', 'Banana', 'Cherry'];
// const newLength = fruits.push('Orange');
// console.log(newLength);
// console.log(fruits);

// fruits.push('Mango', 'Strawberry');
// console.log(fruits);


// .reduce()
// 대상 배열의 길이만큼 주어진 콜백을 실행하고, 마지막에 호출되는 콜백의 반환 값을 반환한다.
// 각 콜백의 반환 값은 다음 콜백으로 전달된다.
// const numbers = [1, 2, 3, 4, 5, 6];
// const sum = numbers.reduce((acc, cur) => acc + cur, 0); // reduce에서 2번째 인수는 첫번째 인수의 초기값
// console.log(sum);

// const users = [
//     {name: 'Neo', age: 85},
//     {name: 'Amy', age: 22},
//     {name: 'Lewis', age: 11}
// ]

// // 총 나이 계산
// const totalAge = users.reduce((acc, cur) => acc + cur.age, 0);
// console.log(totalAge);
// console.log(`평균나이 : ${(totalAge / users.length).toFixed(1)}세`);

// // 모든 이름 추출
// const namesArray = users
//     .reduce((acc, cur) => {
//         acc.push(cur.name);
//         return acc;
//     }, []).join(', ');
// // const names = namesArray.join(', ');
// // console.log(names);
// console.log(namesArray);

// .reverse()
// 대상 배열의 순서를 반환한다
// 대상 배열 원본이 변경된다
// const arr = ['A', 'B', 'C'];
// const reversed = arr.reverse();

// console.log(reversed);
// console.log(arr);

// .shift()
// 대상 배열에서 첫번째 요소를 제거하고, 제거한 요소를 반환한다
// 대상 배열 원본이 변경된다.
// const arr = ['A', 'B', 'C'];
// console.log(arr.shift());
// console.log(arr);

// .slice()
// 대상 배열의 일부를 추출해 새로운 배열을 반환한다
// 두 번째 인수 직전까지 추출하고, 두번찌 인수를 생략하면 대상 배열의 끝까지를 추출한다
// const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

// console.log(arr.slice(0,3));
// console.log(arr.slice(4, -1));
// console.log(arr.slice(4));
// console.log(arr);

// . some()
// 대상 배열의 어떤 요소라도 콜백 테스트를 통과하는지 확인한다
// const arr = [1, 2, 3, 4];
// const isValid = arr.some(item => item > 3);
// console.log(isValid);

// .sort()
// 대상 배열을 콜백의 반환 값(음수, 양수, 0)에 따라 정렬한다
// 콜백을 제공하지 않으면, 요소를 문자열로 반환하고 유니코드 코드 포인트 순서로 정렬한다
// 대상 배열 원본이 변경된다
// const numbers = [4, 17, 2, 103, 3, 1, 0];

// numbers.sort();
// console.log(numbers);

// numbers.sort((a, b) => a - b); // 작은 숫자 -> 큰 숫자
// console.log(numbers);

// numbers.sort((a, b) => b -a); // 큰 숫자 -> 작은 숫자
// console.log(numbers);

// const users = [
//     {name: 'Neo', age: 85},
//     {name: 'Amy', age: 22},
//     {name: 'Lewis', age: 11}
// ];
// users.sort((a, b) => a.age - b.age);
// console.log(users);

// // users.sort((a, b) => b.age - a.age);
// // console.log(users);

// .splice()
// 대상 배열에 요소를 추가하거나 삭제하거나 교체한다
// 대상 배열 원본이 변경된다
// const arr = ['A', 'B', 'C'];
// // arr.splice(2, 0, 'x'); // 인덱스 번호, 삭제하려는 아이템 갯수, 추가/변경/삭제
// // arr.splice(1, 2, 'x', 'y'); 
// arr.splice(1, 1, 'x'); 
// console.log(arr);

// .unshift()
// 새로운 요소를 대상 배열의 맨 앞에 추가하고 새로운 배열의 길이를 반환한다
// 대상 배열 원본이 변경된다
// const arr = ['A', 'B', 'C'];
// console.log(arr.unshift('x'));
// console.log(arr);

// Array.from()
// 유사 배열(Array-like)을 실제 배열로 반환한다
// const arrayLike = {
//     0: 'A', 
//     1: 'B', 
//     2: 'C',
//     length: 3
// }
// console.log(arrayLike.constructro === Array);
// console.log(arrayLike.constructor === Object);

// // arrayLike.forEach(item => console.log(item));
// Array.from(arrayLike).forEach(item => console.log(item));

// Array.isArray()
// 배열 데이터인지 확인한다
// const arr = ['A', 'B', 'C'];
// const arrayLike = {
//     0: 'A',
//     1: 'B', 
//     2: 'C',
//     length: 3
// }
// console.log(Array.isArray(arr)); // true
// console.log(Array.isArray(arrayLike)); // false

//--------------------------------------------------------------------------

/** 7. 객체 */

// Object.assign()
// 하나 이상의 출처(Source) 객체로부터 대상(Target) 객체로 복사하고 대상 객체를 반환한다
// const target = {a: 1, b: 2};
// const source1 = {b: 3, c: 4};
// const source2 = {c: 5, d: 6};
// // const result = Object.assign({}, target, source1, source2); // 대상객체, 출처객체(1개 이상)
// const result = {
//     ...target,
//     ...source1,
//     ...source2
// }

// console.log(target);
// console.log(result);

// Object.entries()
// 주어진 객체의 각 속성과 값으로 하나의 배열 만들어 요소로 추가한 2차원 배열을 반환한다
// const user = {
//     name: 'Roze',
//     age: 85,
//     isValid: true,
//     email: 'rexlam@naver.com'
// }
// console.log(Object.entries(user));
// for(const [key,value] of Object.entries(user)){
//     console.log(key, value);
// }

// Object.keys()
// 주어진 객체의 속성 이름을 나열한 배열을 반환한다
// const user = {
//     name: 'Roze',
//     age: 85,
//     isValid: true,
//     email: 'rexlam@naver.com'
// }
// console.log(Object.keys(user));

// Objcet.values()
// 주어진 객체의 속성 값을 나열한 배열을 반환한다
// const user = {
//     name: 'Roze',
//     age: 85,
//     isValid: true,
//     email: 'rexlam@naver.com'
// }
// console.log(Object.values(user));

//--------------------------------------------------------------------------

/** 8. JSON(JavaScript Object Notation) */

// 데이터 전달을 위한 표준 포맷
// 문자, 숫자, 불린, Null, 객체, 배열만 사용
// 문자는 큰 따옴표만 사용
// 후행 쉼표 사용 불가
// .json 확장자 사용

// JSON.stringify() - 데이터를 JSON 문자로 변환한다
// JSON.parse() - JSON문자를 분석해 데이터로 변환한다.

// console.log(JSON.stringify('Hello world!')); // '"Hello world!"'
// console.log(JSON.stringify(123));
// console.log(JSON.stringify(false));
// console.log(JSON.stringify(null));
// console.log(JSON.stringify({name: 'ROZE', age: 85}));
// console.log(JSON.stringify([1, 2, 3]));

// console.log("//--------------------------------------//");

// console.log(JSON.parse('"Hello World!"'));
// console.log(JSON.parse('123'));
// console.log(JSON.parse('false'));
// console.log(JSON.parse('null'));
// console.log(JSON.parse('{"name":"ROZE","age":85}'));
// console.log(JSON.parse('[1, 2, 3]'));

import abc from'./test.json'
console.log(abc);




//--------------------------------------------------------------------------
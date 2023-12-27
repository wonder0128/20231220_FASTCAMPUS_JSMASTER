// 모듈(Module)이란 특정 데이터들의 집합(파일)이다.
// 모듈 가져오기(Import), 내보내기(Export)

// import {hello} from './module.js';
// console.log(hello);

// import number from './module.js'
// console.log(number);

// import {str} from './module.js'
// console.log(str);

// import abc, {str, arr, hello, hi} from './module.js'
// // console.log(number);
// console.log(str);
// console.log(arr);
// console.log(hello);
// console.log(hi);
// console.log(abc);

// 다른 이름으로 가져오고 싶으면 가져오는 함수 뒤에 as 키워드 작성 후 원하는 이름으로 변경
// import {str as xyz, arr, hello as h} from './module.js'
// // console.log(str);
// console.log(xyz);
// console.log(arr);
// // console.log(hello);
// console.log(h);

// 지정된 js의 모든 데이터를 하나의 변수에 할당해서 가져오기
// import * as abc from './module.js'
// console.log(abc);

// import선언은 js파일 최상단에 작성해야 함.
// setTimeout(async() =>{
//     // import('./module.js').then(abc => {
//     //     console.log(abc);
//     // });
//     const abc = await import('./module.js');
//     console.log(abc);
// }, 1000)

// import {a} from './a.js'
// import {b} from './b.js'

import {a, b} from './utils.js'

console.log(a());
console.log(b());
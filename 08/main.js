// 동기(Synchronous)와 비동기(Asynchronous)
//  - 동기 : 순차적으로 코드 실행 O
//  - 비동기 : 순차적으로 코드 실행 X
// console.log(1);
// setTimeout(() => {console.log(2);}, 1000); // 비동기 패턴
// console.log(3);

// const btnEl = document.querySelector('h1');
// btnEl.addEventListener('click', () => {
//     console.log('Clicked!!');
// });

// console.log('Hello World!!');

// fetch('') // 서버로 요청(request)
//     .then(res => res.json()) // 서버로부터 응답(response)
//     .then(res => {
//         console.log(res);
//         console.log(1);
//         console.log(2);
//         console.log(3);
//     });

//--------------------------------------------------------------------------------

/** 콜백(Callback) 패턴 */
// const a = (callback) => {
//     setTimeout(() =>{
//         console.log(1);
//         callback();
//     }, 1000);
// }
// const b = (callback) => {
//     setTimeout(() => {
//         console.log(2);
//         callback();
//     }, 1000);
// }

// const c = (callback) => {
//     setTimeout(() => {
//         console.log(3);
//         callback();
//     }, 1000);
// }

// const d = (callback) => {
//     setTimeout(() => {
//         console.log(4);
//     }, 1000);
// }

// 콜백 지옥
// a(() => {
//     b(() =>{
//         c(() =>{
//             d();
//         });
//     });
// });

// 콜백 패턴의 단점 : 응답의 순서 보장하지 않음.
// const getMovies = (movieName, callback) => {
//     fetch(``)
//         .then(res => res.json())
//         .then(res => {
//             console.log(res);
//             callback();
//         })
// }

// getMovies('frozen', () => {
//     console.log('겨울왕국');
//     getMovies('Avangers', () => {
//         console.log('어벤져스');
//         getMovies('Avata', () => {
//             console.log('아바타');
//         })
//     })
// })

//--------------------------------------------------------------------------------

/** Promise */
// const a = callback => {
//     setTimeout(() => {
//         console.log(1);
//         callback();
//     }, 1000);
// };

// const b = () => console.log(2);
// a(() => {
//     b();
// });

// const a = () => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log(1);
//             resolve();
//         }, 1000);
//     });
    
// };

// const b = () => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log(2);
//             resolve()
//         }, 1000);
//     });
// };

// const c = () => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log(3);
//             resolve();
//         }, 1000);
//     });
// };

// const d = () => console.log(4);

// a().then(() => {
//     b().then(() => {
//         c().then(() => {
//             d();
//         });
//     });
// });

// a()
//     .then(() => b())
//     .then(() =>c())
//     .then(() => {
//         d();
//     });

// a()
//     .then(b)
//     .then(c)
//     .then(d)
//     .then(() => console.log('done'));

//--------------------------------------------------------------------------------

/** Async / Await */
// const a = () => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log(1);
//             resolve();
//         }, 1000);
//     });
// };

// const b = () => console.log(2);
// // a().then(() => b());

// // await 키워드를 사용하려면 async로 감싸져 있는 함수 안에 반드시 존재 해야함.
// const wrap = async () => {
//     await a();
//     b();
// };
// wrap();

//--------------------------------------------------------------------------------

/** Resolve, Reject 그리고 에러 핸들링 */
// const delayAdd = index => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(index > 10){
//                 reject(`${index}는 10보다 클 수 없습니다.`);
//                 return;
//             }
//             console.log(index);
//             resolve(index + 1);
//         }, 1000);
//     });
// };
// delayAdd(3)
//     .then(res => console.log(res))
//     .catch(err => console.error(err))
//     .finally(() => console.log('done!!')); // 항상 실행되는 구조

// const wrap = async() => {
//     // const res = await delayAdd(2);
//     // console.log(res);
//     try{
//         const res = await delayAdd(2);
//         console.log(res);
//     } catch(err) {
//         console.error(err);
//     } finally{ // 항상 실행되는 구조
//         console.log('done!!!');
//     }
// }
// wrap();

//--------------------------------------------------------------------------------

/** 반복문에서 비동기 처리 */
// const getMovies = movieName => {
//     return new Promise(resolve => [
//         fetch('')
//             .then(res => res.json())
//             .then(res => resolve(res))
//     ]);
// };

// const titles = ['frozen', 'avengers', 'avatar'];

// // titles.forEach(async title =>{
// //     const movies = await getMovies(title);
// //     console.log(title, movies);
// // });

// const wrap = async () => {
//     for(const title of titles){
//         const movies = await getMovies(title);
//         console.log(title, movies);
//     };
// };
// wrap();

//--------------------------------------------------------------------------------

/** fetch(주소, 옵션) */
// 네트워크를 통해 리소스의 요청(Request) 및 응답(Response)을 처리할 수 있다.
// Promise 인스턴스를 반환한다.
fetch('', {
    method: 'GET', // GET이 기본값, POST/ PUT/ DELETE
    headers: { // 서버에 전송 요청에 대한 정보를 담음
        'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({ // 요청에 대한 데이터를 담아서 전송

        name: 'Roze',
        age: 85,
        email: 'rexlam@naver.com'
    })
});

//--------------------------------------------------------------------------------

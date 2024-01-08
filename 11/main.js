//---------------------------------------------------------------

/** 1. console */
// .log(), .warn(), .error(), .dir()
// - 콘솔에 메시지나 객체를 출력한다.
// -- log : 일반 메시지
// -- warn : 경고 메시지
// -- error : 에러 메시지
// -- dir : 속성을 볼 수 있는 객체를 출력

// console.log(document.body);
// console.warn(document.body);
// console.error(document.body);
// console.dir(document.body);

// .count(), .countReset()
// - 콘솔에 메소드 호출의 누적 횟수를 출력하거나 초기화한다.
// console.count('이름');
// console.countReset('이름');

// console.count(); // default: 1
// console.count('a');
// console.count('b');
// console.count('a');
// console.log('RESET a!!');
// console.countReset('a');
// console.count('a');
// console.count('b');

// .time(), .timeEnd()
// - 콘솔에 타이머가 시작해서 종료되기까지의 시간(ms)을 출력한다
// console.time('이름');
// console.timeEnd('이름');

// console.time('반복문');
// for(let i = 0; i < 10000; i++){
//   console.log(i);
// }
// console.timeEnd('반복문');

// .trace()
// - 메소드 호출 스택(Call Stack)을 추적해 출력한다
// function a() {
//   function b() {
//     function c() {
//       console.log('Log!!');
//       console.trace('Trace');
//     }
//     c();
//   }
//   b();
// }
// a();

// .clear()
// - 콘솔에 기록된 메시지를 모두 삭제한다.
// console.log(1);
// console.log(2);
// console.log(3);
// console.clear();

// 서식 문자 치환
// - %s : 문자로 적용 
// - %o : 객체로 적용
// - %c : CSS를 적용
// const a = 'The brown fox';
// const b = 3;
// const c = {
//   f: 'fox',
//   d: 'dog'
// };
// console.log('%s jumps over the lazy dog %s times.', a, b);
// console.log('%o is Object!', c);
// console.log(
//   '%cThe brown fox %cjumps over %cthe lazy dog.',
//   'color: brown; font-family: serif; font-size: 20px;',
//   '',
//   'font-size: 18px; color: #fff; background-color: green; border-radius: 4px;'
// )

//---------------------------------------------------------------

/** 2. Cookie, Storage */

// Cookie(쿠키)
// - 도메인 단위로 저장
// - 표준안 기준, 사이트당 최대 20개 및 4KB로 제한
// - 영구 저장 불가능

// domain : 유효 도메인 설정
// path : 유효 경로 성정
// expires : 만료 날짜(UTC Date) 설정
// max-age : 만료 타이머(s) 설정
// document.cookie = 'a=1; domain=localhost; path=/abc';
// document.cookie = `a=1; max-age=${60 * 60 * 24 * 3}`;
// document.cookie = `a=1`;
// document.cookie = `b=2; expires=${new Date(2022, 11, 16).toUTCString()}`;
// document.cookie = 'a=3';
// console.log(document.cookie);

// function getCookie(name){
//   const cookie = document.cookie
//   .split('; ')
//   .find(cookie => cookie.split('=')[0] === name);
//   return cookie ? cookie.split('=')[1] : null;
// }
// console.log(getCookie('a'));

// Storage(스토리지)
// - 도메인 단위로 저장
// - 5MB 제한
// - 세션 혹은 영구 저장 가능
// - 항상 문자 데이터로 저장 됨.

// sessionStorage: 브라우저 세션이 유지되는 동안에만 데이터 저장
// localStorage: 따로 제거하지 않으면 영구적으로 데이터 저장

// - .getItem() : 데이터 조회
// - .setItem() : 데이터 추가
// - .removeItem() : 데이터 제거
// - .clear() : 스토리지 초기화
// sessionStorage.setItem('a', JSON.stringify('Hello World!'));
// sessionStorage.setItem('b', JSON.stringify({x: 1, y: 2}));
// sessionStorage.setItem('c', JSON.stringify(123));

// console.log(JSON.parse(sessionStorage.getItem('a')));
// console.log(JSON.parse(sessionStorage.getItem('b')));
// console.log(JSON.parse(sessionStorage.getItem('c')));

// sessionStorage.removeItem('a');
// sessionStorage.clear();

//---------------------------------------------------------------

/** 3. Location */
// - 현재 페이지 정보를 반환하거나 제어한다

// .href : 전체 URL 주소
// .protocol : 프로토콜
// .hostname : 도메인 이름
// .pathname : 도메인 이후 경로
// .host : 포트 번호를 포함한 도메인 이름
// .port : 포트 번호
// .hash : 해시 정보(페이지의 ID)

// .assign(주소) : 해당 '주소'로 페이지 이동
// .replace(주소) : 해당 '주소'로 페이지 이동, 현재 페이지 히스토리 제거
// .reload(강력) : 페이지 새로고침, 'true' 인수는 '강력' 새로고침

// console.log(location);

//---------------------------------------------------------------

/** 4. History */

// 브라우저 히스토리(세션 기록)정보를 반환하거나 제어한다

// .length : 등록된 히스토리 갯수
// .scrollRestoration : 히스토리 탐색시 스크롤 위치 복원 여부 확인 및 지정
// .state : 현재 히스토리에 등록된 데이터(상태)

// .back() : 뒤로 가기
// .forward() : 앞으로 가기
// .go(위치) : 현재 페이지 기준 특정 히스토리 '위치'로 이동 / -숫자: 뒤로 이동 , 숫자: 앞으로 이동

// .pushState(상태, 제목, 주소) : 히스토리에 상태 및 주소를 추가
// .replaceState(상태, 제목, 주소) : 현재 히스토리의 상태 및 주소를 교체
// > 모든 브라우저(Safari 제외)는 '제목' 옵션을 무시한다.

// console.log(history);

// const page1 = /* html */`
//   <section class="page1">
//     <h1>Page 1</h1>
// </section>`

// const page2 = /* html */`
//   <section class="page2">
//     <h1>Page 2</h1>
// </section>`

// const page3 = /* html */`
//   <section class="page3">
//     <h1>Page 3</h1>
// </section>`

// const pageNotFound = /* html */`
//   <section>
//     <h1>404 Page Not Found!</h1>
// </section>`

// const pages = [
//   {path: '#/page1', template: page1},
//   {path: '#/page2', template: page2},
//   {path: '#/page3', template: page3}
// ]

// const appEl = document.querySelector('#app');

// const render = () => {
//   console.log(history);
//   const page = pages.find(page => page.path === location.hash);
//   appEl.innerHTML = page 
//   ? page.template 
//   : pageNotFound
// }

// window.addEventListener('popstate', render);
// render();

// const pagePush = num =>{
//   history.pushState(`전달할 데이터 - ${num}`, '', `#/page${num}`);
//   render();
// }

// const inputEl = document.querySelector('nav input');
// inputEl.addEventListener('keydown', event => {
//   if(event.key == 'Enter'){
//     pagePush(event.target.value);
//   }
// });

//---------------------------------------------------------------
//----------------------------------------------------------------

/** 1. 이벤트 추가 및 제거 */

// .addEventListener()
// - 대상에 이벤트 청취(Listen)를 등록한다.
// - 대상에 지정한 이벤트가 발생했을 때 지저한 함수(Handler)가 호출된다
// const parentEl = document.querySelector('.parent');
// const childEl = document.querySelector('.child');

// parentEl.addEventListener('click', () => {
//     console.log('Parent!!');
// })
// childEl.addEventListener('click', () => {
//     console.log('Child!');
// })

// .removeEventListener()
// - 대상에 등록했던 이벤트 청취(Listen)를 제거한다.
// - 메모리 관리를 위해 등록된 이벤트를 제거하는 과정이 필요할 수 있다
// const parentEl = document.querySelector('.parent');
// const childEl = document.querySelector('.child');

// const handler = () => {
//     console.log('parent!');
// }
// parentEl.addEventListener('click', handler);
// childEl.addEventListener('click', () => {
//     parentEl.removeEventListener('click', handler);
// })

//----------------------------------------------------------------

/** 2. 이벤트 객체 */
// 이벤트 객체는 대상에서 발생한 이벤트 정보를 담고 있다.
// const parentEl = document.querySelector('.parent');
// parentEl.addEventListener('click', event => {
//     // target - 이벤트가 발생한 요소 , currentTarget - 이벤트가 등록된 요소
//     console.log(event.target, event.currentTarget); 
//     console.log(event);
// })
// parentEl.addEventListener('wheel', event => {
//     console.log(event);
// })
// const inputEl = document.querySelector('input');
// inputEl.addEventListener('keydown', event => {
//     console.log(event.key);
// });

//----------------------------------------------------------------

/** 3. 기본 동작 방지 */

// 마우스 휠의 스크롤 동작 방지
// const parentEl = document.querySelector('.parent')
// parentEl.addEventListener('wheel', event => {
//     event.preventDefault();
// });

// // <a> 태그에서 페이지 이동 방지
// const anchorEl = document.querySelector('a');
// anchorEl.addEventListener('click', event =>{
//     event.preventDefault();
// });

//----------------------------------------------------------------

/** 4. 버블링과 캡처링 */

// 이벤트 전파(버블) 정지
// const parentEl = document.querySelector('.parent');
// const childEl = document.querySelector('.child');
// const anchorEl = document.querySelector('a');

// window.addEventListener('click', event => {
//     console.log('Window!!!');
// }, {capture: true})
// document.body.addEventListener('click', event => {
//     console.log('Body!!!');
//         event.stopPropagation(); // 버블링 정지
// }, {capture: true}) // capture: true -> 해당 이벤트 먼저 실행 후 다음 이벤트 진행
// parentEl.addEventListener('click', event => {
//     console.log('Parent!!');
// }, {capture: true})
// childEl.addEventListener('click', event => {
//     console.log('Child!!!');
// })
// anchorEl.addEventListener('click', event => {
//     console.log('Anchor!!!');
// })

// const parentEl = document.querySelector('.parent');
// const handler = () => {
//     console.log('Parent!!');
// }
// parentEl.addEventListener('click', handler, {capture: true});
// parentEl.removeEventListener('click', handler, {capture: true});

//----------------------------------------------------------------

/** 이벤트 옵션 */

// 핸들러 한번만 실행
// const parentEl = document.querySelector('.parent');
// parentEl.addEventListener('click', event => {
//     console.log('Parent!!!');
// }, {
//     once: true
// })

// 기본 동작과 핸들러 실행 분리
// const parentEl = document.querySelector('.parent');
// parentEl.addEventListener('wheel', () => {
//     for(let i = 0; i < 100000; i++){
//         console.log(i);
//     }
//     // console.log('parent!!');
// }, {
//     passive: true
// })

//----------------------------------------------------------------

/** 6. 이벤트 위임(Delegation) */
// - 비슷한 패턴의 여러 요소에서 이벤트를 핸들링해야 하는 경우, 단일 조상 요소에서 제어하는 이벤트 위임 패턴을 사용할 수 있다
// const parentEl = document.querySelector('.parent');
// const childEls = document.querySelectorAll('.child');

// 모든 대상 요소에 이벤트 등록
// childEls.forEach(el => {
//     el.addEventListener('click', event => {
//         console.log(event.target.textContent);
//     })
// })

// 조상 요소에 이벤트 위임
// parentEl.addEventListener('click', event => {
//     const childEl = event.target.closest('.child');
//     if(childEl){
//         console.log(childEl.textContent);
//     }
// })

//----------------------------------------------------------------

/** 7. 마우스와 포인터 이벤트(Mouse & Pointer Events) */

// click        | 클릭 했을 때
// dblclick     | 더블 클릭 했을 때
// mousedown    | 버튼을 누를 때
// mouseup      | 버튼을 땔 때
// mouseenter   | 포인터가 요소 위로 들어갈 때
// moseleave    | 마우스를 요소 밖으로 나올 때
// mousemove    | 포인터가 움직일 때
// contextmenu  | 우클릭했을 때
// wheel        | 휠 버튼이 회전할 때

const parentEl = document.querySelector('.parent');
const childEl = document.querySelector('.child');

// childEl.addEventListener('click', () => {
//     childEl.classList.toggle('active');
// })

// childEl.addEventListener('dblclick', () => {
//     childEl.classList.toggle('active');
// })

// childEl.addEventListener('mousedown', () => {
//     childEl.classList.add('active');
// })
// childEl.addEventListener('mouseup', () => {
//     childEl.classList.remove('active');
// })

// childEl.addEventListener('mouseenter', () => {
//     childEl.classList.add('active');
// })
// childEl.addEventListener('mouseleave', () =>{
//     childEl.classList.remove('active');
// })

// childEl.addEventListener('mousemove', event => {
//     console.log(event.offsetX, event.offsetY);
// })

// childEl.addEventListener('contextmenu', event => {
//     event.preventDefault();
//     console.log(event);
// })

// parentEl.addEventListener('wheel', event => {
//     console.log(event);
// })
// window.addEventListener('wheel', event => {
//     console.log(event);
// })

//----------------------------------------------------------------

/** 8. 키보드 이벤트(Keyboard Events) */

// keydown  | 키를 누를 때
// keyup    | 키를 땔 때

// const inputEl = document.querySelector('input');
// inputEl.addEventListener('keydown', event => {
//     if(event.key == 'Enter' && !event.isComposing){ // CJK(한중일)언어는 isComposing 처리 해야함.
//         console.log(event.isComposing);
//         console.log(event.target.value);
//     }
// })

// inputEl.addEventListener('keyup', event => {
//     console.log(event.key);
// })

//----------------------------------------------------------------

/** 9. 양식과 포커스 이벤트(Focus & Form Events) */

// focus    | 요소가 포커스를 얻었을 때
// blur     | 요소가 포커스를 잃었을 때
// input    | 값이 변경 되었을 때
// change   | 상태가 변경되었을 때
// submit   | 제출 버튼을 선택했을 때
// reset    | 리셋 버튼을 선택했을 때

// const formEl = document.querySelector('form');
// const inputEls = document.querySelectorAll('input');

// inputEls.forEach(el => {
//     el.addEventListener('focus', () => {
//         formEl.classList.add('active');
//     })
//     el.addEventListener('blur', () => {
//         formEl.classList.remove('active');
//     })
//     // el.addEventListener('input', event => {
//     //     console.log(event.target.value);
//     // })
//     el.addEventListener('change', event => {
//         console.log(event.target.value);
//     })
// })

// formEl.addEventListener('submit', event => {
//     event.preventDefault();
//     const data = {
//         id: event.target[0].value,
//         pw: event.target[1].value
//     }
//     console.log('submit!', data);
// })
// formEl.addEventListener('reset', event => {
//     console.log(' 리셋!!!');
// })

//----------------------------------------------------------------

/** 10. 커스텀 이벤트와 디스패치 */
// const child1 = document.querySelector('.child:nth-child(1)');
// const child2 = document.querySelector('.child:nth-child(2)');

// child1.addEventListener('click', event => {
//     // 강제로 이벤트 발생
//     child2.dispatchEvent(new Event('click'));
//     child2.dispatchEvent(new Event('wheel'));
//     child2.dispatchEvent(new Event('keydown'));
// })
// child2.addEventListener('click', event => {
//     console.log('Child2 click');
// })
// child2.addEventListener('wheel', event => {
//     console.log('Child2 wheel');
// })
// child2.addEventListener('keydown', evnet => {
//     console.log('Child2 keydown');
// })

// const child1 = document.querySelector('.child:nth-child(1)');
// const child2 = document.querySelector('.child:nth-child(2)');

// child1.addEventListener('hello-world', event => {
//     console.log('커스텀 이벤트 발생');
//     console.log(event.detail);
// })
// child2.addEventListener('click', () => {
//     child1.dispatchEvent(new CustomEvent('hello-world', {
//         detail: 123
//     }));
// })



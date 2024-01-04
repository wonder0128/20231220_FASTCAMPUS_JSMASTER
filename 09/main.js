// DOM(Document Object Model) - DOM API
// DOM이란 HTML 문서를 객체로 표현한것으로, JS 에서 HTML을 제어할 수 있게 해준다.

// const element = document.querySelector('h1');
// console.log(element.textContent);

//--------------------------------------------------------------------------

/** 1. Node vs Element */ 
// - 노드(Node) : HTML 요소, 텍스트, 주석 등 모든것을 의미
// - 요소(Element) : HTML 요소를 의미

// const parent = document.querySelector('.parent');

// // 부모 요소의 모든 자식 노드 확인
// console.log(parent.childNodes);

//  // 부모 요소의 모든 자식 요소 확인
// console.log(parent.children);

// console.dir(parent);

// class N {}
// class E extends N {}

// console.dir(E);
// console.dir(N);
// console.dir(E.__proto__); // Prototype에 해당하는 클래스

// console.dir(Element);
// console.dir(Node);
// console.dir(Element.__proto__);

//--------------------------------------------------------------------------

/** 2. 검색과 탐색 */ 

// document.getElementById()
// - HTML 'id' 속성(Attributes) 값으로 검색한 요소를 반환한다
// - 여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환한다
// - 검색 결과가 없으면 'null'을 반환한다
// - 아이디 선택자에 해당하는 '#'을 작성하지 않고 id값만 작성한다
// const el = document.getElementById('child2');
// console.log(el);

// document.querySelector()

// - 'CSS 선택자'로 검색한 요소를 하나 반환한다
// - 여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환한다
// - 검색 결과가 없으면 'null'을 반환한다
// const el = document.querySelector('.child:first-child');
// console.log(el);

// document.querySelectorAll()
// - 'CSS 선택자'로 검색한 모든 요소를 'NodeList'로 반환한다
// - 'NodeList' 객체는 '.forEach()'를 사용할 수 있다.
// const nodeList = document.querySelectorAll('.child');
// console.log(nodeList);
// nodeList.forEach(el => console.log(el.textContent));
// console.log(Array.from(nodeList).reverse()); // Array.from() - 유사 배열 -> 실제 배열

// N.parentElement
// - 노드의 부모 요소를 반환한다.
// const el = document.querySelector('.child');
// console.log(el.parentElement);

// E.closest()
// - 자신을 포함한 조상 요소 중 'CSS 선택자'와 일치하는 가장 가까운 요소를 반환한다
// - 요소를 찾지 못하면 'null'을 반환한다
// const el = document.querySelector('.child');
// console.log(el.closest('div'));
// console.log(el.closest('body'));
// console.log(el.closest('.hello'));

// N.previousSibling / N.nextSibling
// - 노드의 이전 형제 혹은 다음 형제 노드를 반환한다.
// const el = document.querySelector('.child');
// console.log(el.previousSibling.parentElement);
// console.log(el.nextSibling);

// E.previousElementSibling / E.nextElementSibling
// - 요소의 이전 형제 혹은 다음 형제 요소를 반환한다
// const el = document.querySelector('.child');
// console.log(el.previousElementSibling);
// console.log(el.nextElementSibling);

// E.children
// - 요소의 모든 자식 요소를 반환한다
// const el = document.querySelector('.parent');
// console.log(el.children);
// console.log(Array.from(el.children));

// E.firstElementChild / E.lastElementChild
// - 요소의 첫번째 자식 혹은 마지막 자식 요소를 반환한다
// const el = document.querySelector('.parent');
// console.log(el.firstElementChild);
// console.log(el.lastElementChild);

//--------------------------------------------------------------------------

/** 3. 생성, 조회, 수정 */

// document.createElement()
// - 메모리에만 존재하는 새로운 HTML 요소를 생성해 반환한다
// const divEl = document.createElement('div');
// console.log(divEl);

// const inputEl = document.createElement('input');
// console.log(inputEl);

// E.prepend() / E.append()
// - 노드를 요소의 첫번째 혹은 마지막 자식으로 삽입한다
// - 추가하고 싶은 노드를 메소드의 인수로 1개 이상 여러개 작성도 가능하다.
// const parentEl = document.querySelector('.parent');
// const el = document.createElement('div');
// el.textContent = 'Hello!!';

// parentEl.prepend(new Comment('주석'));
// // parentEl.append(el);
// // parentEl.append('TEXT!!!');
// parentEl.append(el, 'Text!!!');

// E.remove()
// - 요소를 제거한다
// const el = document.querySelector('.child');
// el.remove();

// E.insertAdjacentElement()
// - '대상 요소'의 지정한 위치에 '새로운 요소'를 삽입한다.
// - 대상요소.insertAdjacnetElement(위치, 새로운요소);

/** html */
`
// <!-- 'beforebegin' -->
// <div class="target">
//     <!-- 'afterbegin' -->
//     Content!
//     <!-- 'beforeend' -->
// </div>
// <!-- 'afterend' -->
// `

// const childEl = document.querySelector('.child');
// const newEl = document.createElement('span');
// newEl.textContent = 'Hello!!';
// childEl.insertAdjacentElement('afterend', newEl);

// N.insertBefore()
// - '부모 노드'의 자식인 '참조 노드'의 이전 형제로 '노드'를 삽입한다.
// - 부모노드.insertBefore(노드, 참조노드);
// const parentEl = document.querySelector('.parent');
// const childEl = document.querySelector('.child');
// const newEl = document.createElement('span');
// newEl.textContent = 'Hello!!';
// parentEl.insertBefore(newEl, childEl);

// N.contains()
// - '주어진 노드'가 '노드'의 자신을 포함한 후손인지 확인한다.
// - 노드.contains(주어진노드);
// const parentEl = document.querySelector('.parent');
// const childEl = document.querySelector('.child');

// console.log(parentEl.contains(childEl));            // true
// console.log(document.body.contains(parentEl));      // true
// console.log(document.body.contains(childEl));       // true
// console.log(document.body.contains(document.body)); // true
// console.log(parentEl.contains(parentEl));           // ture
// console.log(parentEl.contains(document.body));      // false
// console.log(childEl.contains(document.body));       // false

// N.textContent
// - 노드의 모든 텍스트를 얻거나 변경한다
// const el = document.querySelector('.child');
// console.log(el.textContent);
// el.textContent = '7';
// console.log(el.textContent);

// E.innerHTML
// - 요소의 모든 HTML 내용을 하나의 문자로 얻거나 새로운 HTML을 지정한다
// const el = document.querySelector('.parent');
// console.log(el.innerHTML);
// el.innerHTML = /* html */ `
// <div style="border: 4px solid;">
//     <span style="color: red;">Hello~</span>
//     <span style="color: red;">Hello~</span>
// </div>`;

// E.dataset
// - 요소의 각'data-' 속성 값을 얻거나 지정한다
// const el = document.querySelector('.child');
// const str = 'Hello World!!';
// const obj = {a: 1, b: 2};

// el.dataset.helloWorld = str;
// el.dataset.object = JSON.stringify(obj);

// console.log(el.dataset.helloWorld);
// console.log(el.dataset.object);
// console.log(JSON.parse(el.dataset.object));

// E.tagName
// - 요소의 태그 이름을 반환한다
// const parentEl = document.querySelector('.parent');
// const childEl = document.querySelector('.child');
// const el = document.createElement('span');

// console.log(parentEl.tagName);
// console.log(childEl.tagName);
// console.log(el.tagName);
// console.log(document.body.tagName);

// E.id
// - 요소의 'id' 속성 값을 얻거나 지정한다.
// const el = document.querySelector('.child');
// console.log(el.id);
// el.id = 'child1';
// console.log(el.id);
// console.log(el);

// E.className
// - 요소의 'class' 속성 값을 얻거나 지정한다.
// const el = document.querySelector('.child');
// console.log(el.className);
// el.className += ' child1 active';
// console.log(el.className);
// console.log(el);

// E.classList
// - 요소의 'class' 속성 값을 제어한다.
// -- '.add()' : 새로운 값을 추가
// -- '.remove()' :  기존 값을 제거
// -- '.toggle()' : 값을 토글
// -- '.contains()' : 값을 확인
// const el = document.querySelector('.child');
// el.classList.add('active');
// console.log(el.classList.contains('active'));

// el.classList.remove('active');
// console.log(el.classList.contains('active'));

// el.addEventListener('click', () => {
//     el.classList.toggle('active');
//     console.log(el.classList.contains('active'));
// });

//  E.style
// - 요소의 'style'속성(인라인 스타일)의 CSS 속성 값을 얻거나 지정한다.
// const el = document.querySelector('.child');

// 개별 지정
// el.style.width = '100px';
// el.style.fontSize = '20px';
// el.style.backgroundColor = 'green';
// el.style.position = 'absolute';

// 한번에 지정
// Object.assign(el.style, {
//     width: '100px',
//     fontSize: '20px',
//     backgroundColor: 'green',
//     position: 'absolute'
// });

// console.log(el.style);
// console.log(el.style.width);
// console.log(el.style.fontSize);
// console.log(el.style.backgroundColor);
// console.log(el.style.position);

// window.getComputedStyle()
// - 요소에 적용된 스타일 객체를 반환한다
// const el = document.querySelector('.child');
// const styles = window.getComputedStyle(el);

// console.log(styles.width);
// console.log(styles.fontSize);
// console.log(styles.backgroundColor);
// console.log(styles.position);
// console.log(styles);

// E.getAttribute() / E.setAttribute()
// - 요소에서 특정 속성 값을 얻거나 지정한다.
// const el = document.querySelector('.child');
// el.setAttribute('title', 'Hello World!');
// console.log(el.getAttribute('title'));

// E.hasAttribute() / E.removeAttribute()
// - 요소에서 특정 속성을 확인하거나 제거한다
// const el = document.querySelector('.child');
// console.log(el.hasAttribute('class'));
// el.removeAttribute('class');
// console.log(el.hasAttribute('class'));
// console.log(el);

//--------------------------------------------------------------------------

/** 크기와 좌표 */

// window.innerWidth / window.innerHeight
// - 현재 화면(Viewport)의 크기를 얻는다
// console.log(window.innerWidth);
// console.log(window.innerHeight);

// window.scrollX / window.scrollY
// - 페이지의 좌상단 기준, 현재 화면(Viewport)의 수평 혹은 수직 스크롤 위치를 얻는다.
// console.log(window.scrollX, window.scrollY);

// window.scrollTo() / E.scrollTo()
// - 지정된 좌표로 대상(화면, 스크롤 요소)을 스크롤한다.
// - 대상.scrollTo(X좌표 ,Y좌표);
// - 대상.scrollTo({ top: Y, left: X, behavior: 'smooth' })
// const parentEl = document.querySelector('.parent');
// setTimeout(() => {
//     // window.scrollTo(0, 500);
//     // window.scrollTo({
//     parentEl.scrollTo({
//         left: 0,
//         top: 500,
//         behavior: 'smooth'
//     })
// }, 1000);

// E.clientWidth / E.clientHeight
// - 테두리 선(border)을 제외한 요소의 크기를 얻습니다.
// const parentEl = document.querySelector('.parent');
// const childEl = document.querySelector('.child');

// console.log(parentEl.clientWidth, parentEl.clientHeight);
// console.log(childEl.clientWidth, childEl.clientHeight);

// E.offsetWidth / E.offsetHeight
// - 테두리 선(border)을 포함한 요소의 크기를 얻는다.
// const parentEl = document.querySelector('.parent');
// const childEl = document.querySelector('.child');
// console.log(parentEl.offsetWidth, parentEl.offsetHeight);
// console.log(childEl.offsetWidth, childEl.offsetHeight);

// E.scrollLeft / E.scrollTop
// - 스크롤 요소의 좌상단 기준, 현재 스크롤 요소의 수평 혹은 수직 스크롤 위치를 얻는다.
// window.parentEl = document.querySelector('.parent');
// console.log(parentEl.scrollLeft, parentEl.scrollTop);

// E.offsetLeft / E.offsetTop
// - 페이지의 좌상단 기준, 요소의 위치를 얻는다
// const parentEl = document.querySelector('.parent');
// const childEl = document.querySelector('.child');
// console.log(parentEl.offsetLeft, parentEl.offsetTop);
// console.log(childEl.offsetLeft, childEl.offsetTop);

// E.getBoundingClientRect()
// - 테두리 선(border)을 포함한 요소의 크기와 화면에서의 상대 위치 정보를 얻는다.
// const parentEl = document.querySelector('.parent');
// const childEl = document.querySelector('.child');
// console.log(parentEl.getBoundingClientRect());
// console.log(childEl.getBoundingClientRect());

//--------------------------------------------------------------------------
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
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------

//--------------------------------------------------------------------

/** 정규표현식(RegExp, Regular Expression) */
// - 문자 검색(Search)
// - 문자 대체(Replace)
// - 문자 추출(Extract)

// 생성자
// new RegExp('표현', '옵션')
// new RegExp('[a-z]', gi)

// 리터럴
// /표현/옵션
// /[a-z]/gi

// const str = `
// 010-1234-5678
// therexlam@naver.com
// Hello World!!
// https://naver.com
// The quick brown fox jumps over the lazy dog.
// wonder0128@eltov.com
// http://localhost:1234
// 동해물과 백두산이 마르고 닳도록
// abbcccddddeeeee
// `
// const regexp = new RegExp('the', 'gi');
// const regexp = /the/gi;
// console.log(str.match(regexp));
// console.log(str.match(/the/gi));

//--------------------------------------------------------------------

/** 메소드 */
// 정규식.test(문자열) - 일치 여부 반환 (true or false)
// 문자열.match(정규식) - 일치하는 문자의 배열 반환
// 문자열replace(정규식, 대체문자) - 일치하는 문자를 대체

// const str = `
// 010-1234-5678
// therexlam@naver.com
// Hello World!!
// https://naver.com
// The quick brown fox jumps over the lazy dog.
// wonder0128@eltov.com
// http://localhost:1234
// 동해물과 백두산이 마르고 닳도록
// abbcccddddeeeee
// `
// const regexp = /fox/gi;
// const regexp = /roze/gi;

// console.log(regexp.test(str));
// console.log(str.match(regexp));
// console.log(str.replace(regexp, 'cat'));

// console.log(/fox/gi.test(str));
// console.log(str.match(/fox/gi));
// console.log(str.replace(/fox/gi, 'cat'));

//--------------------------------------------------------------------

/** 플래그 */
// g - 모든 문자 일치(Global)
// i - 영어 대소문자를 구분하지 않고 일치(Ignore case)
// m - 여러 줄 일치(Multi line), 각가의 줄을 시작과 끝으로 인식

// const str = `
// 010-1234-5678
// therexlam@naver.com
// Hello World!!
// https://naver.com
// The quick brown fox jumps over the lazy dog.
// wonder0128@eltov.com
// http://localhost:1234
// 동해물과 백두산이 마르고 닳도록
// abbcccddddeeeee
// `

// console.log(str.match(/the/));
// console.log(str.match(/the/g));
// console.log(str.match(/the/gi));
// console.log(str.match(/\.$/gi));
// console.log(str.match(/\.$/gim));

//--------------------------------------------------------------------

/** 패턴 */
// ^ab      | 줄(Line) 시작에 있는 ab와 일치
// ab$      | 줄(Line) 끝에 있는 ab와 일치
// .        | 임의의 한 문자와 일치
// a|b      | a 또는 b와 일치
// ab?      | b가 없거나 b와 일치

// {3}      | 3개 연속 일치
// {3,}     | 3개 이상 연속 일치
// {3,5}    | 3개이상 5개이하(3~5개) 연속 일치
// +        | 1회 이상 연속 일치, `{1,}`

// [ab]     | a 또는 b
// [a-z]    | a부터 z사이의 문자 구간에 일치(영어 소문자)
// [A-Z]    | A부터 Z사이의 문자 구간에 일치(영어 대문자)
// [0-9]    | 0부터 9사이의 문자 구간에 일치(숫자)
// [가-힣]   | 가부터 힣사이의 문자 구간에 일치(한글)

// \w       | 63개문자(Word, 대소영문 52개 + 숫자 10개 + _)에 일치
// \b       | 63개 문자에 일치하지 않는 문자 경계(Boundary)
// \d       | 숫자(Digit)에 일치
// \s       | 공백(Space, Tab 등)에 일치

// (?:)     | 그룹 지정
// (?=)     | 앞쪽 일치(Lookahead)
// (?<=)    | 뒤쪽 일치(Lookbehind)

const str = `
010-1234-5678
therexlam@naver.com
Hello World!!
https://naver.com/1234
The quick brown fox jumps over the lazy dog.
hello@eltov.com
http://localhost:1234
동해물과 백두산이 마르고 닳도록
abbcccddddeeeee
___
`

// console.log(str.match(/^h.../gm));
// console.log(str.match(/^h.../gim));

// console.log(str.match(/\.com/g));
// console.log(str.match(/\.com$/gm));
// console.log(str.match(/...\.com$/gm));

// console.log(str.match(/fox|dog|\.com/g));

// console.log(str.match(/https?/g));

// console.log(str.match(/\d{3}/g));
// console.log(str.match(/e{3}/g));
// console.log(str.match(/b{3}/g));
// console.log(str.match(/\d{3,9}/g));
// console.log(str.match(/\d{3,}/g));
// console.log(str.match(/\d{1,}/g));
// console.log(str.match(/\d+/g));

// console.log(str.match(/[f|o|x|d|o|g]/g));
// console.log(str.match(/[foxdog]/g));
// console.log(str.match(/[a-z]+/g));
// console.log(str.match(/[A-Z]+/g));
// console.log(str.match(/[a-zA-Z]+/g));
// console.log(str.match(/[a-zA-Z가-힣]+/g));
// console.log(str.match(/[가-힣]+/g));
// console.log(str.match(/[가-힣]{3}/g));
// console.log(str.match(/[가-힣0-9]{3}/g));

// console.log(str.match(/\w+/g));
// console.log(str.match(/\b\d+\b/g));
// console.log(str.match(/\s/g));

// console.log(str.match(/https?:\/\/(?:\w+\.?)+\/?/g));
// console.log(str.match(/.+(?=과)/g));
// console.log(str.match(/(?<=과).+/g));

console.log(str.match(/\d{3}-\d{4}-\d{4}/g));
console.log(str.match(/\w+@\w+\.\w+/g));
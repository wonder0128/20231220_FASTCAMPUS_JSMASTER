import {birthKey, emailsKey} from './key.js'

export default {
  firstName: 'MinJeong',
  lastName: 'Kang',
  age: 31,
  [birthKey]: new Date(1993, 0, 28, 10, 56),
  [emailsKey]: ['rexlam@naver.com', 'wonder0128@eltov.com']
}
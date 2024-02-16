import {Component} from '../core/roze'
import TextFiled from '../components/TextField'
import Message from '../components/Message'
import Title from '../components/Title'

export default class Home extends Component {
  render() {
    this.el.innerHTML = /* html */ `
      <h1>Home Page!</h1>
    `
    this.el.append(
      new TextFiled().el,
      new Message().el,
      new Title().el
      )
  }
}
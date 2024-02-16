import {Component} from '../core/roze'
import messageStore from '../store/message'

export default class Title extends Component {
  constructor () {
    super({
      tagName: 'h1'
    }) 
    messageStore.subscribe('message', newVal => {
      console.log(newVal)
      this.render();
    })
  }
  render() {
    this.el.textContent = `Title: ${messageStore.state.message}`;
  }
}
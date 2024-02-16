import {Component} from '../core/roze'
import messageStore from '../store/message'

export default class TextField extends Component {
    render() {
        this.el.innerHTML = /* html */ `
            <input value="${messageStore.state.message}"/>
        `
        const inputEl = this.el.querySelector('input');
        inputEl.addEventListener('input', () => {
            messageStore.state.message = inputEl.value;
        })
    }
}
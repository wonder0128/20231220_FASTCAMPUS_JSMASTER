import {Component} from './core/roze'
import TheHeader from './components/TheHeader'

export default class App extends Component {
  render() {
    const routerView = document.createElement('router-view');

    this.el.append(
      new TheHeader().el,
      routerView
    )
  }
}
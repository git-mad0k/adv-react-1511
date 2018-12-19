import { observable, action } from 'mobx'

export default class NavigatorStore {

  @observable previous = {
    screen: '',
    params: ''
  }
  @observable current = {
    screen: '',
    params: ''
  }

  @action setPrevious = (screen, params) => this.previous = { screen, params }
  @action setCurrent = (screen, params) => this.current = { screen, params }

}

import { observable, action } from 'mobx'
import fb from '../services/api'

export default class EventsStore {
  @observable entities = []
  @observable loading = false
  @observable loaded = false

  @action fetchEventList = () => {
    return action(function () {
      this.loading = true
      fb.fetchAllEvents()
        .then(data => {
          this.entities = objToArr(data)
          console.log(objToArr(data))
          this.loading = false
        })
        .catch(
          error => console.log(error)
        )
    })
  }

}
const objToArr = obj =>
  Object.entries(obj).map(([id, value]) => ({ id, ...value }))
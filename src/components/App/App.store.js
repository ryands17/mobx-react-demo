import { observable, action } from 'mobx'

class Store {
  @observable list = []
  @observable text = ''

  @action
  onTextChange = e => {
    this.text = e.target.value
  }

  @action
  addToList = e => {
    if (e.which === 13) {
      e.preventDefault()
      this.list.push(e.target.value)
      this.text = ''
      return
    }
  }
}

export default new Store()

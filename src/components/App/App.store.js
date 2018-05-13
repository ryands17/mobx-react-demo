import { observable } from 'mobx'

class Store {
  @observable list = []
  @observable text = ''
}

export default new Store()

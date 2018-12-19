import { observable, action, computed } from 'mobx'
import { validate } from 'email-validator'

export default class AuthStore {
    @observable email = ''
    @observable password = ''

    @observable user = null

    @action setEmail = email => this.email = email
    @action setPassword = password => this.password = password

    @action signIn = user => this.user = user

    @computed get isValidEmail() {
        return validate(this.email)
    }

    @computed get isAuthorized() {
        return !!this.user
    }
}
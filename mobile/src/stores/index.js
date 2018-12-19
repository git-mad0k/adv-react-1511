import AuthStore from './auth'
import NavigatorStore from './navigator'
import EventsStore from './events'

export default {
    auth: new AuthStore(),
    navigator: new NavigatorStore(),
    events: new EventsStore()
}
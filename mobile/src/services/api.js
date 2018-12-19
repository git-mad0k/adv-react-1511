import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

class ApiService {
  fb = firebase

  signIn = (email, password) =>
    this.fb.auth().signInWithEmailAndPassword(email, password)

  fetchAllEvents = () =>
    this.fb
      .database()
      .ref('events')
      .limitToFirst(10)
      .once('value')
      .then((res) => res.val())

  loadAllPeople = () =>
    this.fb
      .database()
      .ref('people')
      .once('value')
      .then((res) => res.val())
}

export default new ApiService()
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

class ApiService {
  fb = firebase

  signIn = (email, password) =>
    this.fb.auth().signInWithEmailAndPassword(email, password)
  signUp = (email, password) =>
    this.fb.auth().createUserWithEmailAndPassword(email, password)

  fetchAllEvents = () =>
    this.fb
      .database()
      .ref('events')
      .once('value')
      .then((res) => res.val())

  fetchLazyEvents = (id = '') =>
    this.fb
      .database()
      .ref('events')
      .orderByKey()
      .limitToFirst(10)
      .startAt(id)
      .once('value')
      .then((data) => data.val())

  fetchPeople = () =>
    this.fb
      .database()
      .ref('people')
      .orderByKey()
      .once('value')
      .then((data) => data.val())

  fetchAddPerson = (person) =>
    this.fb
      .database()
      .ref('people')
      .push(person)

  fetchPersonToEvents = (eventId, personId) =>
    this.fb
      .database()
      .ref('events/' + eventId)
      .update({
        peopleIds: personId
      })

  onAuthStateChanged = (callback) => this.fb.auth().onAuthStateChanged(callback)
}

export default new ApiService()

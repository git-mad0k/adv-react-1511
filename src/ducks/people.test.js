import { call, put } from 'redux-saga/effects'
import { reset } from 'redux-form'
import { addPersonSaga, addPerson, ADD_PERSON } from './people'
import { generateId } from '../services/util'
import api from '../services/api'

describe('People Duck', () => {
  it('should add a person', () => {
    const person = {
      firstName: 'Roma',
      lastName: 'Yakobchuk',
      email: 'r.yakobchuk@javascript.info'
    }

    const action = addPerson(person)

    const addPersonProcess = addPersonSaga(action)

    expect(addPersonProcess.next().value).toEqual(call(generateId))

    const id = 1234

    expect(addPersonProcess.next(id).value).toEqual(
      put({
        type: ADD_PERSON,
        payload: {
          person: { id, ...person }
        }
      })
    )

    expect(addPersonProcess.next().value).toEqual(
      call(api.fetchAddPerson, person)
    )

    expect(addPersonProcess.next().value).toEqual(put(reset('person')))

    expect(addPersonProcess.next().done).toEqual(true)
  })
})

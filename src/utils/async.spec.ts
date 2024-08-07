import {AsyncCallback} from '../types/async-callback'
import {async} from './async'

describe('async', () => {
  it('test', () => {
    const resolve = jest.fn()

    async(Promise.resolve).then(resolve)
  })
})

const expect = require('chai').expect
import dataProcess from '../lib/dataProcess'

describe('check dataProcess', () => {
  it('should throw an exception if invalid data is passed', () => {
      expect(()=>{dataProcess({})}).to.throw('Invalid Data')
  })
})

const expect = require('chai').expect
import whatToWear from '../lib/whatToWear'

describe('check whatToWear', () => {

  it('should return t-shirt by default', () => {
    expect(whatToWear(17)).to.be.equal('t-shirt')
  })

  it('should return hoody if temperature is between 10 and 15', () => {
    expect(whatToWear(13)).to.be.equal('hoody')
  })

  it('should return jacket if temperature less then 10', () => {
    expect(whatToWear(5)).to.be.equal('jacket')
  })
})

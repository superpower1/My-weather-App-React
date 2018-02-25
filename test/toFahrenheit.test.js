const expect = require('chai').expect
import toFahrenheit from '../lib/toFahrenheit'

describe('check celsiusToFahrenheit', () => {
  it('should return 86 Fahrenheit if Celsius is 30', () => {
    expect(toFahrenheit(30)).to.be.equal(86)
  })
  it('should return 68 Fahrenheit if Celsius is 20', () => {
    expect(toFahrenheit(20)).to.be.equal(68)
  })
})

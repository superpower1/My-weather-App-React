const expect = require('chai').expect
import fetchWeather from '../lib/fetchWeather'
import "isomorphic-fetch"

describe('check if weather api return the correct data', () => {
  it('should return the same city', async () => {
    const location = 'sydney';
		const response = await fetchWeather(location);
		expect(response['name']).to.be.equal('Sydney')
  })
})

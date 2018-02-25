const expect = require('chai').expect
import fetchForecast from '../lib/fetchForecast'
import "isomorphic-fetch"

describe('check if forecast api return the correct data', () => {
  it('should return the same city', async () => {
    const location = 'sydney';
		const response = await fetchForecast(location);
		expect(response['city']['name']).to.be.equal('Sydney')
  })
})

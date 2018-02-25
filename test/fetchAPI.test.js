const expect = require('chai').expect
import fetchAPI from '../lib/fetchAPI'
import "isomorphic-fetch"

describe('check if API return the correct data', () => {
  it('should return the same city', async () => {
    const location = 'sydney';
		const response = await fetchAPI(location);
		expect(response['name']).to.be.equal('Sydney')
  })
})

import service from './service'
import axios from 'axios'

export const getTrips = ({ from, to, departureDate, returnDate }) => {
  return axios.get(`https://api-fallen-internal.clickbus.com/api/v3/trips?from=${from}&to=${to}&departureDate=${departureDate}${returnDate ? `&returnDate=${returnDate}` : ''}&cached=1&clientId=2`)
}

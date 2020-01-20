import service from './service'
import axios from 'axios'

export const getTrips = ({ from, to, departureDate, returnDate }) => {
  return axios.get(`${process.env.API_URL}/trips?from=${from}&to=${to}&departureDate=${departureDate}${returnDate ? `&returnDate=${returnDate}` : ''}&cached=1&clientId=2`)
}

export const fetchTrips = async ({ from, to, departureDate, returnDate }) => {
  const res = await axios.get(`${process.env.API_URL}/trips?from=${from}&to=${to}&departureDate=${departureDate}${returnDate ? `&returnDate=${returnDate}` : ''}&cached=1&clientId=2`)
  const data = await res.data
  return data
}

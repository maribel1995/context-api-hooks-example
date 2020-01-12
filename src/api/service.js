import axios from 'axios'

const Service = () => {
  return axios.create({
    baseURL: process.env.API_URL
  })
}

export default Service

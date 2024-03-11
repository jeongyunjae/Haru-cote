import axios from 'axios'

const client = axios.create({
  baseURL: window.location.origin,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  // withCredentials: true,
})

export default client

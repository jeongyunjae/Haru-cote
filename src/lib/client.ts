import axios from 'axios'

const client = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3080/'
      : 'https://port-0-haru-cote-server-fi1xh2bltqnoclo.sel5.cloudtype.app/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  // withCredentials: true,
})

export default client

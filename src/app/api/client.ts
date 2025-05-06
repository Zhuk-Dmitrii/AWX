import axios from 'axios'

const serial = 'a7307e89-fbeb-4b28-a8ce-55b7fb3c32aa'

export const instance = axios.create({
  baseURL: 'https://awx.pro/b2api/change/user/pair/calc',
  withCredentials: true,
  headers: {
    'serial': serial,
  },
})

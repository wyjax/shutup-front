import axios from 'axios'

function create (url) {
  const instance = axios.create(
    Object.assign({
      baseURL: url,
      headers: { 'Content-Type': 'application/json' }
    })
  )
  return instance
}

export const common = create(`http://localhost:8080`)

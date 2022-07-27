import {common} from './common'

export const getRooms = async data => {
  return common.get(`/api/rooms`)
}

export const registerRoom = async data => {
  return common.post(`/api/room`)
}

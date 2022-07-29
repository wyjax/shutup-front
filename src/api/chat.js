import {common} from './common'

export const getRooms = async data => {
  return common.get(`/api/chat/rooms`)
}

export const registerRoom = async data => {
  return common.post(`/api/chat/room`, data)
}

export const enterRoom = async data => {
  return common.get(`/api/chat/room/` + data)
}

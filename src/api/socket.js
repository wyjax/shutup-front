import Stomp from 'webstomp-client'
import SockJS from 'sockjs-client'
import {EventBus} from '../event/eventIndex'
// import Store from '../store'

let socket
let stompClient

export const connect = (uuid) => {
  socket = new SockJS('http://localhost:8082/shut-up')
  stompClient = Stomp.over(socket)
  stompClient.connect({}, () => {
    onConnected(uuid)
  }, onError)
  return socket
}

export const onConnected = (uuid) => {
  stompClient.subscribe('/sub/chat/' + uuid, onMessageReceived)
  // const loginUser = Store.getters.getLoginUser
  // const message = {
  //   uuid: uuid,
  //   name: loginUser.nickname,
  //   loginId: loginUser.loginId,
  //   content: loginUser.nickname + '님이 들어오셨습니다.'
  // }
  // sendMessage(message)
}

export const disConnect = () => {
  if (socket) {
    socket.close()
    socket = null
    stompClient = null
  }
}

export const onError = (error) => {
  console.log(error)
}

export const sendMessage = (message) => {
  if (stompClient) {
    console.log(message)
    stompClient.send('/pub/chat/' + message.uuid, JSON.stringify(message))
  }
}

export const onMessageReceived = (payload) => {
  const message = JSON.parse(payload.body)
  EventBus.$emit('receiveMessage', message)
}

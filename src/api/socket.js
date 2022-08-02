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
}

export const disConnect = () => {
  if (socket) {
    socket.close()
    stompClient.disconnect()
    socket = null
    stompClient = null
  }
}

export const onError = (error) => {
  console.log(error)
}

export const sendMessage = (message) => {
  if (stompClient) {
    stompClient.send('/pub/chat/' + message.uuid, JSON.stringify(message))
  }
}

export const onMessageReceived = (payload) => {
  const message = JSON.parse(payload.body)
  EventBus.$emit('receiveMessage', message)
}

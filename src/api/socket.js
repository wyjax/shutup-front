import Stomp from 'webstomp-client'
import SockJS from 'sockjs-client'

let socket
let stompClient

export const connect = (uuid) => {
  socket = new SockJS('http://localhost:8082/shut-up')
  stompClient = Stomp.over(socket)
  stompClient.connect({}, () => {
    stompClient.subscribe('/sub/chat/' + uuid, onMessageReceived)
  }, onError)
  return stompClient
}

export const onConnected = (uuid) => {
  stompClient.subscribe('/sub/chat/' + uuid, onMessageReceived)
  stompClient.send('/app/chat.addUser',
    JSON.stringify({sender: 'jk', type: 'JOIN'})
  )
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
    stompClient.send('/pub/chat/' + message.uuid, JSON.stringify(message))
  }
}

export const onMessageReceived = (payload) => {
  const message = JSON.parse(payload.body)
  var messageElement = document.createElement('div')
  var nameArea = document.createElement('p')
  var messageArea = document.createElement('p')

  nameArea.classList.add('name-area')
  messageArea.classList.add('content-area')

  nameArea.appendChild(document.createTextNode(message.sender))
  messageArea.appendChild(document.createTextNode(message.content))
  messageElement.appendChild(nameArea)
  messageElement.appendChild(messageArea)

  const messageList = document.querySelector('.room')
  messageList.appendChild(messageElement)
}

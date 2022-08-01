<template>
  <div>
    <div id="roomName">{{ room.name }}</div>
    <div class="room beauty-scroll" id="message-list">
      <chat-message v-for="(message, idx) in messages" :message="message" :key="idx"></chat-message>
    </div>
    <div>
      <input type="text" v-model="message" @keyup.enter="send">
      <button @click="send">전송</button>
    </div>
  </div>
</template>

<script>
import {EventBus} from '../../event/eventIndex'
import {connect, disConnect, sendMessage} from '../../api/socket'
import ChatMessage from '../../components/chat/ChatMessage'
import {getMessages} from '../../api/chat'

export default {
  components: {ChatMessage},
  data () {
    return {
      messages: [],
      eventBus: '',
      connection: null,
      message: '',
      room: {},
      user: {},
      target: {}
    }
  },
  mounted () {
    EventBus.$on('selectRoom', room => {
      disConnect()
      this.room = room
      this.init()
      this.connect()
    })
    EventBus.$on('receiveMessage', message => {
      const msg = {
        uuid: message.uuid,
        name: message.name,
        loginId: message.loginId,
        content: message.content
      }
      this.messages.push(msg)
      this.setScroll(msg.loginId)
    })
    this.user = this.$store.getters.getLoginUser
    this.target = document.querySelector('#message-list')
  },
  computed: {
    roomUUid () {
      return this.$store.getters.getSelectedRoomId
    }
  },
  methods: {
    init () {
      getMessages(this.room.uuid).then(result => {
        this.messages = result.data
      })
    },
    connect () {
      this.connection = connect(this.room.uuid)
    },
    send () {
      const messageModel = {
        uuid: this.room.uuid,
        name: this.user.nickname,
        loginId: this.user.loginId,
        content: this.message
      }
      sendMessage(messageModel)
      this.message = ''
    },
    setScroll (loginId) {
      if (this.user.loginId !== loginId) {
        return
      }
      setTimeout(function () {
        const target = document.querySelector('#message-list')
        target.scrollTop = target.scrollHeight
      }, 100)
    }
  }
}
</script>

<style scoped>
#roomName {
  background-color: #333;
  padding:10px
}
.room {
  height: 427px;
  overflow-y: auto;
}

#message-list {
  overflow-y: scroll;
}
</style>

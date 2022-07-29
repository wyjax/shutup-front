<template>
  <div>
    <div id="roomName">{{ room.name }}</div>
    <div class="room" id="message-list">
      <chat-message v-for="(message, idx) in messages" :message="message" :key="idx"></chat-message>
    </div>
    <div>
      <input type="text" v-model="name">
      <input type="text" v-model="message" @keyup.enter="send">
      <button @click="send">전송</button>
    </div>
  </div>
</template> 5 40

<script>
import {EventBus} from '../../event/eventIndex'
import {connect, disConnect, sendMessage} from '../../api/socket'
import ChatMessage from '../../components/chat/ChatMessage'
import {getMessages} from '../../api/chat'

export default {
  components: {ChatMessage},
  data () {
    return {
      name: 'test',
      messages: [],
      eventBus: '',
      connection: null,
      message: '',
      room: {}
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
        name: message.name,
        uuid: message.uuid,
        content: message.content
      }
      this.messages.push(msg)
    })
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
      }).catch(error => {
        console.log(error)
      })
    },
    connect () {
      this.connection = connect(this.room.uuid)
    },
    send () {
      const messageModel = {
        name: this.name,
        uuid: this.room.uuid,
        content: this.message
      }
      sendMessage(messageModel)
      this.message = ''
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
</style>

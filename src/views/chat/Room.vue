<template>
  <div class="room" id="message-list">
    <div>채팅</div>
    <chat-message v-for="(message, idx) in messages" :message="message" :key="idx"></chat-message>
    <div>
      <input type="text" v-model="name">
      <input type="text" v-model="message">
      <button @click="send">전송</button>
    </div>
  </div>
</template>

<script>
import {EventBus} from '../../event/eventIndex'
import {connect, disConnect, sendMessage} from '../../api/socket'
import ChatMessage from '../../components/chat/ChatMessage'

export default {
  components: {ChatMessage},
  data () {
    return {
      name: 'test',
      messages: [],
      eventBus: '',
      connection: null,
      message: '',
      uuid: ''
    }
  },
  mounted () {
    EventBus.$on('selectRoom', uuid => {
      disConnect()
      this.messages = []
      this.connect(uuid)
    })
    EventBus.$on('receiveMessage', message => {
      const msg = {
        name: message.sender,
        uuid: message.uuid,
        content: message.content
      }
      this.messages.push(msg)
      console.log(this.messages)
    })
  },
  computed: {
    roomUUid () {
      return this.$store.getters.getSelectedRoomId
    }
  },
  methods: {
    connect (uuid) {
      this.uuid = uuid
      this.connection = connect(uuid)
    },
    send () {
      const messageModel = {
        sender: this.name,
        uuid: this.uuid,
        content: this.message
      }
      sendMessage(messageModel)
      this.message = ''
    }
  }
}
</script>

<style scoped>
</style>

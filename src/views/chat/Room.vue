<template>
  <div class="room" id="message-list">
    <div>채팅</div>
    <div v-for="message in messages" v-bind:key="message">
      <p class="name-area">{{ message.name }}</p>
      <p class="content-area">{{ message.content }}</p>
    </div>

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

export default {
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
      this.connect(uuid)
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
.room p {
  text-align: left;
}

.name-area {
  margin: 0;
  font-weight: bold;
}

.content-area {
  margin: 0 0 10px;
  padding-left: 20px;
}
</style>

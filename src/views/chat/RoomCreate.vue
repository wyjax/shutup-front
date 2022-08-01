<template>
  <div>
    <label for="username">방이름</label>
    <input id="username" v-model="room.name">
    <button @click="createRoom">만들기</button>
  </div>
</template>

<script>
import {registerRoom} from '../../api/chat'
import {EventBus} from '../../event/eventIndex'

export default {
  data () {
    return {
      room: {
        name: ''
      }
    }
  },
  methods: {
    createRoom () {
      const data = {
        name: this.room.name
      }
      registerRoom(data).then(response => {
        const data = response.data
        if (data) {
          EventBus.$emit('createdRoom', data)
        }
      })
      this.initModel()
    },
    initModel () {
      this.room = {
        name: ''
      }
    }
  }
}
</script>

<style scoped>

</style>

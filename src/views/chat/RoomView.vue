<template>
  <div>
    <div>
      방목록
    </div>
    <ul>
      <li v-for="(room, idx) in rooms" v-bind:key="idx" @click="selectRoom(room)">
        {{ room.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import {getRooms} from '../../api/chat.js'
import {EventBus} from '../../event/eventIndex'

export default {
  data () {
    return {
      rooms: [],
      user: this.$store.getters.getLoginUser
    }
  },
  mounted () {
    this.getRooms()
    EventBus.$on('createdRoom', data => {
      this.addRoom(data)
    })
  },
  methods: {
    addRoom (room) {
      if (!this.rooms) {
        this.rooms = []
      }
      this.rooms.push(room)
    },
    getRooms () {
      getRooms()
        .then(result => {
          this.rooms = result.data
        })
        .catch(() => {
          console.log('목록 가져오는데 실패')
        })
    },
    selectRoom (room) {
      this.$store.commit('selectedRoom', room.uuid)
      EventBus.$emit('selectRoom', room)
    }
  }
}
</script>

<style scoped>
li {
  list-style: none;
  line-height: 35px;
  border: 1px solid white;
  border-collapse: collapse;
  cursor: grab;
}

ul {
  padding: 0;
  margin: 0;
}

li:hover {
  background-color: gray;
}
</style>

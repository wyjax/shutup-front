<template>
  <div>
    <ul>
      <li v-for="room in rooms" v-bind:key="room" @click="clickRoom(2)">
        {{ room }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rooms: [
        '엄정기',
        '엄정기',
        '엄정기'
      ]
    }
  },
  methods: {
    clickRoom (id) {

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
  cursor:grab;
}
</style>

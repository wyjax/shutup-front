<template>
  <div class="mainview" style="width: 100%; height: 100%">
    <div id="main-left" class="left">
      <room-view></room-view>
    </div>
    <div id="main-right" class="right">
      <room-create></room-create>
    </div>
  </div>
</template>

<script>
import RoomView from './chat/RoomView'
import RoomCreate from './chat/RoomCreate'
export default {
  components: {RoomCreate, RoomView},
  data () {
    return {}
  }
}
</script>

<style scoped>
* {
  color: white;
}
body * {
  background-color: black;
}

div {
  width: 100%;
  height: 500px;
  border: 1px solid #fff;
}
#main-left {
  width: 30%;
  float: left;
  box-sizing: border-box;
}
#main-right {
  width: 70%;
  float: right;
  box-sizing: border-box;
}
</style>

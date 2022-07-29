<template>
  <div class="mainview" style="width: 100%; height: 100%">
    <div id="main-left" class="left">
      <room-create></room-create>
    </div>
    <div id="main-center" class="center">
      <room-view></room-view>
    </div>
    <div id="main-right" class="right">
      <room></room>
    </div>
  </div>
</template>

<script>
import RoomView from './chat/RoomView'
import RoomCreate from './chat/RoomCreate'
import Room from './chat/Room'
export default {
  components: {Room, RoomCreate, RoomView},
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
#main-center {
  width: 40%;
  float: left;
  box-sizing: border-box;
}
#main-right {
  width: 30%;
  float: right;
  box-sizing: border-box;
}
</style>

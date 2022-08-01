<template>
  <div v-bind:class="[loginId == message.loginId ? 'my-chat-body': 'chat-body']">
    <p class="name-area">{{ message.name }}</p>
    <p class="message-content">{{ message.content }}</p>
  </div>
</template>

<script>
export default {
  props: ['message'],
  data () {
    return {
      loginId: this.$store.getters.getLoginUser.loginId
    }
  }
}
</script>

<style scoped>

.room name-area {
  text-align: left;
}

.name-area {
  margin: 5px;
  font-weight: bold;
}

.message-content {
  margin: 10px 10px 10px 20px;
  padding: 5px;
  border: 1px solid white;
  border-radius: 10px;
  display: inline-block;
  max-width: 60%;
}

.chat-body {
  text-align: start;
}

.my-chat-body {
  text-align: end;
}

</style>

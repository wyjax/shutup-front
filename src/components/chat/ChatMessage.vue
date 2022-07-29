<template>
  <div>
    <p class="name-area">{{ message.name }}</p>
    <p class="content-area">{{ message.content }}</p>
  </div>
</template>

<script>
export default {
  props: ['message']
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

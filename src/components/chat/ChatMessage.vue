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
  margin: 10px 10px 10px 20px;
  padding: 5px;
  border: 1px solid white;
  border-radius: 10px;
}
</style>

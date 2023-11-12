<script setup>
import { onMounted, ref } from 'vue'
import EventService from '@/services/EventService'
const props = defineProps({
  id: {
    required: true
  }
})

const event = ref(null)
onMounted(() => {
  EventService.getEvents(props.id)
    .then(({ data }) => {
      console.log(data)
      event.value = data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<style scoped></style>

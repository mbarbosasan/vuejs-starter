<script setup>
import EventCard from '@/components/EventCard.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import EventService from '@/services/EventService'

;('')
const events = ref([])
onMounted(() => {
  EventService.getEvents()
    .then(({ data }) => {
      console.log(data)
      events.value = data
    })
    .catch((error) => {
      console.error(error)
    })
})
</script>
<template>
  <div class="events">
    <h1>Events for Good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

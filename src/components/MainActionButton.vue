<template>
  <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab
        v-model="fabRight"
        vertical-actions-align="right"
        color="secondary"
        glossy
        icon="keyboard_arrow_up"
        direction="up"
      >
        <q-fab-action label-position="left" color="primary" @click="onClick" icon="mail" label="Email" />
        <q-fab-action label-position="left" color="secondary" @click="onClick" icon="alarm" label="Alarm" />
        <q-fab-action label-position="left" color="orange" @click="onClick" icon="airplay" label="Airplay" />
        <q-fab-action label-position="left" color="accent" @click="onClick" icon="room" label="Map" />
      </q-fab>
    </q-page-sticky>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'MainActionButton',
  setup () {
    return {
      fabLeft: ref(true),
      fabCenter: ref(true),
      fabRight: ref(true),

      onClick () {
        console.log('Clicked on a fab action')
      }
    }
  }
}
</script>

<style scoped>

</style>

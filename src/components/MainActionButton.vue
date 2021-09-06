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
        <q-fab-action  to="/createquik" label-position="left" color="primary" @click="onClick" icon="alarm" label="Create new Quik" />
      </q-fab>
    </q-page-sticky>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'MainActionButton',

  setup () {
    return {
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

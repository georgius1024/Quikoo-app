<template>
  <q-page class="flex flex-center">
    <q-page-container>
      <div>
        <main-action-button/>
        <Footer/>
      </div>
    </q-page-container>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import MainActionButton from 'components/MainActionButton'

export default defineComponent({
  name: 'Outbox',
  components: { MainActionButton }
})
</script>

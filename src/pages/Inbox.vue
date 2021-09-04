<template>
  <div>
    <quik-short-item v-for="quik in quiks"
      :key="quik.id"
      :avatar="quik.avatar"
      :from="quik.from"
      :recievers="quik.recievers"
      :text="quik.text"
      :reminderGeo="quik.reminderGeo"
      :reminderTime="quik.reminderTime"
    />
  </div>
  <div class="justify-center">
    <Footer/>
  </div>

</template>

<script>
import { defineComponent } from 'vue'
import QuikShortItem from 'components/QuikShortItem'

export default defineComponent({
  name: 'Inbox',
  components: { QuikShortItem },
  data () {
    return {
      quiks: [
        {
          id: Date.now(),
          avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
          from: 'Some Person',
          recievers: ['Reviever1', 'Reviever2'],
          text: 'Lorem ipsum dolor sit... Lorem ipsum dolor sit... Lorem ipsum dolor sit...',
          reminderGeo: 'geodata',
          reminderTime: 'Timedata'
        }
      ]
    }
  }
  //TODO остановился на передаче пропсов из короткого квика на страницу инбокс
})

</script>

<template>
  <quik-short-item v-bind:quiks="quiks" />
  <main-action-button></main-action-button>
  <div class="justify-evenly">
    <Footer/>
  </div>

</template>

<script>
// eslint-disable-next-line
import { defineComponent } from 'vue'
import QuikShortItem from 'components/QuikShortItem'
import MainActionButton from 'components/MainActionButton'
import { useQuasar } from 'quasar'
// eslint-disable-next-line
import { onBeforeUnmount } from 'vue'

export default defineComponent({
  name: 'Inbox',
  components: { MainActionButton, QuikShortItem },
  setup () {
    const $q = useQuasar()
    let timer

    function finalize (reset) {
      timer = setTimeout(() => {
        reset()
      }, 1000)
    }

    onBeforeUnmount(() => {
      clearTimeout(timer)
    })

    return {
      onLeft ({ reset }) {
        $q.notify('Left action triggered. Resetting in 1 second.')
        finalize(reset)
      },

      onRight ({ reset }) {
        $q.notify('Right action triggered. Resetting in 1 second.')
        finalize(reset)
      }
    }
  },

  data () {
    return {
      quiks: [
        {
          id: 1,
          avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
          from: 'Some Person',
          recievers: [{ name: 'Receiver1' }, { name: 'Receiver2' }],
          text: 'Lorem ipsum dolor sit... Lorem ipsum dolor sit... Lorem ipsum dolor sit...',
          reminderGeo: 'geodata',
          reminderTime: 1630756400532
        },
        {
          id: 2,
          avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
          from: 'Some2 Person2',
          recievers: [{ name: 'Receiver1' }, { name: 'Receiver2' }],
          text: 'Lorem ipsum dolor sit... Lorem ipsum dolor sit... Lorem ipsum dolor sit...',
          reminderGeo: 'geodata',
          reminderTime: 1630757279405
        },
        {
          id: 3,
          avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
          from: 'Some2 Person2',
          recievers: [{ name: 'Receiver1' }, { name: 'Receiver2' }],
          text: 'Lorem ipsum dolor sit... Lorem ipsum dolor sit... Lorem ipsum dolor sit...',
          reminderGeo: 'geodata',
          reminderTime: 1630757279405
        },
        {
          id: 4,
          avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
          from: 'Some2 Person2',
          recievers: [{ name: 'Receiver1' }, { name: 'Receiver2' }],
          text: 'Lorem ipsum dolor sit... Lorem ipsum dolor sit... Lorem ipsum dolor sit...',
          reminderGeo: 'geodata',
          reminderTime: 1630757279405
        },
        {
          id: 5,
          avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
          from: 'Some2 Person2',
          recievers: [{ name: 'Receiver1' }, { name: 'Receiver2' }],
          text: 'Lorem ipsum dolor sit... Lorem ipsum dolor sit... Lorem ipsum dolor sit...',
          reminderGeo: 'geodata',
          reminderTime: 1630757279405
        },
        {
          id: 6,
          avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
          from: 'Some2 Person2',
          recievers: [{ name: 'Receiver1' }, { name: 'Receiver2' }],
          text: 'Lorem ipsum dolor sit... Lorem ipsum dolor sit... Lorem ipsum dolor sit...',
          reminderGeo: 'geodata',
          reminderTime: 1630757279405
        },
        {
          id: 7,
          avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
          from: 'Some2 Person2',
          recievers: [{ name: 'Receiver1' }, { name: 'Receiver2' }],
          text: 'Lorem ipsum dolor sit... Lorem ipsum dolor sit... Lorem ipsum dolor sit...',
          reminderGeo: 'geodata',
          reminderTime: 1630757279405
        }
      ]
    }
  }
})

</script>

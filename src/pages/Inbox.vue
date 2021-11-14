<template>
  <quik-short-item :quiks="quiks" />
  <main-action-button></main-action-button>
  <div class="justify-evenly">
    <Footer/>
  </div>

</template>

<script>
/* eslint-disable */
import db from 'src/boot/firebase'
import { onSnapshot, collection, query } from 'firebase/firestore'
import QuikShortItem from 'components/QuikShortItem'
import MainActionButton from 'components/MainActionButton'
import { onBeforeUnmount, onMounted, defineComponent, ref, toRefs} from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'Inbox',
  components: { MainActionButton, QuikShortItem },

  setup () {
    const $q = useQuasar()
    let timer = ref(null)
    let quiks = ref([
        // {
        //   id: 1,
        //   avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
        //   from: 'Some Person',
        //   recievers: [{ name: 'Receiver1' }, { name: 'Receiver2' }],
        //   text: 'Lorem ipsum dolor sit... Lorem ipsum dolor sit... Lorem ipsum dolor sit...',
        //   reminderGeo: 'geodata',
        //   reminderTime: 1630756400532
        // },
        // {
        //   id: 2,
        //   avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
        //   from: 'Some2 Person2',
        //   recievers: [{ name: 'Receiver1' }, { name: 'Receiver2' }],
        //   text: 'Lorem ipsum dolor sit... Lorem ipsum dolor sit... Lorem ipsum dolor sit...',
        //   reminderGeo: 'geodata',
        //   reminderTime: 1630757279405
        // },
        // {
        //   id: 3,
        //   avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
        //   from: 'Some2 Person2',
        //   recievers: [{ name: 'Receiver1' }, { name: 'Receiver2' }],
        //   text: 'Lorem ipsum dolor sit... Lorem ipsum dolor sit... Lorem ipsum dolor sit...',
        //   reminderGeo: 'geodata',
        //   reminderTime: 1630757279405
        // },
        // {
        //   id: 4,
        //   avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
        //   from: 'Some2 Person2',
        //   recievers: [{ name: 'Receiver1' }, { name: 'Receiver2' }],
        //   text: 'Lorem ipsum dolor sit... Lorem ipsum dolor sit... Lorem ipsum dolor sit...',
        //   reminderGeo: 'geodata',
        //   reminderTime: 1630757279405
        // },
        // {
        //   id: 5,
        //   avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
        //   from: 'Some2 Person2',
        //   recievers: [{ name: 'Receiver1' }, { name: 'Receiver2' }],
        //   text: 'Lorem ipsum dolor sit... Lorem ipsum dolor sit... Lorem ipsum dolor sit...',
        //   reminderGeo: 'geodata',
        //   reminderTime: 1630757279405
        // },
        // {
        //   id: 6,
        //   avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
        //   from: 'Some2 Person2',
        //   recievers: [{ name: 'Receiver1' }, { name: 'Receiver2' }],
        //   text: 'Lorem ipsum dolor sit... Lorem ipsum dolor sit... Lorem ipsum dolor sit...',
        //   reminderGeo: 'geodata',
        //   reminderTime: 1630757279405
        // },
        // {
        //   id: 7,
        //   avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
        //   from: 'Some2 Person2',
        //   recievers: [{ name: 'Receiver1' }, { name: 'Receiver2' }],
        //   text: 'Lorem ipsum dolor sit... Lorem ipsum dolor sit... Lorem ipsum dolor sit...',
        //   reminderGeo: 'geodata',
        //   reminderTime: 1630757279405
        // }
      ])

    function finalize (reset) {
      timer = setTimeout(() => {
        reset()
      }, 1000)
    }
    function onLeft ({ reset }) {
        $q.notify('Left action triggered. Resetting in 1 second.')
        finalize(reset)
      }

    function onRight ({ reset }) {
        $q.notify('Right action triggered. Resetting in 1 second.')
        finalize(reset)
      }

    onBeforeUnmount(() => {
      clearTimeout(timer)
    })

    onMounted(() => {
      const q = query(collection(db, 'quiks'))
      const unsubscribe = onSnapshot(q, snapshot => {
        snapshot.docChanges().forEach(change => {
          let quikChange = change.doc.data()
          if (change.type === 'added') {
            console.log('New entry: ', quikChange)
            quiks.value.unshift(quikChange)
            console.log('quiks ', quiks.value)
          }
          if (change.type === 'modified') {
            console.log('Modified entry: ', quikChange)
          }
          if (change.type === 'removed') {
            console.log('Removed entry: ', quikChange)
          }
        })
      })
    })

    return {
      onLeft,
      onRight,
      quiks,
    }



  },
})

</script>

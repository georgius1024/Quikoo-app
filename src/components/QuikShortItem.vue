<template>
  <q-card class="my-card" flat v-for="quik in quiks" :key="quik.id">
    <q-slide-item right-color="secondary"
                  left-color="primary"
                  @left="onLeft"
                  @right="onRight">
      <template v-slot:left>
        <div class="row items-center">
          <q-icon left name="done" /> Done
        </div>
      </template>
      <template v-slot:right>
        <div class="row items-center">
          Delete Qiuk <q-icon right name="delete" />
        </div>
      </template>

        <q-item to="/quikdetails">
          <q-item-section avatar class="col-2">
            <q-avatar>
              <img :src=quik.avatar>
            </q-avatar>
          </q-item-section>
          <q-item-section class="col">
            <q-item-label>{{quik.from}}</q-item-label>
            <q-item-label caption>
              To: {{ quik.recievers }}
            </q-item-label>
          </q-item-section>
          <q-item-section class="col-4" side top>
            <q-item-label align="right" caption>{{quik.reminderTime}}</q-item-label>
            <!--        <q-item-label align="right" caption>{{ dateFormatter }}</q-item-label> TODO запилить фильтрацию-->
          </q-item-section>
          <q-item-section class="col-1">
            <q-icon name="room" size="md" color="secondary" />
          </q-item-section>
        </q-item>
        <q-card-section align="left" class="col-8 q-pl-xl q-ml-lg q-pt-none q-pb-sm">
          <div class="text-body2 ">{{quik.text}}</div>
        </q-card-section>
    </q-slide-item>
    <q-separator />

  </q-card>
  <q-separator />
</template>

<script>
import { date, useQuasar } from 'quasar'
import { onBeforeUnmount } from 'vue'

export default {
  name: 'QuikShortItem',
  props: {
    quiks: {
      type: Array
    }
  },
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
    }
  },
  computed: {
    dateFormatter () {
      return date.formatDate(this.quiks.reminderTime, 'YYYY-MM-DDTHH')
    }
  }
}
</script>

<style scoped>

</style>

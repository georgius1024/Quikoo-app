<template>
  <div>
    <q-card flat >
      <q-card-section class="q-mx-sm">
        <q-field  :model-value="number" prefix="To:">
          <template v-slot:control>
            <div class="self-center full-width no-outline" tabindex="0">{{number}}</div>
          </template>

          <template v-slot:append>
            <q-btn
              flat
              outline
              round
              color="secondary"
              size="medium"
            >
              <q-icon name="add" />
            </q-btn>
          </template>
        </q-field>
      </q-card-section>
      <q-option-group class="q-ml-md"
                      :options="options"
                      type="radio"
                      v-model="group"
                      dense
      />
      <q-input class="q-ma-md"
               placeholder="Qiuk text"
               v-model="text"
               filled
               autogrow
               clearable
               color="primary"
               bg-color="white"
               outlined
      />
      <q-card-section class="q-mx-xs">
        <UploadImages/>
      </q-card-section>
      <q-card-section class="q-gutter-md row" >
        <q-btn flat rounded color="secondary" label="Set to time"
               @click="toggleDatePicker"/>
        <q-btn flat rounded color="secondary" label="Set to geo " />
      </q-card-section>
      <q-card-section class="q-ma-0 q-gutter-md row" v-show="setTimeQuikVisibility">

        <q-date v-model="model" mask="DD-MM-YYYY HH:mm" color="secondary" />
        <q-time v-model="model" mask="DD-MM-YYYY HH:mm" color="secondary" />
      </q-card-section>
      <q-card-section>
        <q-btn rounded color="secondary" label="Send quik" />
      </q-card-section>
    </q-card>

  </div>
</template>

<script>
import { ref } from 'vue'
import UploadImages from 'vue-upload-drop-images'

export default {
  name: 'CreateQuikPage',
  components: {
    UploadImages
  },

  setup () {
    const url = ref(null)

    return {
      setTimeQuikVisibility: true,
      model: ref('21-09-2021 21:21'),
      slide: ref(1),
      email: ref('john.doe'),
      number: ref(123),
      shape: ref('line'),
      group: ref(null),
      options: [
        { label: 'Quik to self', value: 'self' }
      ],
      text: ref(''),
      url,
      toggle () {
        url.value = url.value === null
          ? 'https://placeimg.com/500/300/nature?t=' + Math.random()
          : null
      }
    }
  },
  methods: {
    toggleDatePicker () {
      console.log('this.setTimeQuikVisibility==>', this.setTimeQuikVisibility)
      this.setTimeQuikVisibility = !this.setTimeQuikVisibility
    }
  }

}
</script>

<style scoped>

</style>

<template>
  <div>
    <q-card class="my-card" flat>
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Chuck Norris</q-item-label>
          <q-item-label caption>
            To: place contacts here
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-card-section horizontal>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        </q-card-section>
        <!--        <q-separator vertical />-->

        <!--        <q-card-section class="col-4">-->
        <!--          Lorem ipsum dolor sit amet, consectetur adipiscing elit.-->
        <!--        </q-card-section>-->
      </q-card-section>
    </q-card>
    <div>
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="white"
        navigation
        height="200px"
        class="bg-grey-1"
      >
        <q-carousel-slide :name="1" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/mountains.jpg" />
            <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg" />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/parallax2.jpg" />
            <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/quasar.jpg" />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/cat.jpg" />
            <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/linux-avatar.png" />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="4" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/material.png" />
            <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/donuts.png" />
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div>
      <q-field class="q-px-md" :model-value="text" bottom-slots label="Location" stack-label>
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>
      </q-field>
      <q-img class="rounded-borders col-12 full-height" src="https://cdn.quasar.dev/img/material.png" />
      <main-action-button>
      </main-action-button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import MainActionButton from 'components/MainActionButton'

export default {
  name: 'QuikPage',
  components: { MainActionButton },
  setup () {
    return {
      slide: ref(1)
    }
  }
}
</script>

<style scoped>

</style>

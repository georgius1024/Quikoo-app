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
          <!--          TODO: Прикрутить кнопку "Read more..."-->
        </q-card-section>
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
    <div >
      <q-field class="q-mx-md"  :model-value="text" bottom-slots label="Its better for you to do it before:" stack-label :dense="dense">
        <template v-slot:before>
          <q-icon name="schedule" />
        </template>

        <template v-slot:control>
          <div class="self-center full-width no-outline" tabindex="0">{{text}}</div>
        </template>
      </q-field>
      <q-field class="q-mx-md"  :model-value="text" bottom-slots label="Check out this place to deal with it" stack-label :dense="dense">
        <template v-slot:before>
          <q-icon name="near_me" />
        </template>

        <template v-slot:control>
          <div class="self-center full-width no-outline" tabindex="0">{{text}}</div>
        </template>
      </q-field>

      <q-img class="rounded-borders col-12 full-height" src="https://cdn.quasar.dev/img/material.png" />
      <q-list>
        <q-item v-for="contact in offline" :key="contact.id" class="q-mb-sm" clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img :src="`https://cdn.quasar.dev/img/${contact.avatar}`">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ contact.name }}</q-item-label>
            <q-item-label caption lines="3">{{ contact.email }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="chat_bubble" color="grey" />
          </q-item-section>
        </q-item>
      </q-list>
      <q-card-section class="show-more-comments">
        Show {n} more comments...
      </q-card-section>
      <div class="q-mt-sm">
        <q-input outlined v-model="text" :dense="dense">
          <template v-slot:prepend>
            <q-icon name="add_circle_outline" />
          </template>
          <template v-slot:append>
            <q-icon name="send" />
          </template>
        </q-input>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
// import MainActionButton from 'components/MainActionButton'
const offline = [{
  id: 5,
  name: 'Brunhilde Panswick',
  email: 'bpanswick4@csmonitor.com bpanswick4@csmonitor. combpanswick4@c bpanswick4@csmonitor.com bpanswick4@csmonitor. combpanswick4@c smonitor.com',
  avatar: 'avatar2.jpg'
}, {
  id: 6,
  name: 'Winfield Stapforth',
  email: 'wstapforth5@pcworld.com',
  avatar: 'avatar6.jpg'
}]
export default {
  name: 'QuikDetailedItem',
  setup () {
    return {
      slide: ref(1),
      offline,
      text: ref('12.12.2022 13:11'),
      dense: ref(false)
    }
  }
}
</script>

<style scoped>
.show-more-comments {
  padding: 0;
  margin-left: 72px;
  font-size: 10px;
  color: #ff0000;
}

</style>

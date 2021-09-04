<template>
  <q-card class="my-card" flat>
    <q-item>
      <q-item-section avatar class="col-2">
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
      </q-item-section>
      <q-item-section class="col">
        <q-item-label>Chuck Norris</q-item-label>
        <q-item-label caption>
          To: place contacts here
        </q-item-label>
      </q-item-section>
      <q-item-section class="col-4" side top>
        <q-item-label align="right" caption>Geolocation name Geolocation name</q-item-label>
      </q-item-section>
      <q-item-section class="col-1">
      <q-icon name="room" size="md" color="secondary" />
      </q-item-section>
    </q-item>
    <q-card-section align="left" class="col-8 q-pl-xl q-ml-lg q-pt-none q-pb-sm">
      <div class="text-body2 ">Lorem ipsum dolor sit... Lorem ipsum dolor sit... Lorem ipsum dolor sit...</div>
    </q-card-section>
  </q-card>
  <q-separator />
</template>

<script>
export default {
  name: 'QuikShortItem'
}
</script>

<style scoped>

</style>

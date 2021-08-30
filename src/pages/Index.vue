<template>
  <q-page class="flex flex-center">
    <img
      alt="Quikoo background"
      src="~assets/Images/Splashscreen/splashScreenBG.png"
      style="width: 100%; height: auto"
    >
    <img class="z-top"
      alt="Quikoo logo"
      src="~assets/Images/Splashscreen/slashScreenLogo.png"
      style="width: 150px; height: 150px"
    >
    <img class="z-top"
      alt="Quikoo logo"
      src="~assets/Images/Splashscreen/splashScreenBrand.png"
      style="width: 100%; height: 100%"
    >
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageIndex'
})
</script>

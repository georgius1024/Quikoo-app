<template>
  <q-page class="flex flex-center">
    <q-img
      absolute
      fit="fill"
      alt="Quikoo background"
      src="~assets/Images/Splashscreen/splashScreenBG.png"
      style="width: 100%; height: auto"
    />
    <div
      style="width: 150px; height: 150px; position: relative; z-index: 1">
      <q-img relative-position
             alt="Quikoo logo"
             src="~assets/Images/Splashscreen/slashScreenLogo.png"
      />
    </div>
    <div style="width: 100%; height: 100%; position: relative; z-index: 2">
      <q-img
        alt="Quikoo logo"
        src="~assets/Images/Splashscreen/splashScreenBrand.png"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageIndex'
})
</script>

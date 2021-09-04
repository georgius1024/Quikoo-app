<template>
  <div>
    <QuikDetailedItem/>
  </div>
  <div class="justify-center">
    <Footer/>
  </div>

</template>

<script>
import { defineComponent } from 'vue'
import QuikDetailedItem from 'components/QuikDetailedItem'

export default defineComponent({
  name: 'QuikPage',
  components: { QuikDetailedItem }
})
</script>

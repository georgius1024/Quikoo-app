<template>
  <div>
    <QuikPage/>
  </div>
  <div class="justify-center">
    <Footer/>
  </div>

</template>

<script>
import { defineComponent } from 'vue'
import QuikPage from 'components/QuikPage'

export default defineComponent({
  name: 'Inbox',
  components: { QuikPage }
})
</script>

<template>
  <div class="q-pa-md">
    <q-footer class="footer" >
        <q-tabs>
          <q-route-tab to="/Inbox"
                       label="Inbox"
                       name="home"
          ></q-route-tab>
          <q-separator color="white" dark vertical />
          <q-route-tab to="/Outbox"
                       label="Outbox"
                       name="outbox"
          ></q-route-tab>
          <q-separator color="white" dark vertical />
          <q-route-tab to="/Contacts"
                       label="Contacts"
                       name="contacts"
          ></q-route-tab>
        </q-tabs>
    </q-footer>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  color: deep-orange-12;
}
</style>

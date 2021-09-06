<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quikoo App
        </q-toolbar-title>

        <div>Quikoo v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Menu
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer/>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Profile',
    caption: 'quasar.dev',
    icon: 'record_voice_over',
    link: '#'
  },
  {
    title: 'Settings',
    caption: 'github.com/quasarframework',
    icon: 'settings',
    link: '#/settings'
  },
  {
    title: 'Support',
    caption: 'chat.quasar.dev',
    icon: 'support',
    link: '#'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: '#'
  },
  {
    title: 'My Quiks',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: '#'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: '#'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: '#'
  }
]

import { defineComponent, ref } from 'vue'
import Footer from 'components/Footer'

export default defineComponent({
  name: 'MainLayout',

  components: {
    Footer,
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      fabLeft: ref(true),
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

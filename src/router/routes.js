
const routes = [
  {
    history: true,
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/inbox', component: () => import('pages/Inbox.vue') },
      { path: '/outbox', component: () => import('pages/Outbox.vue') },
      { path: '/contacts', component: () => import('pages/Contacts.vue') },
      { path: '/settings', component: () => import('pages/Settings.vue') },
      { path: '/quikdetails', component: () => import('pages/QuikPage.vue') },
      { path: '/createquik', component: () => import('pages/CreateQuikPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt-alt/auth',
    '@pinia/nuxt',
  ],
  auth: {
    redirect: {
      login: '/auth/login',
      logout: '/auth/logout',
      home: '/',
      callback: '/auth/callback',
    },
    strategies: {
      discord: {
        clientId: '1064293073380712488',
        clientSecret: 'z0wkWiGJbblt_Bh_RPcWctgeshr9UDtt',
      },
    },
  },
});

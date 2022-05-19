<template>
  <HeaderPage/>
  <HomePage/>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue'
import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    HeaderPage,
    HomePage
  }
}
</script>

<style>
  body{
    @apply bg-gradient-to-t from-cyan-800 to-primary-color m-0 p-0 box-border text-white h-[100vh] overflow-y-hidden
  }
</style>
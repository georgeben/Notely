<template>
  <div id="app">
    <Navbar />
    <Notes v-bind:notes="notes" />
  </div>
</template>

<script>
import Notes from './components/Notes.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Notes,
    Navbar,
  },
  data(){
    return {
      name: "Notely",
      notes: [
        {
          id: 1,
          title: "George the Great",
          content: "This is a note to communicate my thoughts"
        },
        {
          id: 2,
          title: "Everything will be fine",
          content: "I want to go and fry plantain"
        },
        {
          id: 3,
          title: "Saturday morning",
          content: "This is a note to communicate my thoughts"
        },
        {
          id: 4,
          title: "My first step",
          content: "This is a note to communicate my thoughts"
        },
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

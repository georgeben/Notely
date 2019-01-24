<template>
  <div id="app">
    <Navbar />
    <Notes v-bind:notes="notes" />
    <AddNote />
  </div>
</template>

<script>
import Notes from './components/Notes.vue';
import Navbar from './components/Navbar.vue';
import AddNote from './components/AddNote.vue';
import axios from 'axios';

export default {
  name: 'app',
  components: {
    Notes,
    Navbar,
    AddNote,
  },
  data(){
    return {
      name: "Notely",
      notes: []
    }
  },
  methods: {

  },
  created(){
    axios.get('http://localhost:3000/api/notes')
    .then(res => {
      console.log("Data",res.data.data);
      this.notes = res.data.data;
    })
    .catch(err => console.log(err));
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

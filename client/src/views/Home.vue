<template>
  <div id="app">
    <Notes v-bind:notes="notes" v-bind:modify="false" />
  </div>
</template>

<script>
import Notes from '../components/Notes.vue';
import axios from 'axios';

export default {
  name: 'home',
  components: {
    Notes,
  },
  data(){
    return {
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

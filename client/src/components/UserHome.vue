<template>
    <div>
        <h1>Welcome {{user.name}}</h1>
        <button @click="signOut" class="btn btn-danger">Sign out</button>

        <Notes v-bind:notes="userNotes" v-bind:modify="true" v-on:delete-note="removeNoteFromList" />
    </div>
</template>

<script>
import axios from 'axios';
import Notes from './Notes.vue';

export default {
    name: 'UserHome',
    data(){
        return{
            user: JSON.parse(localStorage.getItem('user')),
            userNotes: [],
        }
    },
    methods: {
        signOut(){
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            this.$router.push('/')
        },
        removeNoteFromList(id){
            this.userNotes = this.userNotes.filter(note => note.id !== id);
        }
    },
    created(){
        axios.get(`http://localhost:3000/api/notes/user/${this.user.id}`)
        .then(res => {
            this.userNotes = res.data.data;
        })
        .catch(err => console.log(err));
    },
    components:{
        Notes,
    }
}
</script>

<style>

</style>



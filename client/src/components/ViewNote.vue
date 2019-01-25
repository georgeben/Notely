<template>
    <div class="note">
        <h5>{{note.title}}</h5>
        <p>{{note.content}}</p>
        <p>{{note.createdAt}}</p>
    </div>
</template>

<script>
import NoteItem from './NoteItem';
import axios from 'axios';

export default {
    name: 'viewnote',
    data(){
        return {
            note: '',
        }
    },
    created(){
        axios.get(`http://localhost:3000/api/notes/${this.$route.params.id}`)
        .then(res => {
            this.note = res.data.note;
        })
    }
}
</script>

<style>
.note{
    padding: 10px 5px;
    text-align: left;
    background-color: #fff;
    width: 65%;
    margin: auto;
    margin-top: 10px;
}

.note p{
    color: #888;
}
</style>



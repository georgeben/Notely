<template>
    <div class="note">
        <router-link :to="`/view/${note.id}`">{{note.title}}</router-link>
        <p>{{note.content}}</p>
        <div v-if="modify" >
            <button><router-link :to="`/edit/${note.id}`">Edit</router-link></button>
            <button @click="deleteNote" >Delete</button>
        </div>
        <p>{{note.createdAt}}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'NoteItem',
    props: ["note", "modify"],
    methods: {
        deleteNote(){
            axios.delete(`http://localhost:3000/api/notes/${this.note.id}`)
            .then(res => {
                this.$emit('delete-note', this.note.id);
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
}

</script>

<style scoped>
.note{
    padding: 10px 5px;
    border-bottom: 0.5px solid rgb(214, 215, 216);
    text-align: left;
}

.note p{
    color: #888;
}
</style>


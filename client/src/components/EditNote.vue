<template>
    <form @submit="saveNote">
        <div class="form-group">
            <label for="exampleFormControlInput1">Note Title</label>
            <input v-model="note.title" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter the title of your note">
        </div>
        <div class="form-group">
            <textarea v-model="note.content" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Type your note here"></textarea>
        </div>
        <div class="form-check">
            <input v-model="publish" type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Publish</label>
        </div>
        <button type="submit" class="btn btn-primary">Save note</button>
    </form>
</template>

<script>
import axios from 'axios';

export default {
    name: 'AddNote',
    data(){
        return {
            note: '',
            publish: true,
        }
    },
    methods: {
        saveNote(e){
            let token = localStorage.getItem('token');
            if(token == null){
                return this.$router.push('/signin')
            }
            e.preventDefault();
            axios.put(`http://localhost:3000/api/notes/${this.$route.params.id}`, {
                    title: this.note.title,
                    content: this.note.content
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': token,
                    }
                })
                .then(res => {
                    console.log(res);
                    this.$router.push('/home');
                })
                .catch(err => console.log(err))
        }
    },
    created(){
        axios.get(`http://localhost:3000/api/notes/${this.$route.params.id}`)
        .then(res => {
            console.log(res.data)
            this.note = res.data.note;
        })
    }
}
</script>

<style scoped>

</style>

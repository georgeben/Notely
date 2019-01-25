<template>
    <form @submit="saveNote">
        <div class="form-group">
            <label for="exampleFormControlInput1">Note Title</label>
            <input v-model="title" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter the title of your note">
        </div>
        <div class="form-group">
            <textarea v-model="content" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Type your note here"></textarea>
        </div>
        <div class="form-check">
            <input v-model="shared" type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Publish</label>
        </div>
        <button type="submit" class="btn btn-primary">Save note</button>
    </form>
</template>

<script>
import axios from 'axios';
const apiUrl = 'http://localhost:3000/api/notes';

export default {
    name: 'AddNote',
    data(){
        return {
            title: '',
            content: '',
            shared: true,
        }
    },
    methods: {
        saveNote(e){
            let token = localStorage.getItem('token');
            if(token == null){
                return this.$router.push('/signin')
            }
            e.preventDefault();
            console.log("Saving note")
            axios.post(apiUrl, {
                    title: this.title,
                    content: this.content,
                    shared: this.shared,
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
    }
}
</script>

<style scoped>

</style>

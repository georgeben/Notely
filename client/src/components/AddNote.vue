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
            <input v-model="publish" type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Publish</label>
        </div>
        <button type="submit" class="btn btn-primary">Save note</button>
    </form>
</template>

<script>
import axios from 'axios';
const apiUrl = 'http://localhost:3000/api/notes';
const sampleToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiRW1la2EgRXplIiwiZW1haWwiOiJlbW15QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJDhOSG4wSDRrZ0xWczA1YkxSa1VaVGVXL2k5VDl2YURkMFA4d3F5UUFaRHdQQkVCM0lOc3pLIiwiY3JlYXRlZEF0IjoiMjAxOS0wMS0yM1QyMDo1ODozMS44NDdaIiwidXBkYXRlZEF0IjoiMjAxOS0wMS0yM1QyMDo1ODozMS44NDdaIn0sImlhdCI6MTU0ODMyOTg0NCwiZXhwIjoxNTQ4MzczMDQ0fQ.37fcyVNnh5aK-8iF27NmH81ueOsARIxBbF6hdr7QB0Y'

export default {
    name: 'AddNote',
    data(){
        return {
            title: '',
            content: '',
            publish: true,
        }
    },
    methods: {
        saveNote(e){
            e.preventDefault();
            console.log("Saving note")
            axios.post(apiUrl, {
                    title: this.title,
                    content: this.content
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': sampleToken,
                    }
                })
                .then(res => {
                    console.log(res);
                })
                .catch(err => console.log(err))
        }
    }
}
</script>

<style scoped>

</style>

<template>
    <form @submit="saveNote">
        <h5>Create a new note</h5>
        <p class="error">{{error}}</p>
        <div class="form-group">
            <label for="exampleFormControlInput1">Note Title</label>
            <input v-model="title" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter the title of your note">
        </div>
        <div class="form-group">
            <textarea v-model="content" class="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="Type your note here"></textarea>
        </div>
        <div class="form-check">
            <input v-model="shared" type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Publish</label>
        </div>
        <button type="submit" class="btn">Save note</button>
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
            error:'',
        }
    },
    methods: {
        saveNote(e){
             e.preventDefault();
            if(this.title === '' || this.content === ''){
                this.error = 'Please fill all inputs';
                return;
            }
            this.error = '';
            let token = localStorage.getItem('token');
            if(token == null){
                return this.$router.push('/signin')
            }
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
                    this.$router.push('/home');
                })
                .catch(err => console.log(err))
        }
    }
}
</script>

<style scoped>
form{
    width: 55%;
    background-color: #fff;
    box-shadow: 1px 1px 3px #444;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    padding: 20px;
    text-align: left;
}

form h5{
    text-align: center;
}

.error{
    color: red;
    font-size: 0.9em;
}

form button.btn{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    background-color: #70CCA2;
    color: white;
}

@media(max-width: 768px){
    form{
        width: 80%;
    }
}
</style>

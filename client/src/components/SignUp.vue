<template>
    <form @submit="signInUser">
        <h5>Create an account Notely</h5>
        <div class="form-group">
            <label for="signUpName">Name</label>
            <input v-model="name" type="text" class="form-control" id="signUpName" aria-describedby="emailHelp" placeholder="Enter your full name">
        </div>
        <div class="form-group">
            <label for="signUpEmail">Email address</label>
            <input v-model="email" type="email" class="form-control" id="signUpEmail" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
            <label for="signUpPassword">Password</label>
            <input v-model="password" type="password" class="form-control" id="signUpPassword" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
</template>

<script>
import axios from 'axios';

export default {
    name: 'signup',
    data(){
        return {
            name:'',
            email:'',
            password:'',
        }
    },
    methods: {
        signInUser(e){
            e.preventDefault();
            if(this.name != '' && this.email != '' && this.password != ''){
                axios.post('http://localhost:3000/api/users/signup', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                })
                .then(res => {
                    localStorage.setItem('token',res.data.token);
                    localStorage.setItem('user', JSON.stringify(res.data.data))
                    if (localStorage.getItem('token') != null){
                        if(this.$route.params.nextUrl != null){
                            this.$router.push(this.$route.params.nextUrl)
                        }
                        else{
                            this.$router.push('/home')
                        }
                    }
                })
                .catch(err => console.log(err));
            }else{
                console.log("Invalid input")
            }
        }
    }
}
</script>

<style>

</style>



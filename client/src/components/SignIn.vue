<template>
    <form @submit="signInUser">
        <h5>Sign In to Notely</h5>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
</template>


<script>
import axios from 'axios'

export default {
    name: 'signin',
    data(){
        return{
            email: '',
            password:'',
        }
    },
    methods: {
        signInUser(e){
            e.preventDefault();
            if(this.email != '' && this.password != ''){
                axios.post('http://localhost:3000/api/users/signin', {
                    email: this.email,
                    password: this.password,
                })
                .then(res => {
                    localStorage.setItem('token',res.data.token);
                    localStorage.setItem('user', JSON.stringify(res.data.user));
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

<style scoped>
form{
    text-align: left;
}

form h5{
    text-align: center;
}
</style>


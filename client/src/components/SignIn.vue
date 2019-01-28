<template>
    <form @submit="signInUser">
        <h5>Sign In to Notely</h5>
        <p class="error">{{error}}</p>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <button type="submit" class="btn">Sign in</button>
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
            error: '',
        }
    },
    methods: {
        signInUser(e){
            e.preventDefault();
            if(this.email !== '' && this.password !== ''){
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
                // alert("Please fill all inputs")
                this.error = 'Please fill all inputs';
                console.log("Invalid input")
            }
        }
    }
}
</script>

<style scoped>
form{
    width: 40%;
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

form button.btn{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    background-color: #70CCA2;
    color: white;
}

.error{
    color: red;
    font-size: 0.9em;
}

@media(max-width: 768px){
    form{
        width: 80%;
    }
}
</style>


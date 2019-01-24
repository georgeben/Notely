<template>
    <div>
        <h1>Ths is your dashboard</h1>
        <button @click="signOut" class="btn btn-danger">Sign out</button>
    </div>
</template>

<script>
export default {
    name: 'UserHome',
    data(){
        return{

        }
    },
    methods: {
        signOut(){
            localStorage.removeItem('token');
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>



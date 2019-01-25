
<template>
    <nav class="navbar navbar-expand-md navbar-light ">
        <router-link to="/" class="navbar-brand">Notely</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/signup" class="nav-link">Sign Up</router-link>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/signin">Log in</a>
            </li>
            <li class="nav-item">
                <router-link to="/addnote" class="nav-link">New note</router-link>
            </li>
        </ul>
        
    </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
nav.navbar{
    background-color: #70CCA2;
    color: white;
}

.search-btn{
    background-color: #70CCA2;
    border: 1px solid #fff;
    color: #fff;
}
</style>


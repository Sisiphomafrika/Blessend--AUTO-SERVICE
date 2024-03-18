<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/products">Products</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/admin">Admin</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact">Contact us</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/login">Login</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    components: {

    }
}
</script>

<style scoped>
 *,
::before,
::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Times New Roman', Times, serif;
    
}
    .navbar-nav li {
        margin-inline: .2rem;
    }

    
    
    .navbar {
        background-color: #1d1d1e;
        color: #333; 
    }

    .navbar-toggler-icon {
        background-color: #333; 
    }

    .nav-link {
        color: #333; 
    }

    .nav-link:hover {
        color: #555555; 
    }
</style>

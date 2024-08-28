<template>
      <header>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <nuxt-link class="navbar-brand logo-container" to="/">
                       <img src="/designo-logo.png" alt="Designo Logo" class="mall-logo">
                    </nuxt-link>
                    <button 
                        class="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNavDropdown" 
                        aria-controls="navbarNavDropdown" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto">
                        <li class="nav-item active">
                            <nuxt-link class="nav-link" to="/our-company">Our Company</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/location">Locations</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/contact">Contact</nuxt-link>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
</template>
<script setup>
    onMounted(() => {
    try {
        const collapse = new $bs.Collapse('#navbarSupportedContent');
        collapse.show()
    }catch (e) {
        console.log('Bootstrap error: ', e)
    }
    });
</script>
<style scoped lang="scss">
    .navbar{
        padding: 50px 0 50px 0;
    }
    .mall-logo {
        max-width: 200px;
    }
    .nav-item {
        font-family: "Jost", sans-serif;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 0.1em;
    }
    .nav-item:hover {
        text-decoration: underline;
        text-decoration-thickness: 1px;
    }
</style>
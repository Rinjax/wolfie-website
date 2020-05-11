<template>
    <v-app class="main-bg">
        <Header></Header>
        <v-content>
            <h1 class="">hellow</h1>
        </v-content>
        <Footer></Footer>
    </v-app>
</template>

<script>
    export default {
        name: "MainVue"
    }
</script>

<style scoped>
    .main-bg {
        background-image: url('/website/img/main_bg.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
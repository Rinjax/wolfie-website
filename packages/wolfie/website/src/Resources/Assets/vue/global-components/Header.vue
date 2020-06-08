<template>

    <v-app-bar
            app
            color="teal"
            dark
    >
        <v-toolbar-title>JTWolfie ART</v-toolbar-title>
        <v-spacer></v-spacer>

        <shopping-cart></shopping-cart>

    </v-app-bar>
</template>

<script>
    import ShoppingCart from "../main/components/ShoppingCart";

    export default {
        name: "Header",
        components: {
            ShoppingCart
        }

    }
</script>

<style scoped>

</style>
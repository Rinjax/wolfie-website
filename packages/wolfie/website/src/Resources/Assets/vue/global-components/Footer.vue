<template>
    <v-footer
            dark
            padless
            absolute
    >
        <v-card
                class="flex"
                tile
        >
            <v-card-text class="teal text-center">
                Art from the imagination of a 10yr old!
            </v-card-text>

            <v-card-text class="py-2 teal darken-3 white--text text-center">
                Copyright @{{ new Date().getFullYear() }}, JTWolfie ART All Rights Reserved
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

</style>
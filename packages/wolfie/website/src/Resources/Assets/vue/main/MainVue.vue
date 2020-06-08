<template>
    <v-app class="main-bg">
        <Header></Header>
        <v-content>
            <v-container>
                <products-list></products-list>
            </v-container>

        </v-content>
        <Footer></Footer>

        <v-snackbar
                v-model="snackbar"
                :timeout="4000"
                :color="snackbarColor"
                bottom
                right
        >
            {{ snackbarText }}
            <v-btn
                    text
                    @click="snackbar = false"
            >
                Close
            </v-btn>
        </v-snackbar>

    </v-app>
</template>

<script>
    import Products from './components/Products';

    export default {
        name: "MainVue",
        components:{
            'products-list': Products
        },

        computed: {
            snackbar: {
                get(){
                    return this.$store.getters['snackbar/snackbar'].show
                },

                set(val){
                    this.$store.dispatch('snackbar/setShowSnackbar',val);
                }
            },

            snackbarText() {
                return this.$store.getters['snackbar/snackbar'].message;
            },

            snackbarColor() {
                return this.$store.getters['snackbar/snackbar'].color;
            }
        },

        created() {
            this.$store.dispatch('products/getProductsList');
        }
    }
</script>

<style scoped>
    .main-bg {
        background-image: url('/website/img/assets/main_bg.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
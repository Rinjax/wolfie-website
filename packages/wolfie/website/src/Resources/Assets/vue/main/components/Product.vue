<template>
    <v-card
            class="mx-auto"
            max-width="344"
    >
        <v-img
                :src="productImgUrl"
                height="200px"
        ></v-img>

        <v-card-title>{{product.name}}</v-card-title>

        <v-card-subtitle>
            £{{product.price.digital.price}}
        </v-card-subtitle>

        <v-card-actions>
            <v-btn text @click="addToCart(product.id, 'digital')">Buy</v-btn>
            <v-btn
                    color="purple"
                    text
            >
                View
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "Product",
        props: ['product'],

        methods: {
            addToCart(id, priceKey){
                this.$store.dispatch('cart/addToCart', {id:id, priceKey:priceKey})
            }
        },

        computed: {
            productImgUrl(){
                return this.$store.getters['products/productImgUrl'](this.product.id);
            }
        }
    }
</script>

<style scoped>

</style>
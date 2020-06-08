<template>
    <div>
        <product v-for="(product, i) in productList"
                 :key="product.id"
                 :product="product"
        ></product>
    </div>

</template>

<script>
    import Product from './Product'
    export default {
        name: "Products",
        components:{
            'product': Product
        },

        computed: {
            productList() {
                return this.$store.state.products.products;
            }
        }
    }
</script>

<style scoped>

</style>
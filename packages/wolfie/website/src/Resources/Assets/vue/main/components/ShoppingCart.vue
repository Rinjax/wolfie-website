<template>
    <v-menu
            v-model="menu"
            open-on-hover
            close-delay="650"
            :close-on-content-click="false"
            :nudge-width="200"
            offset-y
            transition="scale-transition"
            origin="right top"
    >
        <template v-slot:activator="{ on }">
            <v-btn icon large class="mr-3" v-on="on">
                <v-badge
                        :value="!cartEmpty"
                        color="red"
                        :content="numCartItems"
                        :overlap="true"
                >
                    <v-icon>mdi-cart</v-icon>
                </v-badge>
            </v-btn>
        </template>

        <v-card width="400">

            <v-card-title>Shopping Cart</v-card-title>
            <v-divider></v-divider>

            <v-list>
                <v-list-item two-line v-for="(product, index) in cart" :key="index">
                    <v-list-item-avatar>
                        <v-img :src="img(product.id)"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>{{product.name}}</v-list-item-title>
                        <v-list-item-subtitle>{{product.price}}</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                        <v-btn icon
                               small
                               color="red darken-1"
                               @click="remove(index)"
                        >
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </v-list-item-action>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-card-text class="text-right">
                <h3>Cart Total</h3>
                <h4>£{{cartTotal}}</h4>
            </v-card-text>


            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn text @click="menu = false">Close</v-btn>
                <v-btn color="success" text @click="checkout">Checkout</v-btn>

            </v-card-actions>
        </v-card>
    </v-menu>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ShoppingCart",

        data: () => ({
            menu: false,
        }),
        computed: {
            ...mapGetters('cart', ['cartEmpty', 'numCartItems', 'cart', 'cartTotal'])
        },

        methods: {
            remove(index) {
                this.$store.dispatch('cart/removeFromCart', index)
            },

            img(id) {
                return this.$store.getters['products/productImgUrl'](id);
            },

            checkout () {
                this.$store.dispatch('checkout/checkout')
            }
        }
    }
</script>

<style scoped>

</style>
export default {
    namespaced: true,
    state: {
        cart:[]
    },

    getters: {
        cartTotal: state => {
            let price = 0.00;
            state.cart.forEach(i => {price += i.price});
            return price.toFixed(2);
        },
        cartEmpty: state => state.cart.length === 0,

        numCartItems: state => state.cart.length,

        cart: state => state.cart,

        checkoutCart: state => {
            let cart = [];

            state.cart.forEach(item => {
                cart.push({
                    price: item.sku,
                    quantity: item.qty
                })
            });

            return cart;
        }
    },

    actions: {
        addToCart(context, payload){
            context.dispatch('products/getSpecificProduct', payload, {root:true}).then(r => {
                context.commit('addProduct', r);
            }).then(() => {
                context.dispatch('snackbar/setSuccess','added to cart',{root:true});
            }).catch(e => {
                console.log(e);
            });
        },

        removeFromCart(context, index) {
            context.commit('removeProduct', index);
            context.dispatch('snackbar/setWarn','removed from cart',{root:true});
        },

        clearCart(context) {
            context.commit('clearCart');
        }
    },

    mutations: {
        addProduct: (state, payload) => {
          state.cart.unshift(payload);
        },

        removeProduct: (state, index) => {
            state.cart.splice(index, 1);
        },

        clearCart: (state) => {
            state.cart = [];
        }
    }
}
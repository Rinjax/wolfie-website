export default {
    namespaced: true,
    state: {
        products: []
    },

    getters: {
        //list: (state) => {return state.products}
        productImgUrl: state =>  index => '/website/img/products/' + index + '.jpg'
    },

    actions: {
        getProductsList(context) {
            axios.get('/products/get-products').then(r => {
                console.log(r.data);
                context.commit('setProducts', r.data);
            });
        },

        getSpecificProduct(context, payload){
            let product = context.state.products.find(i => i.id === payload.id);
            return {
                id: product.id,
                name: product.name,
                priceKey: payload.priceKey,
                price: product.price[payload.priceKey].price,
                sku: product.price[payload.priceKey].sku,
                qty: 1
            };

        },
    },

    mutations: {
        setProducts: (state, payload) => {
            console.log('payload', payload);
            //Vue.set(state, 'products', [...payload]);
            state.products = payload;

            console.log(state);
        }
    }
}
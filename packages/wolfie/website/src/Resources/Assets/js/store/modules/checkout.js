export default {
    namespaced: true,

    state: {
        sessionId: null
    },

    getters: {

    },

    actions: {
        getStripeSessionId(context) {
            return new Promise((resolve, reject) => {
                axios.post('/stripe/create-session',
                    {
                        cart: context.rootGetters['cart/checkoutCart']
                    }).then(r => {
                    if (r.data.success){
                        resolve(r.data.id);
                    } else {
                        reject(r.data.message);
                    }
                }).catch(e => {
                    reject(e);
                });
            })

        },

        redirectToCheckout (context, id) {
            console.log(stripe);
            stripe.redirectToCheckout({
                sessionId: id
            });
        },

        checkout(context) {
            context.dispatch('getStripeSessionId').then((r) => {
                console.log('ok', r);
                context.dispatch('redirectToCheckout', r);
            });
        }
    },

    mutations: {
        setSessionId: (state, payload) => {
            state.sessionId = payload;
        }
    }
}
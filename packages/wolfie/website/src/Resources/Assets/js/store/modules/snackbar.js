export default {
    namespaced: true,
    state: {
        show: false,
        message: null,
        color: null
    },

    getters: {
        snackbar: (state) => {return state}
    },

    actions: {
        setSuccess: (context, message) => {
            context.commit('setMessage', message);
            context.commit('setColor', 'success');
            context.commit('setShow', true);
        },

        setWarn: (context, message) => {
            context.commit('setMessage', message);
            context.commit('setColor', 'warning');
            context.commit('setShow', true);
        },

        setFailure: (context, message) => {
            context.commit('setMessage', message);
            context.commit('setColor', 'error darken-2');
            context.commit('setShow', true);
        },

        setShowSnackbar: (context, bool) => { context.commit('setShow', bool)}
    },

    mutations: {
        setShow: (state, bool) => {
            state.show = bool;
        },
        setMessage: (state, string) => {
            state.message = string;
        },
        setColor: (state, color) => {
            state.color = color;
        }

    }
}
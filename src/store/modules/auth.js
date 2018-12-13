import api from '../../api/imgur';
import qs from 'qs';

const state = {
    token: window.localStorage.getItem('imgur_token')
    //Checking the localStorage
};

const getters = {

    isLoggedIn: (state) => !!state.token
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

const actions = {
    //we use the commit function to call a mutation!

    logout: ({ commit }) => {
        commit('setToken', null);
    },

    login: () => {
        api.login();
    },

    finalizeLogin: ({ commit }, hash) => {

        const query = qs.parse(hash.replace('#', ''));

        commit('setToken', query.access_token);

        window.localStorage.setItem('imgur_token', query.access_token);
        //Persisting the login data with localStorage (browser native resource)
    }
};

export default {
    state,      //Equals state: state
    getters,    //getters: getters
    mutations,
    actions
};
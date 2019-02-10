import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';

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
        window.localStorage.removeItem('imgur_token');
    },

    login: () => {
        api.login();
    },

    finalizeLogin: ({ commit }, hash) => {

        const query = qs.parse(hash.replace('#', ''));

        commit('setToken', query.access_token);

        window.localStorage.setItem('imgur_token', query.access_token);

        router.push('/');
    }
};

export default {
    state,      //Equals state: state
    getters,    //getters: getters
    mutations,
    actions
};
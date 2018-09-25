import api from '../../api/imgur';
    // API helper

const state = {
    token: null
};

const getters = {

    //state here is a param, not the const above

    isLoggedIn: (state) => !!state.token
                //returns a boolean value
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

const actions = {
    //we use the commit function to call a mutation!
    
    logout: ({ commit }) => {
        //in commit(), we pass the mutation name as first param, an the value in the second param

        commit('setToken', null);
    },
    
    login: () => {
        api.login();
    }
};
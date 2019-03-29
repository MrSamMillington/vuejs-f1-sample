import Vue from "vue"
import Vuex from "vuex";

import standings from "./standings.module"

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        standings
    },
    strict: true
})
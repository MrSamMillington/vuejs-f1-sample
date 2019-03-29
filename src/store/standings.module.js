import { FETCH_STANDINGS } from "./actions.type";
import{ SET_STANDINGS } from "./mutations.type";
import axios from 'axios'

const state = {
    standings: []
}

const getters = {
    standings(state){
        return state.standings;
    }
}

const actions = {
    [FETCH_STANDINGS](context){
        axios
          .get('http://ergast.com/api/f1/2019/driverStandings.json')
          .then(response => {
              context.commit(SET_STANDINGS,response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
            })
    }
}

const mutations = {
    [SET_STANDINGS](state, standings){
        state.standings = standings;
    }
}

export default{
    state,
    actions,
    getters,
    mutations,
    
}

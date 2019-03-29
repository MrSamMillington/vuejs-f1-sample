
<template>
  <main-layout>
    <p>Dash</p>
    <div class="container">
        <driver-panel v-for="standing in standings" 
          v-bind:key="standing.Driver.driverId" 
          v-bind:name="standing.Driver.familyName" 
          v-bind:position="parseInt(standing.position)"
          v-bind:points="parseInt(standing.points)"
          class="d-panel" ></driver-panel>
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import DriverPanel from '../components/DriverPanel.vue'
  
  import store from '../store'
  import {SET_STANDINGS} from '../store/mutations.type'
import { FETCH_STANDINGS } from '../store/actions.type';

  export default {
    data() {
        return {
          
        }
    },
    components: {
      MainLayout,
      DriverPanel
    },
    computed:  {
      standings(){
        return store.getters.standings;
      }
    },
    mounted(){
        if(store.getters.standings.length === 0){
          this.$store.dispatch(FETCH_STANDINGS)  
        console.log('loading')
        
        }
        
    }
  }
</script>

<style scoped>

  .d-panel{
      margin-bottom: 10px;
  }

</style>

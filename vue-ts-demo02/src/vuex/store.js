import { createStore } from 'vuex';
import modulesA from './modulesA';
const store = createStore({
  modules: {
    modulesA
  }
})

export default store
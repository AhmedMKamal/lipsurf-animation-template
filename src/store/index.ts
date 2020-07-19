import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export enum RouterDirection {
  Forward = 'FORWARD',
  Backward = 'BACKWARD'
}

export interface StoreState {
  routerDirection: RouterDirection;
}

export default new Vuex.Store<StoreState>({
  state: {
    routerDirection: RouterDirection.Forward
  },
  mutations: {
    setRouterDirection (state, direction: RouterDirection): void {
      state.routerDirection = direction
    }
  },
  actions: {},
  modules: {}
})

export default {
  state: {
    loginUser: {
      nickname: 'eom',
      loginId: 'umjugnki',
      token: 'goodman'
    }
  },
  getters: {
    getLoginUser (state) {
      return state.loginUser
    }
  },
  mutations: {
    updateLoginUser (state, payload) {
      this.state.loginUser = payload
    }
  },
  actions: {

  }
}

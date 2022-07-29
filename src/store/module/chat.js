export default {
  state: {
    selectedUuid: 0
  },
  getters: {
    getSelectedRoomId (state) {
      return state.selectedUuid
    }
  },
  mutations: {
    selectedRoom (state, payload) {
      this.state.selectedUuid = payload
    }
  },
  actions: {

  }
}

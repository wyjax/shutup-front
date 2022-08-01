export default {
  state: {
    selectedUuid: ''
  },
  getters: {
    getSelectedRoomId (state) {
      return state.selectedUuid
    }
  },
  mutations: {
    selectedRoom (state, uuid) {
      this.state.selectedUuid = uuid
    }
  },
  actions: {

  }
}

export default {
  showKeyBoard: ({ commit }) => {
    commit('showKeyBoard')
  },
  hideKeyBoard: ({ commit }) => {
    commit('hideKeyBoard')
  },
  addPayPasswore: ({ commit }, num) => {
    commit('pushPayPassword', num)
  },
  delPayPassword: ({ commit }, del) => {
    commit('delPayPassword', del)
  }
}
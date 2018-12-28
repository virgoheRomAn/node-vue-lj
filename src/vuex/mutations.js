export default {
  showKeyBoard(state) {
    state.keyBoardShow = true;
  },
  hideKeyBoard(state) {
    state.keyBoardShow = false;
  },
  pushPayPassword(state, num) {
    state.payPassword.push(num);
  },
  delPayPassword(state, payload) {
    state.payPassword.splice(payload.index, payload.number);
  }
}
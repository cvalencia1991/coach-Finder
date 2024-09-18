export default {
  coaches(state) {
    return state.coaches;
  },
  hashCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  }
};

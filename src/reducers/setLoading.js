export default (state = true, action) => {
  switch (action.type) {
    case 'LOADING':
      return action.payload;
    default:
      return state;
  }
};

const initState = {
  nightMode: false
};

export default (
  state = localStorage.getItem('nightMode') !== 'false',
  action
) => {
  switch (action.type) {
    case 'TOGGLE_NIGHT_MODE':
      return !state;
    default:
      return state;
  }
};

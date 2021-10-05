import ACTION from '../actions/region_action';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  if (state === undefined) {
    return {};
  }
  switch (action.type) {
    case ACTION.SET_REGION:
      return { ...state, region: [...action.region] };
    case ACTION.DELETE_REGION:
      return {};
    default:
      return { ...state };
  }
};

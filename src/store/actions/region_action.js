// eslint-disable-next-line import/no-anonymous-default-export
export default {
  SET_REGION: 'SET_REGION',
  DELETE_REGION: 'DELETE_REGION',

  SET_REGION__ACTION_FUNC: (payload) => ({ type: 'SET_REGION', ...payload }),
  DELETE_REGION__ACTION_FUNC: (payload) => ({ type: 'DELETE_REGION', ...payload }),
};

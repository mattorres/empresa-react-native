import { Types } from './types';

const initialState = {
  loading: false,
  user: null,
  error: null,
};

export default function sign(state = initialState, action) {
  switch (action.type) {
    case Types.REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case Types.SUCCESS:
      return { ...state, user: action.payload.user, loading: false };
    case Types.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

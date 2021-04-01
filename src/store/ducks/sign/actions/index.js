import { Types } from '../types';

export const Creators = {
  signRequest: (email, password) => ({
    type: Types.REQUEST,
    payload: { email, password },
  }),

  signSuccess: (user) => ({
    type: Types.SUCCESS,
    payload: {
      user,
    },
  }),

  signError: (error) => ({
    type: Types.FAILURE,
    payload: {
      error,
    },
  }),
};

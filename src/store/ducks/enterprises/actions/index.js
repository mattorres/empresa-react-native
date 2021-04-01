import { Types } from '../types';

export const Creators = {
  enterprisesRequest: () => ({
    type: Types.ENTERPRISES_REQUEST,
  }),

  enterprisesSuccess: (enterprises, enterpriseTypes) => ({
    type: Types.ENTERPRISES_SUCCESS,
    payload: {
      enterprises,
      enterpriseTypes,
    },
  }),

  enterprisesError: (error) => ({
    type: Types.ENTERPRISES_FAILURE,
    payload: {
      error,
    },
  }),

  filterEnterpriseRequest: (id, name) => ({
    type: Types.ENTERPRISE_FILTER_REQUEST,
    payload: {
      id,
      name,
    },
  }),

  filterEnterpriseSuccess: (enterprises) => ({
    type: Types.ENTERPRISE_FILTER_SUCCESS,
    payload: {
      enterprises,
    },
  }),

  filterEnterpriseFailure: (error) => ({
    type: Types.ENTERPRISE_FILTER_FAILURE,
    payload: {
      error,
    },
  }),

  enterpriseDetailRequest: (id) => ({
    type: Types.ENTERPRISE_DETAIL_REQUEST,
    payload: {
      id,
    },
  }),

  enterpriseDetailSuccess: (enterprise) => ({
    type: Types.ENTERPRISE_DETAIL_SUCCESS,
    payload: {
      enterprise,
    },
  }),

  enterpriseDetailFailure: (error) => ({
    type: Types.ENTERPRISE_DETAIL_FAILURE,
    payload: {
      error,
    },
  }),
};

import { Types } from './types';

const initialState = {
  loading: false,
  enterprises: [],
  error: null,
  enterpriseTypes: [],
  enterprise: null,
};

export default function enterprises(state = initialState, action) {
  switch (action.type) {
    case Types.ENTERPRISES_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
        enterprise: null,
      };
    }

    case Types.ENTERPRISES_SUCCESS: {
      return {
        ...state,
        enterprises: action.payload.enterprises,
        enterpriseTypes: action.payload.enterpriseTypes,
        loading: false,
        enterprise: null,
      };
    }

    case Types.ENTERPRISES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        enterprise: null,
      };

    case Types.ENTERPRISE_FILTER_REQUEST:
      return {
        ...state,
        loading: true,
        enterprise: null,
      };

    case Types.ENTERPRISE_FILTER_SUCCESS:
      return {
        ...state,
        loading: false,
        enterprises: action.payload.enterprises,
        enterprise: null,
      };

    case Types.ENTERPRISE_FILTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        enterprise: null,
      };

    case Types.ENTERPRISE_DETAIL_SUCCESS:
      return {
        ...state,
        error: null,
        enterprise: action.payload.enterprise,
      };

    case Types.ENTERPRISE_DETAIL_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };

    default:
      return state;
  }
}

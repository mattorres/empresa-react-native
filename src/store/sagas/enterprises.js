import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { Creators as EnterprisesActions } from '../ducks/enterprises/actions';

import { navigate } from '../../services/navigation';

export function* enterprisesRequest() {
  try {
    const { data } = yield call(api.get, `enterprises`);

    const duplicates = [];

    data.enterprises.forEach((interprise) => {
      duplicates.push(interprise.enterprise_type);
    });

    const enterpriseTypes = duplicates.filter(
      (elem, index) =>
        duplicates.findIndex((obj) => obj.id === elem.id) === index
    );

    yield put(
      EnterprisesActions.enterprisesSuccess(data.enterprises, enterpriseTypes)
    );
  } catch (error) {
    yield put(
      EnterprisesActions.enterprisesError(error.response.data.errors[0])
    );
  }
}

export function* filterEnterpriseRequest(action) {
  try {
    const { data } = yield call(
      api.get,
      `enterprises?enterprise_types=${action.payload.id}&name=${action.payload.name}`
    );
    yield put(EnterprisesActions.filterEnterpriseSuccess(data.enterprises));
  } catch (error) {
    yield put(
      EnterprisesActions.filterEnterpriseFailure(error.response.data.errors[0])
    );
  }
}

export function* enterpriseDetailRequest(action) {
  try {
    const { data } = yield call(api.get, `enterprises/${action.payload.id}`);
    yield put(EnterprisesActions.enterpriseDetailSuccess(data.enterprise));
    navigate('EnterpriseDetail');
  } catch (error) {
    yield put(
      EnterprisesActions.enterpriseDetailFailure(error.response.data.errors[0])
    );
  }
}

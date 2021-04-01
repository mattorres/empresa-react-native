import { all, takeLatest } from 'redux-saga/effects';
import { Types as SignTypes } from '../ducks/sign/types';
import { Types as EnterprisesTypes } from '../ducks/enterprises/types';

import { signRequest } from './sign';
import * as EnterpriseSagas from './enterprises';

export default function* rootSaga() {
  return yield all([
    takeLatest(SignTypes.REQUEST, signRequest),
    takeLatest(
      EnterprisesTypes.ENTERPRISES_REQUEST,
      EnterpriseSagas.enterprisesRequest
    ),
    takeLatest(
      EnterprisesTypes.ENTERPRISE_FILTER_REQUEST,
      EnterpriseSagas.filterEnterpriseRequest
    ),
    takeLatest(
      EnterprisesTypes.ENTERPRISE_DETAIL_REQUEST,
      EnterpriseSagas.enterpriseDetailRequest
    ),
  ]);
}

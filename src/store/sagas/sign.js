import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { setItems } from '../../common/storage';
import { Creators as SignActions } from '../ducks/sign/actions';
import * as Navigation from '../../services/navigation';

export function* signRequest(action) {
  try {
    const reponse = yield call(api.post, 'users/auth/sign_in', action.payload);
    const { headers } = reponse;
    const { client, uid } = headers;
    const token = headers['access-token'];
    yield setItems(token, client, uid);
    yield put(SignActions.signSuccess(reponse.data));
    Navigation.navigate('Enterprises');
  } catch (error) {
    yield put(SignActions.signError(error.response.data.errors[0]));
  }
}

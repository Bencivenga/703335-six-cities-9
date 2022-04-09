import request from 'axios';
import {ErrorType} from '../types/error';
import {HTTPCode} from '../const';
import {toast} from 'react-toastify';
import {store} from '../store';
import {redirectAction} from '../store/actions';
import {AppRoute} from '../const';

export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const {response} = error;

  if (response) {
    switch (response.status) {
      case HTTPCode.BadRequest:
        toast.info(response.data.error);
        break;
      case HTTPCode.Unauthorized:
        toast.info(response.data.error);
        break;
      case HTTPCode.NotFound:
        toast.info(response.data.error);
        store.dispatch(redirectAction(AppRoute.NotFound));
        break;
    }
  }
};

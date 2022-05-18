import { User } from '../../types/User';

export interface ApplicationProviderAction {
  type: string;
  payload?: unknown;
}

export type SetApplicationContentPayload = {
  key: string;
  value: unknown;
};

export const actionTypes = {
  SetApplicationLoggedInUser: 'Application/SetApplicationLoggedInUser',
  SetApplicationLogoutUser: 'Application/SetApplicationLogoutUser',
  SetApplicationContent: 'Application/SetApplicationContent',
  SetApplicationLoadState: 'Application/SetApplicationLoadState'
};

export const setApplicationLoadState = (payload: boolean) => {
  return {
    type: actionTypes.SetApplicationLoadState,
    payload
  };
};

export const setApplicationLoggedInUser = (payload: User) => {
  return {
    type: actionTypes.SetApplicationLoggedInUser,
    payload
  };
};

export const setApplicationLogoutUser = () => {
  return {
    type: actionTypes.SetApplicationLogoutUser
  };
};

export const setApplicationContent = (payload: SetApplicationContentPayload) => {
  return {
    type: actionTypes.SetApplicationContent,
    payload
  };
};

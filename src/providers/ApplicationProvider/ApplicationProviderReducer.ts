import { ApplicationProviderState } from './ApplicationProviderState';
import { ApplicationProviderAction, actionTypes, SetApplicationContentPayload } from './ApplicationProviderActions';
import { User } from '../../types/User';

export const reducer = (
  state: ApplicationProviderState,
  action: ApplicationProviderAction
): ApplicationProviderState => {
  switch(action.type) {
    case actionTypes.SetApplicationLoadState:
      return {
        ...state,
        isLoading: action.payload as boolean
      } as const;

    case actionTypes.SetApplicationLoggedInUser:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload as User
      } as const;

    case actionTypes.SetApplicationLogoutUser:
      return {
        ...state,
        isLoggedIn: false,
        user: {
          name: undefined,
          email: undefined,
          avatar: undefined
        }
      } as const;

    case actionTypes.SetApplicationContent:
      return {
        ...state,
        content: {
          [(action.payload as SetApplicationContentPayload).key]: (action.payload as SetApplicationContentPayload).value
        }
      } as const;

    default:
      return state;
  }
};

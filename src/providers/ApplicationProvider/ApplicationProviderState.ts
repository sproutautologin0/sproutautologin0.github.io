import { User } from '../../types/User';

export interface ApplicationProviderState {
  isLoggedIn: boolean;
  isLoading: boolean;
  content: {
    [key: string]: unknown;
  };
  user: User;
}

export const state: ApplicationProviderState = {
  isLoading: true,
  isLoggedIn: false,
  content: {},
  user: {
    name: undefined,
    email: undefined,
    avatar: undefined
  }
};

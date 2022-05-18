import React from 'react';
import {ApplicationProviderState} from './ApplicationProviderState';
import {setApplicationContent, setApplicationLoggedInUser, setApplicationLogoutUser, ApplicationProviderAction} from './ApplicationProviderActions'
import {getUserDetails} from '../../services/getUserDetails';

export const buildApplicationProviderValues = (
  state: ApplicationProviderState,
  dispatch:  React.Dispatch<ApplicationProviderAction>
) => {
  const {user, isLoggedIn, isLoading, content} = state;

  const setUser = async (token: string) => {
    const user = await getUserDetails(token);
    const { email, name, picture, accessToken = token } = user;

    dispatch(
      setApplicationLoggedInUser({
        name,
        email,
        avatar: picture
      })
    );

    sessionStorage.setItem('access_token', accessToken);
  };

  const forgetUser = () => {
    sessionStorage.removeItem('access_token');

    dispatch(
      setApplicationLogoutUser()
    );
  };

  const setContent = (key: string, value: unknown) => {
    dispatch(setApplicationContent({key, value}));
  };

  return {
    state: {
      user,
      content,
      isLoggedIn,
      isLoading
    },
    setUser,
    setContent,
    forgetUser
  };
};

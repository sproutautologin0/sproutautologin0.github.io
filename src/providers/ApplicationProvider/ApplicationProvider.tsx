import React from 'react';
import {LoadScreenOverlay} from '@probablybroken/common';
import {ApplicationProviderContext} from './ApplicationProviderContext';
import {SnackbarProvider} from 'notistack';
import {buildApplicationProviderValues} from './buildApplicationProviderValue';
import {reducer} from './ApplicationProviderReducer';
import {state as applicationState} from './ApplicationProviderState';
import {setApplicationLoadState, setApplicationLoggedInUser} from './ApplicationProviderActions';
import {getUserDetails} from '../../services/getUserDetails';

export interface ApplicationProviderProps {
  children?: React.ReactNode;
}

export const ApplicationProvider: React.FC<ApplicationProviderProps> = ({children}) => {
  const [state, dispatch] = React.useReducer(reducer, applicationState);
  const value = buildApplicationProviderValues(state, dispatch);

  React.useEffect(() => {
    const token = sessionStorage.getItem('access_token');

    async function setUser(tokenId: string) {
      const user = await getUserDetails(tokenId);
      const { email, name, picture, accessToken = tokenId } = user;

      dispatch(
        setApplicationLoggedInUser({
          name,
          email,
          avatar: picture
        })
      );

      sessionStorage.setItem('access_token', accessToken);
    }

    if (token) {
      setUser(token);
    }

    dispatch(setApplicationLoadState(false));
  }, []);
  
  return (
    <SnackbarProvider maxSnack={5}>
      <ApplicationProviderContext.Provider value={value}>
        <LoadScreenOverlay isLoading={state.isLoading}>
          {children}
        </LoadScreenOverlay>
      </ApplicationProviderContext.Provider>
    </SnackbarProvider>
  );
};

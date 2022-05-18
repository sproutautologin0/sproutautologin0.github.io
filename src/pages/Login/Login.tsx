import React from 'react';
import Box from '@mui/material/Box';
import {GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline} from 'react-google-login';
import {LoginContent} from './LoginContent';
import {Skeleton} from '../../components/Skeleton';
import {useApplicationContext} from '../../hooks/useApplicationContext';
import {useSnack} from '../../hooks/useSnack';
import {withoutProtection} from '../../components/withoutProtection';

const Component = () => {
  const snack = useSnack();
  const {setContent, setUser, state} = useApplicationContext();
  const content = (state?.content['login'] as LoginContent);

  React.useEffect(() => {
    if (!content) {
      setContent('login', require('./content.json'));
    }
  }, [state.content, content, setContent]);

  const onResolved = (resolve: GoogleLoginResponse | GoogleLoginResponseOffline): void => {
    setUser((resolve as GoogleLoginResponse).tokenId);
    snack.success('User logged in successfully');
  };

  const onFailure = (error: any): void => {
    console.log(error);
    snack.error('Login failed');
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Skeleton isLoading={!content} variant="rectangular" width="170px" height="45px">
        <GoogleLogin
          clientId={process.env.REACT_APP_CLIENT_ID as string}
          buttonText={content?.loginButtonText}
          onSuccess={onResolved}
          onFailure={onFailure}
          cookiePolicy="single_host_origin"
        />
      </Skeleton>
    </Box>
  );
};

export const Login = withoutProtection(Component);

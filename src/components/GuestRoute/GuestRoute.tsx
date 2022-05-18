import React from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {useApplicationContext} from '../../hooks/useApplicationContext';

export type ProtectedRouteProps = {
  children: React.ReactElement;
};

export const GuestRoute = ({ children }: ProtectedRouteProps) => {
  const {state} = useApplicationContext();
  const location = useLocation();
  
  if (state.isLoggedIn) {
    return (<Navigate to="/" state={{from: location}} replace />);
  }

  return children;
};

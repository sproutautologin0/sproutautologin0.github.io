import React from 'react';
import { ApplicationProviderContext } from '../../providers/ApplicationProvider';

export const useApplicationContext = () => {
  const context = React.useContext(ApplicationProviderContext);

  if (!context) {
    throw new Error('Context not accessible at this time');
  }

  return context;
};

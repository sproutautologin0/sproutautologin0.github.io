import React from 'react';
import { ApplicationProviderState } from './ApplicationProviderState';

export interface ApplicationProviderContextInterface {
  setUser: (token: string) => Promise<void> | void;
  forgetUser: () => Promise<void> | void;
  setContent: (key: string, value: unknown) => Promise<void> | void;
  state: ApplicationProviderState;
}

export const ApplicationProviderContext = React.createContext<undefined|ApplicationProviderContextInterface>(undefined);

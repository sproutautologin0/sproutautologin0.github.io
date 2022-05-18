import React from 'react';
import { SnackbarOrigin } from '@mui/material';
import { useSnackbar, SnackbarKey } from 'notistack';
import IconButton from '@mui/material/IconButton';
import { Close } from '@mui/icons-material';

export const useSnack = () => {
  const snack = useSnackbar();

  const action = (key: SnackbarKey) => (
    <>
      <IconButton onClick={() => { snack.closeSnackbar(key); }}>
        <Close />
      </IconButton>
    </>
  );
  const anchorOrigin: SnackbarOrigin = {
    vertical: 'top',
    horizontal: 'center'
  };

  const success = (message: string) => {
    snack.enqueueSnackbar(message, { variant: 'success', anchorOrigin, action  });
  };

  const warning = (message: string) => {
    snack.enqueueSnackbar(message, { variant: 'warning', anchorOrigin, action});
  };

  const error = (message: string) => {
    snack.enqueueSnackbar(message, { variant: 'error', anchorOrigin, action});
  };

  const info = (message: string) => {
    snack.enqueueSnackbar(message, { variant: 'info', anchorOrigin, action });
  };

  const thisSnack = (message: string) => {
    snack.enqueueSnackbar(message, { variant: 'success', anchorOrigin, action });
  };

  thisSnack.success = success;
  thisSnack.warning = warning;
  thisSnack.info = info;
  thisSnack.error = error;

  return thisSnack;
};

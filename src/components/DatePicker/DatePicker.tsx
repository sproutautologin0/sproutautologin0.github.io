import React from 'react';
import MuiDatePicker from '@mui/lab/DatePicker';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { DatePickerProps } from './DatePicker.types';

export const DatePicker: React.FC<DatePickerProps> = (props) => {
  const { label, value, onChange } = props;

  return (
    <MuiDatePicker
      label={label}
      value={value}
      onChange={onChange}
      renderInput={(params: TextFieldProps) => (
        <TextField {...params} color="secondary" fullWidth />
      )}
    />
  );
}

import { DatePickerProps as MuiDatePickerProps } from '@mui/lab/DatePicker';

export interface DatePickerProps extends Omit<MuiDatePickerProps, 'renderInput'> {}

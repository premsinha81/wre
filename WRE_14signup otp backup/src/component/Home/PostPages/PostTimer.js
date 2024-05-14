import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Box } from '@mui/material';
import { createGlobalStyle } from 'styled-components';


const Cus_style = createGlobalStyle`
.MuiPickersPopper-root.css-1anqmj6-MuiPopper-root-MuiPickersPopper-root.MuiPopper-root{
  top: 10% !important;
}
.css-1laqsz7-MuiInputAdornment-root{
  width: 100% !important;
  height: 100% !important;
}
`

export default function PostTimer() {
  return (
   <Box  className="Time_style position-relative">
    <Cus_style/>
     <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
        <TimePicker label="" />
      </DemoContainer>
    </LocalizationProvider>
   </Box>
  );
}
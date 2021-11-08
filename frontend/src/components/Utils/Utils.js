import React from 'react';
// Material UI
import { Button, Grid, TextField } from '@mui/material';
// React Hook Form
import { useController } from 'react-hook-form';

export function useCustomController (props) {
  const { name, control, rules, defaultValue, ...rest } = props;
  const controllerFunctions = useController({ name, control, rules, defaultValue });
  return { ...controllerFunctions, ...rest };
}

export const CustomInput = ({ form, handleSubmit, onSubmit, button }) => {
  const formArray = Object.keys(form);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={3}
      >
        {formArray.map((field, index) => {
          const { field: { ref, value, ...inputProps }, label, type } = form[field];
          return (
            <Grid key={index} item xs={12}>
              <TextField
                value={value || ''}
                inputRef={ref}
                label={label}
                type={type || 'text'}
                {...inputProps}
                fullWidth
              />
            </Grid>
          );
        })}
        <Grid item xs={12}>
          <Button type='submit' variant='contained' fullWidth>
            {button || 'Enviar'}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

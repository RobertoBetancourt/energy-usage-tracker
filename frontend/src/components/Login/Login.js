import React from 'react';
import { useForm } from 'react-hook-form';
// Material UI
import { Avatar, Box, Container, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// Utils
import { CustomInput, useCustomController } from '../Utils/Utils';

const Login = (props) => {
  const { control, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  const form = {
    email: useCustomController({
      name: 'email',
      control,
      rules: { required: true },
      label: 'Correo'
    }),
    password: useCustomController({
      name: 'password',
      control,
      rules: { required: true },
      label: 'Contraseña',
      type: 'password'
    })
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          height: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5' style={{ margin: '1rem' }}>
          Iniciar sesión
        </Typography>
        <CustomInput
          form={form}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          button='Iniciar sesión'
        />
      </Box>
    </Container>
  );
};

export default Login;

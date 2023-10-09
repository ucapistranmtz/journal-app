import { useDispatch } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"

import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks'




export const LoginPage = () => {

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: 'ucapistran@outlook\.com',
    password: '123141'
  });

  const onSubmit = (event) => {

    event.preventDefault();
    console.log({ email, password });
    dispatch(checkingAuthentication());
  }

  const onGoogleSignin = () => {

    console.log('onGooglesignin');
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title='login'>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }} >
            <TextField label='email'
              type='email'
              placeholder='dev@email.com'
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            >

            </TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='password'
              type='password'
              placeholder='password'
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}

            >

            </TextField>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

            <Grid item xs={12} sm={6}>
              <Button type='submit'
                variant='contained'
                fullWidth
              > Login</Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                variant='contained'
                fullWidth
                onClick={onGoogleSignin}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>

          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to="/auth/register">
              Sign Up
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}

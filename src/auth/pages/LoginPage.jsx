import {Link as RouterLink} from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'



export const LoginPage = () => {
  return (
   <AuthLayout title='login'>
     <form>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }} >
              <TextField label='email' type='email' placeholder='dev@email.com' fullWidth >

              </TextField>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField label='password' type='password' placeholder='password' fullWidth >

              </TextField>
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

              <Grid item xs={12} sm={6}>
                <Button variant='contained' fullWidth> Login</Button>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button variant='contained' fullWidth>
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

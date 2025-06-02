import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'


export const RegisterPage = () => {
    return (
        <AuthLayout title='Register'>
            <form >
                <Grid container>
                    <Grid size={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Name"
                            type="text"
                            placeholder="Your name"
                            fullWidth
                        />
                    </Grid>
                    <Grid size={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth
                        />
                    </Grid>

                    <Grid size={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="contraseña"
                            fullWidth
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mt: 1 }}>
                        <Grid item size={{ xs: 12 }}>
                            <Button variant="contained" fullWidth>
                                Create an account
                            </Button>
                        </Grid>


                        <Grid container direction='row' justifyContent='end'>
                            <Link component={RouterLink} color="inherit" to='/auth/register'>
                                Login
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}

import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const NavBar = ({ drawerWith = 240 }) => {
    return (
        <AppBar
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${drawerWith}px)` },
                ml: { sm: `${drawerWith}px` }
            }}

        >

            <Toolbar>
                <IconButton>
                    <MenuOutlined />
                </IconButton>

            </Toolbar>

            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant='h6' noWrap component='div'>JournalApp</Typography>
                <IconButton color='error'>
                    <LogoutOutlined/>
                </IconButton>
            </Grid>
        </AppBar>
    )
}

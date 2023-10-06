import { Star, StarOutline, StartOutlined } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import React from 'react'

export const NothingSelectedView = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifycontent="center"
            sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius:3 }}>
            <Grid item xs={12}>
                <StarOutline  sx={{ fontSize:100, color:'white'}}/>

            </Grid>
            <Grid item xs={12}>
                 <Typography color='white' variant='h5'> Add new note</Typography>

            </Grid>
        </Grid>
    )
}

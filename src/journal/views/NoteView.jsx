import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField } from '@mui/material'
import React from 'react'

export const NoteView = () => {
    return (
        <Grid container direction='row' justifyContent='space-between' sx={{ mb: 1 }}>
            <Grid item fontSize={39} fontWeight='light'>October 6th, 2023 </Grid>
            <Grid item>
                <Button color='primary' sx={{ padding: 2 }}>

                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Save
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                   
                    label='title'
                    sx={{ border: 'none', mb: 1 }}
                />
                  <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    multiline
                    placeholder="Whats going on today?"
                    minRows={5}
                    sx={{ border: 'none', mb: 1 }}
                />
            </Grid>
             { /**image gallery */}
            

        </Grid>
    )
}

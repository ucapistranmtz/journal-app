import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField } from '@mui/material'
import React, { useMemo } from 'react'
import { ImageGallery } from '../components'
import { useForm } from '../../hooks/useForm'
import { useSelector } from 'react-redux'

export const NoteView = () => {

    const { active: note } = useSelector(state => state.journal)
    const { body, title, date, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();

    }, [date])


    return (
        <Grid container direction='row' justifyContent='space-between' sx={{ mb: 1 }}>
            <Grid item fontSize={39} fontWeight='light'> {dateString}</Grid>
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
                    value={title}
                    onChange={onInputChange}
                />
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    multiline
                    placeholder="Whats going on today?"
                    minRows={5}
                    sx={{ border: 'none', mb: 1 }}
                    value={body}
                />
            </Grid>
            <ImageGallery />


        </Grid>
    )
}

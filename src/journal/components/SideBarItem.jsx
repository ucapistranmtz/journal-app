import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material';
import { setActiveNote } from '../../store/journal';


export const SideBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {
      
 
    const dispatch = useDispatch();

    const onClickNote = () => {
        dispatch( setActiveNote({ title, body, id, date, imageUrls }) )
    }


    const newTitle = useMemo( () => {
        return title.length > 17
            ? title.substring(0,17) + '...'
            : title;
    },[ title ])

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return new Intl.DateTimeFormat('en-US').format(date)
    }, [date])

    const dateTime = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toLocaleTimeString()  
    }, [date])

  return (
    <ListItem disablePadding>
        <ListItemButton onClick={ onClickNote }>
            <ListItemIcon>
                <TurnedInNot />
            </ListItemIcon>
            <Grid container>
                <ListItemText primary={ dateString }   />
                <ListItemText secondary={ dateTime }   />
               
            </Grid>
        </ListItemButton>
    </ListItem>
  )
}
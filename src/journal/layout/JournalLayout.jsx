import { Box, Toolbar } from '@mui/material'
import React from 'react'
import { NavBar } from '../components';
import { SideBar } from '../components/SideBar';


const drawerWith = 240;
export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
              <NavBar/>
              <SideBar/>

            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >
                <Toolbar/>
                {children}

            </Box>
        </Box>
    )
}

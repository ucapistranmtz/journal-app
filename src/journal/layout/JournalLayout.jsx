import { Box } from '@mui/material'
import React from 'react'
import { NavBar } from '../components';


const drawerWith = 240;
export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
              <NavBar/>
            {/*sidebar */}

            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >
                {/*toolbar */}
                {children}

            </Box>
        </Box>
    )
}

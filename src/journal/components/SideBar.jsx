import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'


export const SideBar = ({ drawerWith = 240 }) => {
    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWith }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant='permanent'
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', with: drawerWith }

                }}
            ></Drawer>

            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    Ulises Capistran
                </Typography>
            </Toolbar>
            <Divider />

            <List>
                {
                    ['January', 'February', 'March', 'April', 'May'].map(text => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text} />
                                    <ListItemText secondary={'Qui ullamco tempor'} />
                                </Grid>

                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

        </Box>
    )
}

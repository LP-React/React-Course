import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export const SideBar = ({ drawerWith }) => {
    return (
        <Box component='nav' sx={{ width: { sm: drawerWith }, flexShrink: { sm: 0 } }}>
            <Drawer variant="permanent" open sx={{ display: { xs: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWith } }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component='div'>Laysson Polo</Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        ['January', 'February', 'March', 'April'].map(text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>

                                    <Grid container>
                                        <ListItemText primary={text}/>
                                        <ListItemText secondary={'Lorem ipsum Lorem ipsum Lorem ipsum '} />
                                    </Grid>

                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}

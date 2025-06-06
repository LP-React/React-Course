import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"

export const NavBar = ({ drawerWitdh = 240 }) => {
    return (
        <AppBar position="fixed" sx={{ width: { sm: `calc(100% - ${drawerWitdh}px)` }, ml: { sm: `${drawerWitdh}` } }}>
            <Toolbar>
                <IconButton color="inherit" edge='start' sx={{ mr: 2, display: { sm: 'none' } }}>
                    <MenuOutlined />
                </IconButton>

                <Typography variant="h6" noWrap component='div'>JournalApp</Typography>
                <IconButton color='error'>
                    <LogoutOutlined />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

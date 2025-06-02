import { Box } from "@mui/material"
import { NavBar, SideBar } from "../components"

const draweWith = 240

export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: "flex" }}>

            <NavBar draweWith={draweWith} />

            <SideBar drawerWith={draweWith} />

            <Box component='main' sx={{ flexGrow: 1, p: 3, mt:8 }}>
                {children}
            </Box>
        </Box>
    )
}

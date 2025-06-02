import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView, NoteView } from "../views"
import { AddOutlined } from "@mui/icons-material"



export const JournalPage = () => {
    return (
        <JournalLayout>
            {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo beatae eveniet officiis nemo exercitationem iste voluptatibus dicta, incidunt architecto aut, voluptate sit consequatur, amet corporis repudiandae nisi fuga eaque nulla.</Typography> */}
            <NothingSelectedView />
            {/* <NoteView /> */}
            <IconButton size='large' sx={{ color: 'white', background: 'error.main', ':hover': { backgroundColor: 'error.main', opacity: 0.9 }, position: 'fixed', right: 50, bottom: 50 }}>
                <AddOutlined sx={{ fontSize: 30 }}/>
            </IconButton>
        </JournalLayout>
    )
}

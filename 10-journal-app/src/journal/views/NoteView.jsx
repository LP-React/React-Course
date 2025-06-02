import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
    return (
        <Grid container direction='row' justifyContent='space-between' alignItems={'center'} sx={{ mb: 1 }}>
            <Grid>
                <Typography fontSize={39} fontWeight={'light'}>28th March, 2025</Typography>
            </Grid>
            <Grid>
                <Button color="primary" sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Save
                </Button>
            </Grid>
            <Grid container>
                <TextField type="text" variant="filled" fullWidth placeholder="Type a title" label="Title" sx={{ border: 'none', marginBottom: 1 }} />
                <TextField type="text" variant="filled" fullWidth placeholder="What happened today?" label="Description" minRows={5} />
            </Grid>

            <ImageGallery />
        </Grid>
    )
}

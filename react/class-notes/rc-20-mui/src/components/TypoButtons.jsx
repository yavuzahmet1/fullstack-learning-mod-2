import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

const TypoButtons = () => {
    return (
        <div>
            {/* maxWidth="md" width en fazla md büyüklükte olsun.  gutterBottom={true}
      alttan margin. component attribute ü  sadece console da etkilidir , görüntü yine variant neyse odur*/}
            <Container maxWidth="md">
                <Typography
                    variant='h1'
                    component="h3"
                    gutterBottom
                    align='center'
                    color='primary'
                    sx={{ background: "#eee", mt: 4, border: "1px solid red" }}
                >Typography Container Box Button</Typography>
                {/* body1: p etiketidir,body1=16px daha büyük fs ,body2=14px daha küçük font lu.  button=span etiketidir+büyük harf */}
                <Typography
                    variant='button'
                    sx={{ mr: 5, background: "yellow" }} color='warning' >span olcak</Typography>

                <Typography variant='button'>span olcak</Typography>

                <Box sx={{ display: "flex", flexDirection: "column", marginTop: 4, marginBottom: 4, }}>
                    <Button color="warning" sx={{ color: "yellow" }}
                        size='large' variant="contained"

                    >Contained</Button>
                    <Button endIcon={<SendIcon />} variant="contained"
                        sx={{ marginTop: 4 }}
                    >Contained</Button>
                </Box>
            </Container>
        </div >
    )
}

export default TypoButtons
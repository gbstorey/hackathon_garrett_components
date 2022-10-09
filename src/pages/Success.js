import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import theme from '../components/UI/Theme';
import {Button} from '@mui/material';
import {Card} from '@mui/material';

export default function Success() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{textAlign:"center", margin: "30px auto"}}>
                    <Typography variant="h2">
                    Success
                    </Typography>
                    <Typography variant="h3"sx={{marginTop: "10px", margin: "20px 10rem"}} >
                    Your responses have been recorded and we will be in touch. Get ready to Revitalize!
                    </Typography>
                    <Button href="/" variant="contained" color="success" sx={{margin: "0 auto"}}>
                    Return Home
                    </Button>
                </Box>
            </ThemeProvider>
        </>
    )
}
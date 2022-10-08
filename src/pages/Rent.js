import { ThemeProvider } from '@emotion/react';
import theme from "../components/UI/Theme"
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material';

export default function Rent() {
    return (
    <ThemeProvider theme={theme}>
      <Box sx={{margin: "1.5rem"}}>
      <Grid container spacing={2}>
      <Box sx={{ marginLeft: "1.5rem", marginTop: "30px"}}>
        <Typography variant="h2">
          Rent
        </Typography>
        <Typography variant="h3"sx={{marginTop: "10px"}} >
          Your hearth & shelter.
        </Typography>
      </Box>
      </Grid>
      </Box>
    </ThemeProvider >
    )
  };
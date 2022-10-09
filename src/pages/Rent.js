import { ThemeProvider } from '@emotion/react';
import theme from "../components/UI/Theme"
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material';
import {rentals} from "../assets/Text/rentals"
import RentalCard from "../components/UI/RentalCard"

export default function Rent() {
    return (
    <ThemeProvider theme={theme}>
          <Box sx={{textAlign:"center", margin: "30px auto"}}>
            <Typography variant="h2">
              Rent
            </Typography>
            <Typography variant="h3"sx={{marginTop: "10px"}} >
              Your hearth & shelter.
            </Typography>
          </Box>

      <Box sx={{textAlign: "center", margin: "0 5rem"}}>
          <Grid container spacing={2}>
            {rentals.map(rental => 
              <Grid item xs={6}>
              <RentalCard 
              name={rental.name}
              img={rental.img}
              rate={rental.rate}/>
              </Grid>
              )}
          </Grid>
      </Box>

    </ThemeProvider >
    )
  };
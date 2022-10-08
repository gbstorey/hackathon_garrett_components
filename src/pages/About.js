import { Box } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "../components/UI/Theme";
import {Typography} from "@mui/material";
import {Grid, Paper} from "@mui/material";
import { styled } from '@mui/material/styles';
import AboutCard from "../components/UI/AboutCard";
import {storyText} from "../assets/Text/stories"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function About () {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{textAlign: "center" , marginTop: "30px"}}>
      <Typography variant="h1">Our Mission</Typography>
    </Box>
    <Box sx={{textAlign: "center" , marginTop: "20px"}}>
      <Typography variant="h3">
        To bring you back up and beyond.
      </Typography>
    </Box>
    <Box sx={{textAlign: "center" , margin: "40px auto", width: "50rem", minWidth: "400px"}}>
      <Grid container spacing={2}>
        {storyText.map(story => 
          <Grid item xs={6}>
          <AboutCard 
          name={story.name}
          skills={story.skills}
          description={story.description}
          imagePath={story.imagePath}/>
          </Grid>
          )}
      </Grid>
    </Box>
    <Box sx={{textAlign: "center" , marginTop: "20px"}}>
      <Typography variant="p">
        Insert more here...
      </Typography>
    </Box>
    </ThemeProvider>
  )
}
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import { Grid } from "@mui/material";
import Box from "@mui/system/Box";
import { Card } from "@mui/material";
import { jobs } from "../../assets/Text/jobs"
import JobCard from './JobCard';

export default function HomePage(props) {
    return (
    <>
    <Card sx={{marginTop: "1px"}}>
        <Grid container spacing={2} sx={{padding: "20px", margin:"0px 10px"}}>
            <Grid item xs={6}>
                <Box>
                    <h2>Current Ecurrency:</h2>
                    <Box>
                    <h2>  <AutoGraphIcon />   1234</h2> 
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box>
                    <h2>Rating:</h2>
                    {[...Array(7)].map((i) =>
                        <StarIcon key={i}/>
                    )}
                    {[...Array(3)].map((i) =>
                        <StarBorderIcon key={i}/>
                    )}
                </Box>
            </Grid>
        </Grid>
    </Card>
    <Card sx={{padding:"1rem"}}>
    <Grid container spacing={2}>
        {jobs.map(job => 
          <Grid item xs={6}>
          <JobCard 
          title={job.title}
          skills={job.skills}
          name={job.name}
          img={require(`../../assets/images/${job.img}`)}
          location={job.location}/>
          </Grid>
        )}
    </Grid>
    </Card>
    </>
    )
}
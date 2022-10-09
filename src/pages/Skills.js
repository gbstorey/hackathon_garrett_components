
import { useState } from "react";
import { FormControl,FormLabel,Typography} from "@mui/material"
import { Card } from "@mui/material"
import { ThemeProvider } from '@emotion/react';
import theme from "../components/UI/Theme"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box } from "@mui/material";
import SkillYesNo from "../components/UI/SkillYesNo";


export default function Skills(props) {
    const [value, setValue] = useState(0);
    const [isYesNo, setIsYesNo] = useState(false);

    return (
      <ThemeProvider theme={theme}>
      <Typography variant="h6">
      <Box sx={{margin: "40px auto", width: "50rem", minWidth: "400px"}}>
      <Card sx={{margin: "30px", width: "20rem", padding: "20px", float:"left"}}>
      <FormControl>

        <FormLabel id="demo-radio-buttons-group-label">
          {props.questions[value]}
        </FormLabel>

      {isYesNo === true ? <SkillYesNo /> : <input></input>}



      </FormControl>
      <KeyboardArrowRightIcon sx={{position:"relative", top:"90px", left:"230px"}} onClick={()=> setValue(value+1)}/>
      </Card>
      </Box>
      </Typography>
      </ThemeProvider>
    )
  };
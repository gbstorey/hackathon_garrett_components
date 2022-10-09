import {FormControlLabel,RadioGroup,Radio} from "@mui/material"

export default function SkillYesNo(props) {
    return (
        <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="yes"
        name="radio-buttons-group"
      >
        {props.answers.map(answer => {
        return <FormControlLabel value={`${answer.value}`} control={<Radio />} label={`${answer.label}`}  />
        }
        )}
      </RadioGroup>
    )
}
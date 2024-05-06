import React from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const experience= [
    0,1,2,3,4,5,6,7,8,9,10,11
]

function Experience({ selectedExperience, setSelectedExperience } ){
    return(
        
         <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="filter-by-experience">Experience</InputLabel>
        <Select
        name="experience"
            labelId="filter-by-experience"
          id="filter-by-experience"
          value={selectedExperience}
          onChange={(event) => setSelectedExperience(event.target.value)}
          input={<OutlinedInput label="Experience" />}
        >
          {experience.map(e=>(<MenuItem value={e}>{e}</MenuItem>)
            
          )}

            
        </Select>
        </FormControl>

    
    )
}

export default Experience;
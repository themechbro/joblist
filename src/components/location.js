import React from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const location=[
     'chennai',
      'mumbai', 
      'remote', 
      'bangalore'
]

function Location({selectedLocation, setSelectedLocation}){
    return(
        
         <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="filter-by-location">Location</InputLabel>
        <Select
        name="location"
            labelId="filter-by-location"
          id="filter-by-location"
          value={selectedLocation}
          onChange={(event)=>setSelectedLocation(event.target.value)}
          input={<OutlinedInput label="Location" />}
        >
            
            {location.map((l)=><MenuItem key={l}>{l}</MenuItem>)}
        </Select>
        </FormControl>

        
    )
}

export default Location;
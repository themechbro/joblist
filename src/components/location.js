import React from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const locations=["All", 'delhi ncr', 'mumbai', 'chennai', 'bangalore', 'remote'];

function Location(selectedPlace, setSelectedPlace){

    const handleChange = (event) => {
        setSelectedPlace(event.target.value);
      };
    
    return(
        
        <FormControl sx={{ m: 1, width: 300 }}>
       <InputLabel id="filter-by-location">Location</InputLabel>
       <Select
       name="location"
           labelId="filter-by-location"
         id="filter-by-location"
         value={selectedPlace}
         onChange={handleChange}
         input={<OutlinedInput label="Location" />}
       >
         {locations.map(e=>(<MenuItem value={e}>{e}</MenuItem>)
           
         )}

           
       </Select>
       </FormControl>

   
   )
}

export default Location;
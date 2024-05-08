import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Location({ selectedPlace, setSelectedPlace, darkMode }) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label="Location"
        variant="outlined"
        value={selectedPlace}
        onChange={(event) => {
          event.preventDefault(event);
          setSelectedPlace(event.target.value);
        }}
        sx={{ backgroundColor: darkMode ? "#333" : "#FFF" }}
      />
    </Box>
  );
}

export default Location;

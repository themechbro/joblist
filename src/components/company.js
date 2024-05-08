import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function CompanyName({ selectedCompany, setSelectedCompany, darkMode }) {
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
        label="Company Name"
        variant="outlined"
        value={selectedCompany}
        onChange={(event) => {
          event.preventDefault(event);
          setSelectedCompany(event.target.value);
        }}
        sx={{ backgroundColor: darkMode ? "#333" : "#FFF" }}
      />
    </Box>
  );
}

export default CompanyName;

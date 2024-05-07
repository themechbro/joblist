import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function CompanyName({ selectedCompany, setSelectedCompany }) {
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
          event.preventDefault();
          setSelectedCompany(event.target.value);
        }}
      />
    </Box>
  );
}

export default CompanyName;

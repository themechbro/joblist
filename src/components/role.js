import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Role ({selectedRole, setSelectedRole}){
    return(
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
          label="Role"
          variant="outlined"
          value={selectedRole}
          onChange={(event) => {
            event.preventDefault();
            setSelectedRole(event.target.value);
          }}
        />
      </Box>
    );

}

export default Role;
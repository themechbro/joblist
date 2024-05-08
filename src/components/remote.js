import react from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const options = ["All", "remote", "OnSite"];

function Remote({ selectedOption, setSelectededOption, darkMode }) {
  return (
    <FormControl
      sx={{ m: 1, width: 300, backgroundColor: darkMode ? "#333" : "#FFF" }}
    >
      <InputLabel id="filter-by-remote">Work Mode</InputLabel>
      <Select
        name="remote"
        labelId="filter-by-remote"
        id="filter-by-remote"
        value={selectedOption}
        onChange={(event) =>
          setSelectededOption(
            event.target.value === "All" ? "" : event.target.value,
          )
        }
        input={<OutlinedInput label="Work Mode" />}
      >
        {options.map((e) => (
          <MenuItem value={e}>{e}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Remote;

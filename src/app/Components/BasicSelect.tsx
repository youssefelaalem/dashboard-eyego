import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function BasicSelect({
  label = "",
  arrItems = [],
  className,
  setFilterName,
  filterName,
}: {
  label: string;
  arrItems: Array<string>;
  className: string;
  setFilterName: React.Dispatch<React.SetStateAction<string>>;
  filterName: string;
}) {
  const handleChange = (event: SelectChangeEvent) => {
    setFilterName(event.target.value as string);
  };

  return (
    <Box className={className} sx={{ minWidth: 120, maxWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filterName}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={""}>no value</MenuItem>
          {arrItems?.map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

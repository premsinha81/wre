import React from "react";
import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import AddIcon from "@mui/icons-material/Add";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Link } from "react-router-dom";

const SearchProgram = ({searchName}) => {
//   const [age, setAge] = React.useState("");

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

  return (
    <Grid container sx={{ bgcolor: "#fff" }} className="rounded rounded-2 p-4">
      <Grid item xs={12}>
        <Box className="text-center">
          <Typography
            sx={{
              color: "#3C3C3C",
              fontSize: "20px",
              fontWeight: "bold",
              mb: 1,
            }}
          >
            Search Programs
          </Typography>
          <Box className="d-flex justify-content-center align-items-center mb-4">
            <Box sx={{ py: "1px", bgcolor: "#3D55A5", width: "33%" }}></Box>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12}>
       <Link to={"/search-program"}> <Box className="rounded-pill bg-lgrey form-control text-dark">
        {searchName}</Box>
        </Link>
      </Grid>
    </Grid>
  );
};

export default SearchProgram;

import React from "react";
import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import AddIcon from '@mui/icons-material/Add';

const FindJob = () => {
  return (
    <div>
        <div className="findJobHome rounded rounded-2 mb-4">
            <h2>TAKE YOUR FIRST STEP TO FINDING YOUR DREAM CAREER</h2>
            <p>We have 893.817 Jobs waiting for your best talent</p>
            <a href="#" className="btn btn-primary">Apply Now!</a>
        </div>
    </div>
  );
};

export default FindJob;
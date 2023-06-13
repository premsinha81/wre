import React from "react";
import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import AddIcon from '@mui/icons-material/Add';

const GroupName = [
  {
    id: 1,
    name: "West Philly Welders Association",
    flowername: "4,602 Followers",
    img:"./group1.jpg"
  },
  { id: 2, name: "North Dakota Electricians", flowername: "4,602 Followers", img:"./group2.jpg"},
  { id: 3, name: "GTG Hospitals N. Jersey", flowername: "4,602 Followers", img:"./group3.png" },
  {
    id: 4,
    name: "North Philly Welders Association",
    flowername: "4,602 Followers",
    img:"./group4.jpeg"
  },
  {
    id: 5,
    name: "West Philly Welders Association",
    flowername: "4,602 Followers",
    img:"./group5.jpg"
  },
  {
    id: 6,
    name: "West Philly Welders Association",
    flowername: "4,602 Followers",
    img:"./group3.png"
  },
  {
    id: 7,
    name: "West Philly Welders Association",
    flowername: "4,602 Followers",
    img:"./group6.jpg"
  },
];

const Groups = () => {
  return (
    <Grid container sx={{ bgcolor: "#fff",px:{lg:"30px",md:"10px",xs:"15px"}}} className="rounded rounded-2 pt-3 pb-2">
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
            Recommended Groups
          </Typography>
          <Box className="d-flex justify-content-center align-items-center mb-4">
            <Box sx={{ py: "1px", bgcolor: "#3D55A5", width: "33%" }}></Box>
          </Box>
        </Box>

        {GroupName.map((data) => {
          const { id, name, flowername, img } = data;
          return (
            <Grid container key={id} className="mb-3">
              <Grid item xs={2}>
                <Avatar src={img} sx={{width:{lg:45,xs:35},height:{lg:45,xs:35}}} />
              </Grid>
              <Grid item xs={9}>
                <Box sx={{ textAlign: "left" }}>
                  <Typography
                    sx={{
                      color: "#3C3C3C",
                      fontSize:{lg:"15px",md:"12px",xs:"13px"},
                      textAlign: "left",
                    }}
                  >
                    {name}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#3D55A5",
                      fontSize:{lg:"14px",md:"10px"},
                      cursor: "pointer",
                      ":hover": {
                        textDecoration: "underline",
                        textUnderlineOffset: 4,
                      },
                    }}
                  >
                    {flowername}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={1} className="text-end">
                <AddIcon
                  sx={{ color: "#3D55A5", width:{lg:40,md:22}, height:{lg:40,md:22},border:"2px solid #3D55A5",borderRadius:"50%",p:{lg:1,md:"2px"} }}
                />
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Groups;

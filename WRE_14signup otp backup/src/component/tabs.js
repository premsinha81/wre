import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const Tabs = () => {
  const [welding, setWelding] = useState([]);
  const [open, setOpen] = useState('The focus of our Welding Technology and Training Program is on technical knowledge, industry standards, trouble-shooting skills ');
  const [save, setSave] = useState({
    id: "",
    true: false
  })

  const [hide, setHide] = useState(false)



  const dataApi = () => {
    return (
      fetch("https://admin.allnuud.com/api/get/tab")
        .then((res) => res.json())
        .then((resdata) => setWelding(resdata.data))
    )
  }

  useEffect(() => {
    dataApi()
  }, [])



  console.log(welding, "priyanka");

  let weldingdata;
  if (welding.length > 0) {
    weldingdata = welding;
  }



  return (
    <Grid container spacing={"10px"} sx={{ pt: 3, pb: { md: 6, xs: 0 } }}>
      <Grid item lg={4} md={5} sm={7} xs={12}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "center",
            height: "100%",
          }}
        >
          {welding &&
            welding.length > 0 &&
            welding.map((data, index) => {
              const { id, Title, Description } = data;

              return (
                <>
                  <Stack
                    key={id}
                    className="rounded rounded-1"
                    direction="row"
                    sx={{
                      bgcolor: "#3D55A5",
                      height: "100%",
                      color: "#fff",
                      alignItems: "center",
                      gap: "10px",
                      p: "10px",
                      cursor: "pointer"
                    }}
                    onClick={() => setOpen(() => Description)}
                  >
                    <Box onClick={() => setSave(id)} className="d-sm-none amit">
                      {save == id && hide ?
                        <RemoveCircleOutlineIcon onClick={() => setHide(!hide)} /> : <AddCircleOutlineIcon onClick={() => setHide(true)} />
                      }
                    </Box>
                    <Box onClick={() => setSave(id)} className="d-none d-sm-block">
                      {save == id && hide ?
                        <RemoveCircleOutlineIcon onClick={() => setHide(!hide)} /> : <AddCircleOutlineIcon onClick={() => setHide(true)} />
                      }
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: "15px" }}>{Title}</Typography>
                    </Box>
                  </Stack>
                  {save == id && hide && <Box class="tabPanel rounded d-sm-none "><Typography sx={{ fontSize: "15px" }}>{Description}</Typography></Box>}
                </>
              );
            })}
        </Box>
      </Grid>

      <Grid item lg={8} md={6} sm={5} xs={12} className="d-sm-block d-none">
        <Box class="tabPanel rounded ">
          {/* {welding[0].Description} */}
          {<Typography sx={{ fontSize: "15px" }}>{open}</Typography>}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Tabs;

import {Avatar,Box,Grid,List,ListItem,Stack,Typography} from "@mui/material";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShareSharpIcon from "@mui/icons-material/ShareSharp";
import CusButton from './CusButton'
import { Link } from "react-router-dom";


const ChatPost = ({img,mb}) => {

  return (
    <Grid container sx={{ p: 2, bgcolor: "#fff" }} className="rounded rounded-2" >

      <Grid item sm={1} xs={2}>
        <Box>
          <Avatar className='img_s' src="./img1.png"  sx={{width:{lg:45,sm:35,xs:40},height:{lg:45,sm:35,xs:40}}}/>
        </Box>
      </Grid>

      <Grid item sm={11} xs={10} sx={{ mb: 2 }}>
        <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
          
          <Stack direction="row" spacing={2}>
            <Box>
              <Typography
              className="fs10-s"
                sx={{ fontSize:{lg:"16px",xs:"14px"}, color: "#3C3C3C", fontWeight: 500 }}
              >
                Prem Sinha
              </Typography>
              <Typography className="fs9-s" sx={{ fontSize:{lg:"14px",xs:"10px"}, color: "#3C3C3C" }}>
                @homeowner12
              </Typography>
            </Box>
            <Box>
              <List
                className="ps-xl-4 ps-3 pt-0 m-0"
                sx={{ listStyleType: "number" }}
              >
                <ListItem
                  className="p-0 m-0"
                  sx={{ display: "list-item", listStyle: "disc" }}
                >
                  <Typography className="fs8-s ps-0" sx={{ fontSize:{lg:"14px",xs:"10px"}, color: "#3C3C3C" }}>
                    12th May 2020
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </Stack>
         
          <Box>
            <ArrowDropDownIcon className="fs11-s" sx={{ fontSize:{lg:"40px",xs:"30px"} }} />
          </Box>
        </Stack>
      </Grid>

      {
        img &&
        <Grid item xs={12} >
        <img src={img} className={"img-fluid w-100" + mb} />
      </Grid>}
<Link to='/Postsinglepage'>
      <Grid item xs={12}>
        <Box>
          <Typography sx={{color: "#3C3C3C",fontSize: "20px",fontWeight: "500",mb:{lg:1,xs:0}}}>
            Welding Classes In Jersey
          </Typography>
          <Typography  sx={{ color: "#3C3C3C",fontSize:{lg:"14px",xs:"12px"}}}>
            We know that carbon emissions have sharply fallen during lockdown.
            But will all these changes actually be good for the environment in
            the long run?
          </Typography>
          <Typography
            sx={{color: "#3D55A5",fontSize: "14px",mt: 1,pb: 1,borderBottom: "1px solid #3D55A5"}}>
            Idea | Welding
          </Typography>

          <Stack direction="row" spacing={2} sx={{ alignItems: "center",mb:{xs:"5px",lg:0}}}>
            <List sx={{ display: "flex", alignItems: "center", p: 0 }}>
              <ListItem className="p-0">
                <ThumbUpIcon sx={{ fontSize: "20px", color: "#3D55A5" }} />
              </ListItem>
              <ListItem sx={{ p: 1, fontSize: "18px", color: "#3D55A5" }}>
                Like
              </ListItem>
            </List>
            <List sx={{ display: "flex", alignItems: "center", p: 0 }}>
              <ListItem className="p-0">
                <ShareSharpIcon sx={{ fontSize: "20px", color: "#3D55A5" }} />
              </ListItem>
              <ListItem sx={{ p: 1, fontSize: "18px", color: "#3D55A5" }}>
                share
              </ListItem>
            </List>
          </Stack>
        </Box>
      </Grid>
      </Link>
      <Grid item sm={1} xs={2}>
        <Box>
          <Avatar className='img_s' src="./img1.png"  sx={{width:{lg:45,sm:35,xs:40},height:{lg:45,sm:35,xs:40}}} />
        </Box>
      </Grid>
      <Grid item sm={11} xs={10} sx={{ ps: 0 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Stack direction="row" spacing={1}>
            <Box>
              <Typography
                sx={{fontSize:{lg:"16px",xs:"14px"}, color: "#3C3C3C", fontWeight: "500" }}
              >
                Prem Sinha
              </Typography>
              <Typography className="fs9-s"  sx={{ color: "#3C3C3C", fontSize:{lg:"14px",xs:"10px"}}}>
                @homeowner12
              </Typography>
            </Box>
            <Box>
              <List className="ps-4 pt-0 m-0" sx={{ listStyleType: "number" }}>
                <ListItem
                  className="p-0 m-0"
                  sx={{ display: "list-item", listStyle: "disc" }}
                >
                  <Typography  className="fs9-s" sx={{ color: "#3C3C3C", fontSize:{lg:"14px",xs:"10px"} }}>
                    12th May 2020
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </Stack>
        </Stack>
        <Box>
          <Typography className="mt-2" sx={{fontSize:{lg:"14px",xs:"12px"}}}>
            First image is of clouds, called Australian glory cloud. Second one
            is the vortex of Saturn. These are called solitons, the best known
            non-dispersive object which can't be perturbed easily. ...
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Grid container className="mt-3">
        <Grid item sm={1} xs={2} >
      <Box>
          <Avatar className='img_s' src="./img1.png"  sx={{width:{lg:45,sm:35,xs:40},height:{lg:45,sm:35,xs:40}}} />
        </Box>
      </Grid>
      <Grid item sm={11} xs={10} className="my-auto">
       <Box className="position-relative form-control rounded-pill py-1 px-lg-1 px-0" sx={{bgcolor:"#ECECEC"}}> 
       <input type="text" className="w-100 rounded-pill input_size bg-grey fs8-s" placeholder="Start Typing your Comment here" style={{ fontSize:{lg:"10px",xs:"6px"}}}/>

        <Box sx={{position:"absolute",top:"50%",right:"5px",transform:"translatey(-50%)"}} className="fs10-s">
        <CusButton name="send" bgcolor="#3D55A5" color="#fff"size="14px"  />
        </Box>
       </Box>
      </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ChatPost;

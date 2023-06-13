import React from 'react'
import {  Container,ThemeProvider, Typography, createTheme, Avatar,Box,Grid,List,ListItem,Stack,} from "@mui/material";
import ChatPost from "../PostPages/ChatPost";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShareSharpIcon from "@mui/icons-material/ShareSharp";
const Postsinglepage = () => {

  return (
    <div>
       <Container>
       
  <Box sx={{ mt: 2 }}>


      
  
      <Grid container item xs={12} sx={{ p: 2, bgcolor: "#fff" }} className="rounded rounded-2" >

        <img src={'./post_banner.jpeg'} className={"img-fluid rounded rounded-2 w-100" } />
      </Grid>
         
                </Box>
                
                <Grid item xs={12} sx={{padding:"10px"}}>
        <Box>
          <Typography sx={{color: "#3C3C3C",fontSize: "20px",fontWeight: "500",mb:{lg:1,xs:0}}}>
            Welding Classes In Jersey
          </Typography>
          <Typography  sx={{ color: "#3C3C3C",fontSize:{lg:"14px",xs:"12px"}}}>
            We know that carbon emissions have sharply fallen during lockdown.
            But will all these changes actually be good for the environment in
            the long run Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
               sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
         

         
        </Box>
      </Grid>
                </Container>
    </div>
  )
}

export default Postsinglepage;
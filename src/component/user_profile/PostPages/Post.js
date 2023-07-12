import { Avatar, Box, Button, Grid, InputBase, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import CusButton from './CusButton2'
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import HomeSlider from './HomeSlider';
import PollRoundedIcon from '@mui/icons-material/PollRounded';
import CropOriginalRoundedIcon from '@mui/icons-material/CropOriginalRounded';
import LuggageRoundedIcon from '@mui/icons-material/LuggageRounded';
import CallToActionRoundedIcon from '@mui/icons-material/CallToActionRounded';
import AddPost from './AddPost';
import PostTimer from './PostTimer';

const Post = ({onClick,onclick}) => {

    const [timer , setTimer]=useState(false)



  return (
   <Grid container sx={{p:0,justifyContent:"right"}} >

   

    <Grid item xs={12}>

         
        <Stack direction={{xs:"row",sm:"row"}} spacing={0} className='w-100 rounded-pill border' sx={{justifyContent:"space-between",alignItems:"center",p:"5px",bgcolor:"#fff"}} >
            <Box>
                <Avatar className='img_s' src='./img1.png'  sx={{width:{lg:45,sm:35,xs:40},height:{lg:45,sm:35,xs:40}}}/>
            </Box>
           
                <InputBase onClick={onClick} className='form-control border-0 fs10-s ps-0' placeholder='Hi Prem, start a new discussion'/>
           
            <Stack direction="row" spacing={1} sx={{justifyContent:"space-between",alignItems:"center"}}>
           
            <Box>
                
                <PostTimer/>

                <WatchLaterIcon sx={{width:{lg:30,xs:22},height:{lg:30,xs:22},color:"#616161",display:{sm:"none"}}} onClick={()=>setTimer(!timer)} />
               
            </Box>
            <CusButton name={<Typography onClick={onclick} className='px-2 px-lg-0 fs10-s' sx={{py:{lg:"2px",xs:"1px"},fontSize:{lg:"15px",xs:"14px"}}} >Post</Typography>} color="#fff" bgcolor="#3D55A5" size={"20px"}/>
            </Stack>
        </Stack>
   
    </Grid>

    <Grid item xs={11} sx={{my:{lg:2,xs:1}}}>
    
   <Stack direction="row" spacing={2}>
            <Box><CropOriginalRoundedIcon sx={{color:"black"}}/></Box>
           <Box> <PollRoundedIcon sx={{color:"black"}}/></Box>
           <Box> <LuggageRoundedIcon sx={{color:"black"}}/></Box>
           <Box> <CallToActionRoundedIcon sx={{color:"black"}}/></Box>
        </Stack>
   </Grid>
    
    <Grid item xs={12} sx={{mt:2}}>
    <Typography sx={{fontSize:"25px",color:"#050505",fontWeight:"bold",mb:"5px"}}>WRE Services at a Glance</Typography>
    <Typography sx={{fontSize:"16px",color:"#546179",mb:2}}>Visit WRE Core Centers</Typography>
    </Grid>

    <Grid item xs={12} sx={{mt:{xs:0,lg:2},mb:{xs:2,md:0}}}>
        <HomeSlider 
        img1="./slider1.jpg" 
        name1=" WRE Career Center"
        name2=" WRE Job Center"
        name3=" Career Resources"
        name4=" WRE Career Center"
        name5=" WRE Job Center"
        img2="./images2.jpg" 
        img3="./images3.jpg" 
        img4="./slider1.jpg" 
        img5="./images3.jpg" 
       
        />
    </Grid>

    <Grid item xs={12} sx={{my:{lg:3,xs:0}}}>
       <Stack direction={"row"} spacing={0} sx={{flexWrap:"wrap",justifyContent:{xs:"left"}}}>

     
      
       <CusButton 
       
        name={
        <Stack direction="row" spacing={1} sx={{justifyContent:"center",alignItems:"center"}}>
            <Box><i className="fa fa-line-chart"></i></Box>
            <Box>Trending</Box>
        </Stack>
        }
        bgcolor={"#FFA845"}
        color={"#fff"}
        size={"14px"}
        />
      

       
        <CusButton
         
        name={
        <Stack direction="row" spacing={1} sx={{justifyContent:"center",alignItems:"center"}}>
            <Box><i className="fa fa-leaf"></i></Box>
            <Box>Fresh</Box>
        </Stack>
        }
        bgcolor={"#3D55A5"}
        color={"#fff"}
        size={"14px"}
        />
       

      
        <CusButton
         
        name={
        <Stack direction="row" spacing={1} sx={{justifyContent:"center",alignItems:"center"}}>
            <Box><i className="fa fa-thumb-tack"></i></Box>
            <Box>Following</Box>
        </Stack>
        }
        bgcolor={"#3D55A5"}
        color={"#FFFFFF"}
        size={"14px"}
        />
      

       
       <CusButton 
       
        name={"Welding"}
        bgcolor={"#3C3C3C"}
        color={"#FFFFFF"}
        size={"14px"}
        />
      

        
        <CusButton
         
        name={"Courses"}
        bgcolor={"#3C3C3C"}
        color={"#FFFFFF"}
        size={"14px"}
        />
       
        
       
        <CusButton
         
        name={"Philadelphia"}
        bgcolor={"#3C3C3C"}
        color={"#FFFFFF"}
        size={"14px"}
        />
      
        
       
        <CusButton
         
        name={"Jobs"}
        bgcolor={"#3C3C3C"}
        color={"#FFFFFF"}
        size={"14px"}
        />
        
        
       
        <CusButton
         
        name={"Institutes"}
        bgcolor={"#3C3C3C"}
        color={"#FFFFFF"}
        size={"14px"}
        />
       



       </Stack>
    </Grid>

   </Grid>
  )
}

export default Post
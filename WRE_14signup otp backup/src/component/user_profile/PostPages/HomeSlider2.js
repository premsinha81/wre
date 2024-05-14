import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import ShareSharpIcon from "@mui/icons-material/ShareSharp";

const ShadowStyle = {
  position: "absolute",
  mr: "15px",
  height: "100%",
  top: 0,
  width: "calc(100% - 15px)",
  backgroundImage: "linear-gradient(180deg, #00000000,#00000000,#000000)",
};

const ContentStyle = {position: "absolute",bottom: 0,width: "100%", textAlign: "left",p:{lg:2,xs:"10px"}}

const ShareStyle = {position:"absolute",top: 0,right:{xs:0,lg:0,md:"12px"},p:{xs:2,lg:2,md:"8px"},zIdex:"999"}

const HomeSlider2 = ({ img1, name1,img2,img3,img4,img5,name2,name3,name4,name5,cityname1,cityname2,cityname3,cityname4,cityname5 }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Grid container className="home_slider slider_2">
      <Grid item xs={12}>
        <Box>
          <Slider {...settings}>


            <Box>
            <Box sx={{ pr: "15px", position: "relative" }}>
              <img src={img1} className="img-fluid rounded rounded-2 w-100 h-100 minh180 fit" />
              <Box className="rounded rounded-2" sx={ShadowStyle}></Box>
              <Box sx={ContentStyle}>
                <Typography sx={{ color: "#fff",fontSize:{lg:"12px",md:"10px"},fontWeight:"100"}}>{cityname1}</Typography>
                <Typography sx={{ color: "#fff",textDecoration:"underline",textUnderlineOffset:"5px",fontSize:{lg:"15px",md:"12px"}}}>{name1}</Typography>
              </Box>
              <Box sx={ShareStyle}>
                <ShareSharpIcon sx={{bgcolor:"#fff",borderRadius:"50%",p:"5px"}}/>
              </Box>
            </Box>
            <Box className="p-2">
                <Typography sx={{color:"#1D293F"}}>Deep Sea Welder</Typography>
                <Typography sx={{fontSize:"12px",color:"#6F6F6F"}}>Posted 29 Dec 2022</Typography>
              </Box>
            </Box>
           

            <Box>
            <Box sx={{ pr: "15px", position: "relative" }}>
              <img src={img2} className="img-fluid rounded rounded-2 w-100 h-100 minh180 fit" />
              <Box className="rounded rounded-2" sx={ShadowStyle}></Box>
              <Box sx={ContentStyle}>
              <Typography sx={{ color: "#fff",fontSize:"12px",fontWeight:"100"}}>{cityname2}</Typography>
                <Typography sx={{ color: "#fff",textDecoration:"underline",textUnderlineOffset:"5px"}}>{name2}</Typography>
              </Box>
              <Box sx={ShareStyle} className="share_icon">
                <ShareSharpIcon sx={{bgcolor:"#fff",borderRadius:"50%",p:"5px"}}/>
              </Box>
            </Box>

            <Box className="p-2">
                <Typography sx={{color:"#1D293F"}}>Automobile Service Manager</Typography>
                <Typography sx={{fontSize:"12px",color:"#6F6F6F"}}>Posted 29 Dec 2022</Typography>
              </Box>
            </Box>

           <Box>
           <Box sx={{ pr: "15px", position: "relative" }}>
              <img src={img3} className="img-fluid rounded rounded-2 w-100 h-100 minh180 fit" />
              <Box className="rounded rounded-2" sx={ShadowStyle}></Box>
              <Box sx={ContentStyle}>
              <Typography sx={{ color: "#fff",fontSize:"12px",fontWeight:"100"}}>{cityname3}</Typography>
                <Typography sx={{ color: "#fff",textDecoration:"underline",textUnderlineOffset:"5px"}}>{name3}</Typography>
              </Box>
              <Box sx={ShareStyle}>
                <ShareSharpIcon sx={{bgcolor:"#fff",borderRadius:"50%",p:"5px"}}/>
              </Box>
            </Box>
            <Box className="p-2">
                <Typography sx={{color:"#1D293F"}}>Interior Fabricator</Typography>
                <Typography sx={{fontSize:"12px",color:"#6F6F6F"}}>Posted 29 Dec 2022</Typography>
              </Box>
           </Box>

            <Box>
            <Box sx={{ pr: "15px", position: "relative" }}>
              <img src={img4} className="img-fluid rounded rounded-2 w-100 h-100 minh180 fit" />
              <Box className="rounded rounded-2" sx={ShadowStyle}></Box>
              <Box sx={ContentStyle}>
              <Typography sx={{ color: "#fff",fontSize:"12px",fontWeight:"100"}}>{cityname4}</Typography>
                <Typography sx={{ color: "#fff",textDecoration:"underline",textUnderlineOffset:"5px"}}>{name4}</Typography>
              </Box>
              <Box sx={ShareStyle}>
                <ShareSharpIcon sx={{bgcolor:"#fff",borderRadius:"50%",p:"5px"}}/>
              </Box>
            </Box>
            <Box className="p-2">
                <Typography sx={{color:"#1D293F"}}>Automobile Service Manag</Typography>
                <Typography sx={{fontSize:"12px",color:"#6F6F6F"}}>Posted 29 Dec 2022</Typography>
              </Box>
            </Box>

            <Box>
            <Box sx={{ pr: "15px", position: "relative" }}>
              <img src={img5} className="img-fluid rounded rounded-2 w-100 h-100 minh180 fit" />
              <Box className="rounded rounded-2" sx={ShadowStyle}></Box>
              <Box sx={ContentStyle}>
              <Typography sx={{ color: "#fff",fontSize:"12px",fontWeight:"100"}}>{cityname5}</Typography>
                <Typography sx={{ color: "#fff",textDecoration:"underline",textUnderlineOffset:"5px"}}>{name5}</Typography>
              </Box>
              <Box sx={ShareStyle}>
                <ShareSharpIcon sx={{bgcolor:"#fff",borderRadius:"50%",p:"5px"}}/>
              </Box>
            </Box>
            <Box className="p-2">
                <Typography sx={{color:"#1D293F"}}>Deep Sea Welder</Typography>
                <Typography sx={{fontSize:"12px",color:"#6F6F6F"}}>Posted 29 Dec 2022</Typography>
              </Box>
            </Box>



          </Slider>
        </Box>
      </Grid>
    </Grid>
  );
};
export default HomeSlider2;

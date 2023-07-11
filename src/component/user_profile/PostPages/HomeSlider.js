import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";

const ShadowStyle = {
  position: "absolute",
  mr: "15px",
  height: "100%",
  top: 0,
  width: "calc(100% - 15px)",
  backgroundImage: "linear-gradient(180deg, #00000000,#00000000,#000000)",
};

const ContentStyle = {position: "absolute",bottom: 0,width: "100%", textAlign: "center"}

const HomeSlider = ({ img1, name1,img2,img3,img4,img5,name2,name3,name4,name5 }) => {
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
    <Grid container className="home_slider">
      <Grid item xs={12}>
        <Box>
          <Slider {...settings}>


            
            <Box sx={{ pr:{lg:"15px",xs:"5px"}, position: "relative" }}>
              <img src={img1} className="img-fluid rounded rounded-2 w-100 h-100 minh180 fit" />
              <Box className="rounded rounded-2" sx={ShadowStyle}></Box>
              <Box sx={ContentStyle}>
                <Typography sx={{ color: "#fff", mb: 2 }}>{name1}</Typography>
              </Box>
            </Box>

            <Box sx={{ pr:{lg:"15px",xs:"5px"}, position: "relative" }}>
              <img src={img2} className="img-fluid rounded rounded-2 w-100 h-100 minh180 fit" />
              <Box className="rounded rounded-2" sx={ShadowStyle}></Box>
              <Box sx={ContentStyle}>
                <Typography sx={{ color: "#fff", mb: 2 }}>{name2}</Typography>
              </Box>
            </Box>

            <Box sx={{ pr:{lg:"15px",xs:"5px"}, position: "relative" }}>
              <img src={img3} className="img-fluid rounded rounded-2 w-100 h-100 minh180 fit" />
              <Box className="rounded rounded-2" sx={ShadowStyle}></Box>
              <Box sx={ContentStyle}>
                <Typography sx={{ color: "#fff", mb: 2 }}>{name3}</Typography>
              </Box>
            </Box>

            <Box sx={{ pr:{lg:"15px",xs:"5px"}, position: "relative" }}>
              <img src={img4} className="img-fluid rounded rounded-2 w-100 h-100 minh180 fit" />
              <Box className="rounded rounded-2" sx={ShadowStyle}></Box>
              <Box sx={ContentStyle}>
                <Typography sx={{ color: "#fff", mb: 2 }}>{name4}</Typography>
              </Box>
            </Box>

            <Box sx={{ pr:{lg:"15px",xs:"5px"}, position: "relative" }}>
              <img src={img5} className="img-fluid rounded rounded-2 w-100 h-100 minh180 fit" />
              <Box className="rounded rounded-2" sx={ShadowStyle}></Box>
              <Box sx={ContentStyle}>
                <Typography sx={{ color: "#fff", mb: 2 }}>{name5}</Typography>
              </Box>
            </Box>



          </Slider>
        </Box>
      </Grid>
    </Grid>
  );
};
export default HomeSlider;

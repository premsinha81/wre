import { Box, Container, Grid, Stack, ThemeProvider, Typography, createTheme } from "@mui/material";
import React from "react";
import Post from "./PostPages/Post";
import Groups from "./RightSidePages/Groups";
import FindJob from "./RightSidePages/Findjob";
import SearchProgram from "./RightSidePages/SearchProgram";
import ChatPost from "./PostPages/ChatPost";
import HomeSlider2 from "./PostPages/HomeSlider2";
import CusButton from "./PostPages/CusButton";
import HomeSlider from "./PostPages/HomeSlider";
import { useState } from "react";
import AddPost from "./PostPages/AddPost";

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthMd: {
          maxWidth: 320,
        },
        maxWidthLg: {
          maxWidth: 500,
        },
      },
    },
  },
});

const Index = () => {

  const [addpost , setAddPost] = useState(false)


  return (
    <Box sx={{ bgcolor: "#ECECEC", py: 5 }}>

{
        addpost && 
        <Box sx={{bgcolor:"rgba(0,0,0,.5)",position:"absolute",top:0,width:"100%",height:"100%",zIndex:"9999"}}>
        <AddPost addpost={addpost} setAddPost={setAddPost}/>
        </Box>
      
    }

      <ThemeProvider theme={theme}>
        <div className="container">

         
            <Grid container spacing={"1rem"}>

              <Grid item lg={8} md={8}  xs={12}>
                <Box>
                  <Post 
                  onClick={()=>setAddPost(true)} 
                  onclick={()=>setAddPost(true)} 
                  />
                </Box>

                <Box sx={{ mt: 2 }}>
                  <ChatPost mb={" mb-lg-5 mb-2 "} />
                </Box>

                <Box sx={{ mt: 2 }}>
                  <Stack
                    direction="row"
                    sx={{
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb:{xs:2,lg:0}
                    }}
                  >
                    <Box>
                      <Typography
                      className="fs15-s"
                        sx={{
                          fontWeight: "bold",
                          fontSize:{lg:"25px",xs:"20px"},
                          color: "#050505",
                        }}
                      >
                        Top Jobs near You
                      </Typography>
                      <Typography
                      className="fs7-s"
                        sx={{ fontSize:{lg:"16px",xs:"10px"}, color: "#546179", mb:{lg:2} }}
                      >
                        See all the trade hirings near Philadelphia
                      </Typography>
                    </Box>

                    <Box>
                      <CusButton
                        name="Check All"
                        bgcolor="#3D55A5"
                        color="#fff"
                        size="14px"
                      />
                    </Box>
                  </Stack>
                  <HomeSlider2
                    img1="./slider1.jpg"
                    name1="Martin Lockheed"
                    name2=" Ford"
                    name3="John Mills Co."
                    name4="Ford"
                    name5="Ford"
                    img2="./images2.jpg" 
                    img3="./images3.jpg" 
                    img4="./slider1.jpg" 
                    img5="./images3.jpg" 
                    cityname1="New City, Philadelphia"
                    cityname2="New City, Philadelphia"
                    cityname3="New City, Philadelphia"
                    cityname4="New City, Philadelphia"
                    cityname5="New City, Philadelphia"
                  />
                </Box>

                <Box sx={{ mt: 2 }}>
                  <ChatPost />
                </Box>

                <Box sx={{ mt: 2 }}>
                  <HomeSlider
                   img1="./slider1.jpg"
                   name1="Construction Courses"
                   name2=" Automation Courses"
                   name3="Welding Courses"
                   name4="Ford"
                   name5="Ford"
                   img2="./images2.jpg" 
                   img3="./images3.jpg" 
                   img4="./slider1.jpg" 
                   img5="./images3.jpg" 
                  />
                </Box>

                <Box sx={{ mt: 2 }}>
                  <ChatPost />
                </Box>

                <Box sx={{ mt: 2}}>
                  <img src="./form_img.jpg" className="img-fluid w-100 rounded rounded-2" style={{maxHeight:"400px",width:"100%",height:"100%"}}/>
                </Box>

                
                <Box sx={{ mt: 2 }}>
                  <ChatPost img={"./post_banner.jpeg"} mb={" mb-lg-5 mb-2 "}  />
                </Box>
                <Box sx={{ mt: 2 }}>
                  <HomeSlider
                   img1="./slider1.jpg"
                   name1="Construction Courses"
                   name2=" Automation Courses"
                   name3="Welding Courses"
                   name4="Ford"
                   name5="Ford"
                   img2="./images2.jpg" 
                   img3="./images3.jpg" 
                   img4="./slider1.jpg" 
                   img5="./images3.jpg" 
                  />
                </Box>

                
                {/* <Box sx={{ mt: 2 }}>
                  <ChatPost />
                </Box> */}

                <Box sx={{ mt: 2}}>
                  <img src="./form-img2.jpg" className="img-fluid w-100 rounded rounded-2" style={{maxHeight:"400px",width:"100%",height:"100%"}}/>
                </Box>


              </Grid>
              
              <Grid item lg={4} md={4} xs={12}>
                <Grid container spacing={{sm:2,xs:0}}>
               <Grid item xs={12} sm={6} md={12}>
               <Box>
               <FindJob />
                  <Groups />
                </Box>
               </Grid>
               <Grid item xs={12} sm={6} md={12}>
               <Box sx={{ mt:{lg:2,sm:0,xs:2} }}>
               <SearchProgram searchName={"Search Program"} />
                </Box>
               </Grid>
               <Grid item xs={12} sm={6} md={12}>
               <Box sx={{ mt: 2 }}>
                  <img
                    src="./learning_img.jpeg"
                    className="img-fluid w-100 rounded rounded-2"
                  />
                </Box>
               </Grid>
               <Grid item xs={12} sm={6} md={12}>
               <Box sx={{ mt: 2 }}>
                  <SearchProgram searchName={"Job Search"} />
                </Box>
               </Grid>
                
               
               
                </Grid>
              </Grid>
            </Grid>
         
        {/* </Container> */}
        </div>
      </ThemeProvider>
    </Box>
  );
};

export default Index;

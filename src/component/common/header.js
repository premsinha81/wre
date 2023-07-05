import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import Menu from "./menu";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactComponent as YourSvg } from "./svg.svg";
import { ReactComponent as BurgerSvg } from "./burger.svg";
import CancelIcon from "@mui/icons-material/Cancel";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Grid, List, ListItem, Stack } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
//import { useState } from React

const Iconstyle = { width:35,height:35,borderRadius:"50%",border:0,bgcolor:"#283b8b",color:"#fff",p:"5px"};
const MenuStyle = {color:"#3d55a5",fontWeight:600,textTransform:"uppercase",fontSize:14,whiteSpace:" nowrap"}
const Loginbtn = {color:"#fff",fontWeight:600,textTransform:"uppercase",fontSize:14,backgroundColor:"#3d55a5",borderRadius:"50rem",padding:"5px 24px"}

function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const stickyHeader = useRef();

  const[islogin,setislogin]=useState(false)
  const logged_token = localStorage.getItem("token");
  useLayoutEffect(() => {
    const mainHeader = document.getElementById("mainHeader");
    let fixedTop = stickyHeader.current.offsetTop;
    const fixedHeader = () => {
      if (window.pageYOffset > fixedTop) {
        mainHeader.classList.add("fixedTop");
      } else {
        mainHeader.classList.remove("fixedTop");
      }
    };
    window.addEventListener("scroll", fixedHeader);
  
  }, []);

  useEffect(()=>{
    const login = localStorage.getItem("usr_name");
if(login){
  setislogin(login)

}else{
  setislogin('login')
}
  },[])




  return (
    <>
      <nav
        id="mainHeader"
        ref={stickyHeader}
        class="navbar navbar-expand-lg bg-white1 navbar-light mainHeader"
      >
        <div className="container position-relative">
          <Grid container sx={{ py: 1 }}>
            <Stack
              direction="row"
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box className="svgLogo">
                <a href="\" className="navbar-brand p-0">
                  <YourSvg />
                </a>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="d-lg-none"
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                {isNavExpanded ? (
                  <CloseOutlinedIcon sx={Iconstyle} />
                ) : (
                  <MenuIcon sx={Iconstyle} />
                )}
              </Box>
            </Stack>
          </Grid>

          <div
            className={
              isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }
          >
            <div class=" navbar-nav ms-auto ">
              <List>
                <ListItem>
                  <a href="/search-program" style={MenuStyle}>
                   <SearchOutlinedIcon sx={{color:"#283b8b"}}/>
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#" style={MenuStyle}>
                    Community
                  </a>
                </ListItem>
                <ListItem>
                  <a href="/carrier" style={MenuStyle}>
                    Career
                  </a>
                </ListItem>
                <ListItem>
                  <a href="/Job" style={MenuStyle}>
                    Jobs
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#" style={MenuStyle}>
                    
                    Newsroom
                  </a>
                </ListItem>
                {logged_token ? (
                  <ListItem>
                    <a href="/dashboard" style={MenuStyle}>
                      Hello {localStorage.getItem("usr_name")}
                    </a>
                  </ListItem>
                ) : (
                  <>
                    <ListItem>
                      <a href="/Signup" style={MenuStyle}>
                        Join us
                      </a>
                    </ListItem>
                   {islogin ?
                    <ListItem className="login_btn">
                     
                    <a href="/Login" style={Loginbtn}>
                   {islogin}
                    </a>
                  </ListItem> :
                   <ListItem className="login_btn">
                   <a href="/Login" style={Loginbtn}>
                     {islogin} 
                   </a>
                 </ListItem>

                   }
                  </>
                )}
              </List>

              {/* <ul className="border border-success">
              
                           
              
                {logged_token ? (
                  <li>
                    <a href="/dashboard" class="nav-item nav-link">
                      Hello {localStorage.getItem("usr_name")}
                    </a>
                  </li>
                ) : (
                  <>
                    <li>
                      <a href="/Signup" class="nav-item nav-link">
                        Join us
                      </a>
                    </li>
                    <li className="login_btn">
                      <a class="btn btn-square1 text-white me-2 " href="/Login">
                        Login
                      </a>
                    </li>
                  </>
                )}
              </ul>
              */}
            </div>
          </div>

          {/* <div>
               <a href="\" class="navbar-brand d-flex align-items-center">
                    <div className="svgLogo"><YourSvg /></div>
                </a>
               </div>
                <button className="hamburger" onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                }
                }>
                    {
                        isNavExpanded? <div style={{color:"#fff"}}><CancelIcon/></div>:     <BurgerSvg />
                    }
                </button> */}
          {/*<button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>*/}
        </div>
      </nav>
    </>
  );
}

export default Header;

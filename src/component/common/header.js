import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import Menu from "./menu";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactComponent as YourSvg } from "./svg.svg";
import { ReactComponent as BurgerSvg } from "./burger.svg";
import CancelIcon from "@mui/icons-material/Cancel";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Grid, List, ListItem, Stack } from "@mui/material";
import Dropdown from 'react-bootstrap/Dropdown';
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import img1 from "../iconG.svg"
//import { useState } from React
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Iconstyle = { width: 35, height: 35, borderRadius: "50%", border: 0, bgcolor: "#283b8b", color: "#fff", p: "5px" };
const MenuStyle = { color: "#3d55a5", fontWeight: 600, textTransform: "uppercase", fontSize: 14, whiteSpace: " nowrap" }
const MenuStyle1 = { color: "#fff", fontWeight: 600, textTransform: "uppercase", fontSize: 14, whiteSpace: " nowrap" }
const Loginbtn = { color: "#fff", fontWeight: 600, textTransform: "uppercase", fontSize: 14, backgroundColor: "#3d55a5", borderRadius: "50rem", padding: "5px 24px" }

function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const stickyHeader = useRef();
  const [islogin, setislogin] = useState(false)
  const [isLoggedin, setIsLoggedin] = useState(!!localStorage.getItem('token'));

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

  useEffect(() => {
    const login = localStorage.getItem("usr_name");
    if (login) {
      setislogin(login)

    } else {
      setislogin('login')
    }

  }

    , [])

    function refreshPage() {
      window.location.reload(false);
    }

  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('usr_name');
    localStorage.removeItem('usr_id');
    localStorage.removeItem('usr_email');

    // Update the authentication state to indicate that the user is logged out
    setIsLoggedin(false);
    setislogin('login');
    refreshPage()
  };


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
                  <a href="http://community.allnuud.com/" style={MenuStyle}>
                    Community
                  </a>
                </ListItem>
                <ListItem>
                  <a href="/wre/program" style={MenuStyle}>
                    Trade Programs
                  </a>
                </ListItem>
                <ListItem>
                  <a href="/wre/Job" style={MenuStyle}>
                    Trade Jobs
                  </a>
                </ListItem>
                <ListItem>
                  <a href="https://resources.allnuud.com/" style={MenuStyle}>

                    News & Articles
                  </a>
                </ListItem>





                {logged_token ? (
                  <ListItem>
                     <Dropdown>
      <Dropdown.Toggle variant="successs" id="dropdown-basic">
      <div href="/" class="nav-item nav-link1 noti">
                      <i class="fa fa-bell"></i>
                      <span class="num-count">13</span>
                    </ div>
      </Dropdown.Toggle>

      <Dropdown.Menu className="menu-notification">
      <Dropdown.Item className="imgdrapdrap" href="#/action-2"></Dropdown.Item>
        <Dropdown.Item className="imgdis rr" href="#/action-1">
          <img className="imgnotification " width="100%" src="data:image/jpeg;base64,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" /> 
         <span className="contentspost"> <b>kerem suer</b>  commented <br></br> on your photo  </span></Dropdown.Item>
               <Dropdown.Item className="imgdis" href="#/action-1">
          <img className="imgnotification" width="100%" src="data:image/jpeg;base64,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" /> 
       <span className="contentspost1">  <b>manish  </b>  Shared  your post  </span></Dropdown.Item>
         <Dropdown.Item className="imgdis" href="#/action-1">
          <img className="imgnotification" width="100%" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAzAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAgMFBgcBAAj/xABAEAACAQMDAQUECAQFAgcAAAABAgMABBEFEiExBhNBUWEUInGRBzIzQlKBscEjU3KhFWJz4fAkQxY0Y4KSwtH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEAAX/xAAiEQACAgICAgIDAAAAAAAAAAAAAQIRAyESMQRBMlETImH/2gAMAwEAAhEDEQA/ALtmuZoT263/AJornt1v/NFJaDTC91e3UJ7bb/zBXDfQfzBXWjqYUTXs0Ib6BThnAPrSvbIP5gruSO4sIzXs0M15AP8AuL86T7dFt3Fht865ySO4thma6DQft0H8wV722D8Yoc0dxYdmnAOKqnaftfaaBaBwO+uHz3cY8fU+QrJtV7Ya7q0rmbUZ443P2MLlFHpxz86ZOzqPoSu4I8K+a4GuXb3pmOfxSHmpzT9U1DT2RoLqeFlPAEh2n9qFh4m7RDrSqqPZbtfHeBba/AjnZgoccBmPQGrcaZCtNHK4RXT1rxrgCaSa6aSa4Ak0mumkMa444xpDdK6TSSa444eRV+s//LR/0iqCKv1qcW8Y/wAoooJmHdL+AV3u1/AK9HLuByOlPrg+FR0VGDEn4BSe5TrsFFFR5VxlGOlFoFkXrseXh2jBwORS0CLHlwoHiTStZIDw58hS2gWeDu2GQ3FSiikno5H3LnACMfTmkalGPYXQAD3hwKLj0iKxdGGMsM0PqcW2JnB4yK6adAxvZyztgYEyvUUnVpYNK0y4v50ykK7sDxPlUhZ47iP4VWvpQmKdmVgXO64uUTA9Mt/9aokqFk3Zn0VpddoZJb++nZVkbCjr+Q9BUtp3ZSzyN438/eNd0pDDZRR56Lz61ZNLG7BAzQky+OCHdK7K6Z9+zibA64qX/wDBWjyqQtuYt3XY2KP09digsMZqbtCrMMcip7KuKKJq/wBHxis5JdGupPaIxuRH+9jnGaO+j7tLPrdlLa6hkX1odsm4YLep9a0IwKYshRjFZtLpzaN9JSzQoBBqCHcB4Ngn9jVYNp0zNkintFzNcNdNJNWMpykmlUhqAbEmmzSzSDXHCDSDSiaQxrjjq8kfEVfoOIUHoKoUf11/qH61f4vs1+FFBMrAYeNd7+RBwRRbQCh5YwKlxKWMPey+Ypv26UnBxXTGHfaOtcvLIQWaz94d27gUKZ1iNdmZHg90NkV2GWVosgkemKVq7QbbcSrlyPdNERRjuxxSR2ysnoT7TckBe84HTNDaldyRaezMok5HFFsgFDX0amwff0J4rsi0CD2ctNRmNuhVABjpVf7cSzXcVp3oAhhZpXPlxj9zVgtY0WBOeKqWpoZ7uVJ5XdFdk2lvdxnn9BTLoHbIUaxC20WcM03gAEIoyy7QahbPn/DJimeW2nimbK1kito47YmNlyrSAZYAE/rUzo1tebplS6ef3CWUoQaZVdDW6stfZrW4dXsjkCOQEgqTyMeNDTdvrXTndEtmnKPtwnWqxo+hx9oO0F0IriWBooxGpj4DSDOc/DOPyoy7hvIIoEsY0iTZglRxuHBB/MGlaSKJtouumfSHZXLRe1xTW0b9WkQgL86O1efTdSuLC7sLu2uHimX7GUNgdPD40HpEWoy2Ful6sDRsPe2tk48xXuz/AGYgXVdQvEcr/wBQY4cdAABuP/yz8q66YrjcSZNINCaheva3TQrATgcjOaG/xOYni2NWTMbVOiTpLUxbXEk32iBR5U+1EAhqbNLammNANiTTbmlMabY1xw7AczIP8y1f0ICDPlWf2vM6f6i1fj0HwooJm8t0uOc8UBcXLEe6rfKlvEx48K4UcDGalyZTihlJe7tZZcEyNwBjmnNWkPs0cS5JUDOPOm5N46GmIWkN5Hls5ODmlt7OpCe0Icy2W1WOF8BUjbiSXblwoVeh8aE7T94O4aJivnik2skuxSznpSwZWXSJGzjCvIXyctnmmtTwbWQKCwyOBXAZMYLGk3O//D3wSHLdRRm7QsOyMiFzPE0cTGIqpIyOtV65VheyvJ1GMH1zzVyt1kEKsWJPjUZr+jCe1urqNyrrGXChepAopNoKaTZF6ZYyTXO6KVo26ngEGn9WNxZKyxXzB5PdbuVVep8+tC2epmLSRPDnvpCqcfdOM/tUHed5dTtFNdqJWGSh8KG7KqqL59HVsIb4FSoC8E5zk+tWXXtKNqZJtO2pHPKXkjI3pnxOPA/A/lWd9ltN1izZxpk0Ks/G5xkD14q+28V5YWrpcT22ZTlsNjJx4ZoMdIltBjvriBUV7SKILgEIXI/uKMmtzaQJHau5kiww8dxLck/3NVvsnqrrrclgzK0ZUuGU8LjrVpF7Gby4wu8BVQMPA8n96MVy0JKSi7GrmJWlLFQWxyTTYjjJOFHA8qRdOzvw2DjcRXbVf4RbOd1bVGonnSlcmMyACQgDGKbJpTk72NIJqbCIY00xpbGmWNAJwmmmNKY00x5oBCbHm6Qf+oK0A+HwrP8ATObyP/VFaDiigmZNImaSSD06jwpjamQecilZQEtg5PWocy3FDFy4HiKFgbN3GB+KipRE31t1DRxoLyLYzfWHWg5HcSbeCG5leGZd3uZX0qOjjVS8Y+4fGn7u5Szvo5pHwmwjHnTBKyTyTJIAr9BRjJcTmmmEB4TNFCWxI/IXzFev02wgDgZrluYIjvkKtIPqt5Ck3k6PEdwwM9TXZGqDjWwpAiWwZyAvmaRLdRCLu+u8bSM+BpmGeCVEScB48cr50FdRBp8wMFjU8Cni0kTcW2ZrHdSadeXGn3BwIpSvHXjofzFTCGC7MUyY7xejHrQvbbTS1697D9ooHeAfeGOtRuhXgjfHPJxg+FBx9lISd0zWuyWrXEMaIgh+sG+yz4Y67hVo1LT7PWo4pNQihmSJt6x7PvDxrNdOQB4mBIUnnB4q23mrw2WmtDbEd93eCxzxmlNDaohr68h0rULy4gCqJAI12j5j9KtujJIthG9z9pIN7fn0Hyqk9ndNl7Sal30vNlYENJ5SN1C//vpWhE84xVsS9mPNPdHiu5sgjp4il4CRccVxQa9LwhqzZnQC5940kmkk8mkM1SY5x2ph2pUjUw7VxxxmpG7LikO1IVvfFAJJaLzfRf6orRSOlZ12fOb+D1krRuKKCZs9uM/7UzJCAKPkYDxFBzzJjqKnSHtgMygUNEo9pjPrTtxOm7GaaikBuEx0zSMaLF67D3iRk+BpdvF/DUenlXdamSO2V286CtNYWSYRqvAwKTH2Un8USJt80LeJm3ZT4Yo2O+iMjI2QR4UNqLbQ2CMcVTItCY3s9bwBbdfh5U4sAxyB5k9MUFd65p+nWyPc3C5A+zQ5Y/lVO1jtreX8E8dnCtvCylc5JYj41SMHRGc0mH388V5cPND70THCk+IHFVa906Szu2uLeMvCTzGo6VM6KpFhCh8FAqXgtW3qw4yOKWy9aIqy1yDu0Ik2BeSrGrBpljqXatl9kiaCw3DfcSdGGedvman9A0qwl2zT2MDSg/WaMGrtaEDCqAEXwHhSex90Rer6Uuk9hNUt9K3RPDZSyRsvDb1Xduz58UnSbpr3T4Ljks6gtkcg4pntlrUTWsukWjEtOpW5ZfuRnqPiRkfCqvPq0+mSW727kRl/fX7uOByK24MTlFs83yvIUJpF8FN3bbY/hUNZ9poHIW5iZDnG5eRn4UbcX9tdQlrWZJBnBwa6UJR7OjlhLpgzNj86anmSNS7thR40mRuMVRdU1O5jv5omnlMXeEbMcAVGTo0RjZam1WBt3dh3C9SBxTglV1DKcg1Tf8S2wsFllVcdNtM6fqTwyOY5ZGjPPvg8UqY0o0XTJbP71HPqsdvqAtp43TIyJOqmmdK1E6hEWYY2nGRR2yOQnfGrZGPeGaItEx2UmSe9tmjYMDJ1FaY3Wsw7HxRw6laxxKFXcTgVqWM9aJxhuparqkE2IrbepHlQB1rUxy+ng/8Atq3m7sTyX+YpD3dgkZkJBA/y1k232ak0vRSHvdSu71CbVooh12rUxp7ubqMOpxu5zUncaxZKB3MJkPwxUe95dTybkQRD0FOoyoRyVjnaK4Nm8SFBKj84bmgDcW0UYmlSOPPOc4obtlrccDRWce1rlUDM2M93n96qVzM8uHkYsSOrc1bF47ltmfN5ShpFouu0trbhvZQZZD5cD51AX+vX16W76ZkT8KnAqOeXzoSWTj1Y1p/FGJl/NOY779y4GCXYhRU5FpBmljskILMMfE0P2Zt1knknYgmNTtHqfGrR2VVJ+0Fqz42F2A+WM/OrRhcWyMp1NIHsbQwxhHXBUYIIqetICYVYjpU/qugZkNzCuWPLoPH/ADCoycd3CQDtGOa86cXFntY2pKxlu0EOnLhixK9VQc0NL2yvb1HjsgbcFT7x5P8AtVXuBJJLKYnzubFO28ZjxJM21F4GPGt2Hx4UmzyvJ8vJycYkrY3fc259pYtJuJJ6lyf+Cl32+S2VXGWkbaQPD0oDT/8AqrjvWXCJyvzo+1bvChY8IxYk1tSSVI8uTbdsVdW3eQo0blZAAwdf759DzQfY67uZ7+8t5Jc90AR8aIjmJ07eOqEr+RqH7F3SxatdzSfZudpPlSz7Q8F+rZc49QLFllVgy9cDOKrOsafeG7e4iheWJm3Bozn5jrUrfD2Rz3je+7ZGPEUb2el77dNcN/A3bVzzzUcnjwmaMPl5Mf8ASg3t3hXUhl8D6U7pqyHR57qRjgNtXnwq/wCu9l9P1lHMid1MB7s8fDD0P4h8ar50HutIm0tpNpUjLefjmvNz4p4metg8iGZf0d7PRkWCdSW56VJ5KHkGofTrW/tLte5lBiVMLk+VWXR+0V4u5dR0qN4MZ7xME/KhbXoeov2G9lCp1q1C9CSf7VqFUXR9JuV7QwXsVqyWjKSM44yKvYp0I1RghmfPuzIR8aJH8Wzd3IwgJOOan7fsboydYnlJ65bipvT9Is7JNlvZIsfkeagotsryRllndzXj7bKxuZj5iIgH51NyW9/Y6TPqN7am2ggXcxkP5D5nitKWO3ChTFHGB4LxWU/TH2hSSSLQbKVtkZEt0u7I3dVX5HNaYK32ZpujOL25kubua5lJLyMSaeiJa1QmgXPunNGQnbZpnyzWuPZjybVjEzZIA8aZkP8AE+FOZyGkPToKRCV9si3jK94u4emaR7GiqLTpNkbPTDI6lZ5/PwSpHsid+pjk+4cL6Uq+kXupCGBOM/AUz2EPeamg/ESa01SpGWLcnZtQlCWdrK33wOfI1BdqND9pgae2cRMeWGMg+oqwxQhtNhiPPug0Neqy6bLGedq+6fKskop9nqKTj0Y/3Rts+OwnnHWg7qQysI1OEUc/E8/vR91Juhdc4OT+tRZO50RTlmAz/atkdJI8iTuTZNWQWKzL+Gw123OzTwzZ3yZam709zYmJeu0D50u9BWGBAPACqEzh/haTMfTNRGiWpfs1dzLxIz5B+FSupOE0qUeS0vTofY+zlujDljk0tXIdOosEW/Op9mmmZibqyJSQeO3wNTsLiGw0ixjOJHCOw8emSf71SIZ203Xp7f8A7Fx7sinoQau1opbU3uWXIQLDCvpgbiKEXYcka6LQshLAKfrDINPro0erXEKLKIWZcFsZ6eFRlrIoieQfUDbEz1qUsZ2j7ts4KnIIoZIKcaYcM+M7JO27DW0DbprppeOhQCu3XYqwaMrazyxPjgbsjNWSO5We1SVT9YZqJ1O77peG58K81w2exy0iW0fvBYRRXHE0Q2P8R40dVW7J30kl7d287EliHUk1aaAUQAMSpthgVKaEeTlmNALrEEv1Jl/M4oiANcnEcgY+QNTsegTtLrFr2f0e51CchjGuI0/G56D5/wDOK+b768mvrye7um3zTyGSQ+pq9fS/ra3esJo8D5jsCTMR0Mp4I/Icfmaz08EVoxqkZskrdHnOYifKjZAe7jiXyFAScAeWRUnCM5Y9TV47bM89JAtxhcKOgpib3WBHHNOXLb58elJnGUoPsaPouV7IFtdg6uKf+jpc65CnhhqibW4FwsTMesYFTv0cJntREnkDWhu0ZYKnRtqrtijHkKbvIs2knqpolV3uvkBSL8juJP6T+lZD0jBbpu7mmHqf1NMacO+vgPAKuaVeH+NMR+I/qaTojBJrmQ8bF/atkfR5cl2SFz/FbHgZgB8BT16cvA34c0zFw0efItSm9+OMnwpyRyZPbRDAPqyct+VS+qIEt4Il6FlAFC6XF/HQmi9R+1hB4G8GiK+6KT2mQR6wkq8HIJHrVxeZu/3IMEoiRIPEsoJNVW/C3+ryIeSrgDFWS832k1vK7Dc0Sxxf5cD3m+PQfOkiqdlZv9UiajkBZIB9jAvvH8TVK28m4Z9KrFrdIeBwi8586mreU90pxgnk05ItukX+21eNiePeFAX9yZZKBspiT1wDxS5c7iD1rFnhxken4uTlCvod0y5NnqttMeELbW+BrROfDmsuuMmP3eo5rQtEvVvNLt5iQGK4YetZmakYXJczIxAkOAPGpDsb2k1GGLVbhGj3wx+5leK9XqnXRSzK55pJ53llYtJJIzux6sSckn86bl6CvV6tfoxexD/UHxFScH1T8K7Xqpj7J5fiiOk+2b40uT6gr1epPsf6JHSmPdL6Dird9GRz2shJ9f0Ner1Xj8SD+ZukfABobUeLOX+g/pXq9WY3s+fr4kTSf1H9a5p3C3OPH/avV6tcezzJeySQ8j+k06PqD4VyvVUiyT0w5wTRF1goMgGvV6j6E9lM0PEnaVywydzVN6+xNxaqfqiHgfma9XqnHplsnaFaUBJJsYe6DwKnonZizE8gcV6vU5Jh8TkOMfiqQuPrA16vVn8j4mrw/mMkDFSHZ64ljsCisdokbFer1Yn2emj/2Q==" /> 
          <span className="contentspost"> 
<b>Chad Engle</b> posted  a photo <br></br> on your wall. </span></Dropdown.Item>
            </Dropdown.Menu>
    </Dropdown>
                   
                  </ListItem>
                ) : (
                  <>
                    {/* <li>
                    <a href="/Signup" class="nav-item nav-link">
                      Join us
                    </a>
                  </li>
                  <li className="login_btn">
                    <a class="btn btn-square1 text-white me-2 " href="/Login">
                      Login
                    </a>
                  </li> */}
                  </>
                )}

                {isLoggedin ? (
                  <ListItem>
                    {/* <a href="/dashboard" style={MenuStyle}>
                      Hello {localStorage.getItem("usr_name")}
                    </a> */}
                    <Dropdown>
                      <Dropdown.Toggle variant="" id="dropdown-basic">
                      <img className="imgnotification" width="100%" src={img1} />
                       <i className="	fa fa-caret-down"></i>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="/wre/UserProfileposts">Profile</Dropdown.Item>
                        <Dropdown.Item href="/wre/Loginandsecurity">Account Setting</Dropdown.Item>
                        <Dropdown.Item href="/wre/Needhelp">Need Help</Dropdown.Item>
                        <Dropdown.Item onClick={handleLogout} >Logout</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ListItem>
                ) : (
                  <>

                    {islogin ?
                      <ListItem className="Loginbtn login_btn


                      ">

                        <a href="/wre/home" style={MenuStyle1}>
                          {islogin}  </a>
                      </ListItem> :
                      <ListItem className="login_btn Loginbtn" >
                        
                        <a href="/wre/home" style={Loginbtn}>
                          {islogin}
                        </a>
                      </ListItem>



                    }
                     {islogin ?
                      <ListItem style={MenuStyle1} className="btn-outline-primary btn-primary-outline





                      ">

                        <a href="/wre/signup" style={MenuStyle1}>
                        Signup  </a>
                      </ListItem> :
                      <ListItem className="btn-outline-primary btn-primary-outline





                      " >
                        <a href="/wre/Login" style={Loginbtn}>
                          {islogin}
                        </a>
                      </ListItem>



                    }

                  </>
                )}
              </List>


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

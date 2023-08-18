import { Avatar, Box, CircularProgress, Grid, List, ListItem, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShareSharpIcon from "@mui/icons-material/ShareSharp";
import CusButton from './CusButton'
import { useEffect } from "react";
import { addPostData, commentData } from "../../../API/PostAddApi";
import Dropdown from "./Dropdown";
import { useContext } from "react";
import { MDBCarousel, MDBCarouselItem,} from 'mdb-react-ui-kit';
import { loadingContext } from "../../../Context/Loading";
import FirstComponent from "./PostTimer";
import EditPost from "./EditPost";


const ChatPost = ({ img, mb,onclicked }) => {

  const [postdata, setPostData] = useState([]);
  const [dropdown, setDropdown] = useState(false);

  const [commentid, setCommentId] = useState("");

  const [idsaved, setIdsaved] = useState(false)

  const [editShow , setEditShow]=useState(false)

  const userName = localStorage.getItem("usr_name")
  const userEmail = localStorage.getItem("usr_email")

  const [commentpostcontent, setCommentText] = useState('')

  const { loadingd, setLoadingd } = useContext(loadingContext)

  const idget = localStorage.getItem("usr_id")


  useEffect(() => {
    let data = addPostData()
    if (data) {
      data.then((data) => {
        setPostData(data.data.result)
      })
    }

  }, [loadingd])
  const HandlePost = (id) => {
    let commentDataPosts = {
      user_id: idget,
      comment: commentpostcontent,
      user_posts_id: id
    }
    let data = commentData(commentDataPosts)
    if (data) {
      data.then((res) => {
        let data = addPostData();
        if (data) {
          data.then((data) => {
            setPostData(data.data.result)
          })
        }
        setCommentText('');
      })
        .catch((error) => {
          alert(error.data.status)
        })
    }
  }

  let rotate;
  if (dropdown === true) {
    rotate = "r-90"
  }
  else {
    rotate = "r-45"
  }

// Start Delete Post (Akash Dubey)
  const handleDelete = (user_id, user_posts_id) => {
    fetch(`https://admin.allnuud.com/api/userpost/delete/${user_posts_id}/${user_id}`, {
      headers: {
        accept: 'application/json'
      }
    })
      .then((res) => res.json())
      .then((json) => {
        
        if (json.status === "Success") {
          alert(json.messege)
          let data = addPostData();
          if (data) {
            data.then((data) => {
              setPostData(data.data.result)
            })
          }
        }
      })
      .catch((e) => console.log(e))
  }
  // End Delete Post (Akash Dubey)

  return (
    <Box>
      {
        editShow &&
        <EditPost/>
      }
      {
        postdata.map((data) => {

          const { id, post, user_id, comments } = data; // add : id, user_id (Akash Dubey)
          return (
            <Grid container sx={{ p: 2, bgcolor: "#fff" }} className="rounded rounded-2 mb-3 priyanka" key={id}>
              <Grid item sm={1} xs={2}>
                <Box>
                  <Avatar className='img_s' src="./img1.png" sx={{ width: { lg: 45, sm: 35, xs: 40 }, height: { lg: 45, sm: 35, xs: 40 } }} />
                </Box>
              </Grid>

              <Grid item sm={11} xs={10} sx={{ mb: 2 }}>
                <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", position: "relative" }}>
                  <Stack direction="row" spacing={2}>
                    <Box>
                      <Typography
                        className="fs10-s"
                        sx={{ fontSize: { lg: "16px", xs: "14px" }, color: "#3C3C3C", fontWeight: 500 }}
                      >
                       <Typography sx={{ color: "#3C3C3C", fontSize: "20px", fontWeight: "600", mb: { lg: 1, xs: 0 } }}> {userName}</Typography>
                      </Typography>
                      <Typography className="fs9-s" sx={{ fontSize: { lg: "14px", xs: "10px" }, color: "#3C3C3C" }}>
                        {/* {userEmail} */}
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
                          <Typography className="fs8-s ps-0" sx={{ fontSize: { lg: "14px", xs: "10px" }, color: "#3C3C3C" }}>
                            12th May 2020
                          </Typography>
                        </ListItem>
                      </List>
                    </Box>
                  </Stack>
                  <Box>
                    <ArrowDropDownIcon className={`fs11-s ${rotate} `} sx={{ fontSize: { lg: "40px", xs: "30px" } }} onClick={(e) => {
                      setIdsaved(id)
                      setDropdown(!dropdown)
                    }
                    }
                    />
                  </Box>
                  {idsaved == id &&
                    dropdown &&
                    <Box sx={{ position: "absolute", top: "100%", right: 0, bgcolor: "#3C3C3C", color: "#fff", boxShadow: 10, minWidth: "150px" }} className="rounded rounded-2">
                      <Dropdown
                        name1={"Edit"}
                        name2={"Blog"}
                        name3={"Remove"}
                        id={id} // add : (Akash Dubey)
                        user_id={user_id} // add : (Akash Dubey)
                        handleDelete={handleDelete} // add : (Akash Dubey)
                        onclicked={()=>setEditShow(true)}
                        
                      />
                    </Box>
                  }
                </Stack>
              </Grid>

             
               

              <Grid item xs={12}>
                <Box>
                  <Typography sx={{ color: "#3C3C3C", fontSize: "20px", fontWeight: "500", mb: { lg: 1, xs: 0 } }}>

                    Welding Classes In Jersey
                  </Typography>
                  <Grid item xs={12} >

     
{/* 
    <MDBCarousel showControls>
  <MDBCarouselItem
    className='w-100 d-block'
    itemId={1}
    src='https://admin.allnuud.com/public/storage/image/a5wpP4adzfgubdJ2e5IAiB98RCbgmGbqS1FfahvB.jpg'
   
    alt='...'
  />
  <MDBCarouselItem
    className='w-100 d-block'
    itemId={2}
    src='https://admin.allnuud.com/public/storage/image/a5wpP4adzfgubdJ2e5IAiB98RCbgmGbqS1FfahvB.jpg'
    alt='...'
  />
  <MDBCarouselItem
    className='w-100 d-block'
    itemId={3}
    src='https://admin.allnuud.com/public/storage/image/a5wpP4adzfgubdJ2e5IAiB98RCbgmGbqS1FfahvB.jpg'
    alt='...'
  />
</MDBCarousel> */}
                  
                </Grid>
                  <p style={{ color: "#3C3C3C", fontSize: { lg: "14px", xs: "12px" } }} dangerouslySetInnerHTML={{ __html: post }}></p>
                  <Typography
                    sx={{ color: "#3D55A5", fontSize: "14px", mt: 1, pb: 1, borderBottom: "1px solid #3D55A5" }}>
                    Idea | Welding
                  </Typography>
                  <Stack direction="row" spacing={2} sx={{ alignItems: "center", mb: { xs: "5px", lg: 0 } }}>
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

              <Grid item sm={1} xs={2}>
               
              </Grid>
              <Grid item sm={11} xs={10} sx={{ ps: 0 }}>
                <Stack
                  direction="row"
                  sx={{ justifyContent: "space-between", alignItems: "center" }}
                >
                  <Stack direction="row" spacing={1}>
                    {/* <Box>
                      <Typography
                        sx={{ fontSize: { lg: "16px", xs: "14px" }, color: "#3C3C3C", fontWeight: "500" }}
                      >
                        Prem Sinha
                      </Typography>
                      <Typography className="fs9-s" sx={{ color: "#3C3C3C", fontSize: { lg: "14px", xs: "10px" } }}>
                        @homeowner12
                      </Typography>
                    </Box> */}
                    {/* <Box>
                      <List className="ps-0 pt-0 m-0" sx={{ listStyleType: "number" }}>
                        <ListItem
                          className="p-0 m-0"
                          sx={{ display: "list-item", listStyle: "disc" }}
                        >
                          <Typography className="fs9-s" sx={{ color: "#3C3C3C", fontSize: { lg: "14px", xs: "10px" } }}>
                            12th May 2020
                          </Typography>
                        </ListItem>
                      </List>
                    </Box> */}
                  </Stack>
                </Stack>

                {
                  comments.map((res) => {
                    const { user_posts_comment, id } = res

                    return (
                      <Box key={id}>
                        <Typography className="mt-2" sx={{ fontSize: { lg: "14px", xs: "12px" } }} >
                    <img className="csss" src="./img1.png"></img> <spam sm={{fontSize: "20px", fontWeight: "600"}}>{userName} </spam> {user_posts_comment}
                        </Typography>
                      </Box>
                    )
                  })
                }

              </Grid>

              <Grid item xs={12}>
                <Grid container className="mt-3">
                  <Grid item sm={1} xs={2} >
                    <Box>
                      <Avatar className='img_s' src="./img1.png" sx={{ width: { lg: 45, sm: 35, xs: 40 }, height: { lg: 45, sm: 35, xs: 40 } }} />
                    </Box>
                  </Grid>
                  <Grid item sm={11} xs={10} className="my-auto">
                    <Box className="position-relative form-control rounded-pill py-1 px-lg-1 px-0" sx={{ bgcolor: "#ECECEC" }}>
                      <input type="text" className="w-100 rounded-pill input_size bg-grey fs8-s" placeholder="Start Typing your Comment here" style={{ fontSize: { lg: "10px", xs: "6px" } }} onChange={(e) => setCommentText(e.target.value)} />

                      <Box sx={{ position: "absolute", top: "50%", right: "5px", transform: "translatey(-50%)" }} className="fs10-s">
                        <CusButton onClick={(e) => HandlePost(id)} name="send" bgcolor="#3D55A5" color="#fff" size="14px" />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )
        })
      }
    </Box>
  );
};

export default ChatPost;

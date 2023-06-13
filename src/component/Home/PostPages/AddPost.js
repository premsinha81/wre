import { Box, Button, Grid, Modal, Stack, TextareaAutosize, Typography } from "@mui/material";
import React, { useState } from "react";
import CancelIcon from '@mui/icons-material/Cancel';
import { Padding } from "@mui/icons-material";
import CusButton from "../PostPages/CusButton";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AddPostApi } from "../../../API/PostAddApi";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    boxShadow: 24,
    borderRadius:"0.75rem 0.75rem",
    padding:0,
    zIndex:"99999"
  };

const AddPost = ({ setAddPost }) => {

 

 
    const navigate = useNavigate();
  
      const [post, setPost] = useState("");
      const [user_id, setUser_id] = useState("18");
      const data = {
        post : post, 
        user_id:user_id
        
      };
      function handleSubmit(e) {
        e.preventDefault();
        axios
          .post("https://admin.allnuud.com/api/userpost/add", data)
          .then(
            setPost("")
          )
          
          .catch((err) => console.log(err));
      
    
          if (data.status === 'Success') {
            window.alert("Your Post Successfully");
            console.log("Your Post Successfully");
            navigate("/");
          } else {
            window.alert("Your Post Successfully");
            console.log("Your Post Successfully");
          }
        }
    
  //   const [user_id, setUser_id] = useState("18");
  //  const[post, setPost] = useState("");
    
  
  //   const addpostbtn = async (e) => {
  //     e.preventDefault();
  //     let jobData = { user_id, post};
  
  //     const res = await fetch("https://admin.allnuud.com/api/userpost/add", {
  //       method: 'POST',
  //       body: JSON.stringify(jobData),
  //       headers: {
  //         "Content-Type": 'application/json',
  //         "Accept": 'application/json'
  //       }
  //     })
  //     const data = await res.json();
  //     console.log(data);
  //     if (data.status === 'Success') {
  //       window.alert("Your Post Successfully");
  //       console.log("Your Post Successfully");
  //       navigate("/");
  //     } else {
  //       window.alert("Invalid Registration");
  //       console.log("Invalid Registration");
  //     }
  //   }

  return (
    // <Modal open={() => setAddPost(true)} onClose={() => setAddPost(false)} sx={{":focus-visible":{outline:"none"}}}>
      <Grid  sx={style} className="addPost">
        <form method="post" onSubmit={handleSubmit}>
        <Grid item xs={12} sx={{bgcolor:"#4c62ac",p:1,color:"#fff",borderRadius:"0.75rem 0.75rem 0 0"}}>
          <Stack direction="row" sx={{ justifyContent: "space-between"}}>
            <Box></Box>
            <Box sx={{fontSize:"20px"}}>Add Post</Box>
            <Box><CancelIcon onClick={()=>setAddPost(false)} sx={{width:30,height:30}}/></Box>
          </Stack>
        </Grid>

        <Grid item xs={12} lg={12} sx={{bgcolor:"#fff",p:3,borderRadius:"0 0 .75rem .75rem"}}>
         
          <Box>
          {/* <CKEditor
                    editor={ ClassicEditor } value={post}
                    onChange={(e) => setPost(e.target.value)}
                    data="<div style={{p:5}}><p>Type Here</p></div>"
                    onReady={ editor => {
                       
                        console.log( 'Editor is ready to use!', editor );
                    } }
                  
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                /> */}
               <CKEditor
        editor={ClassicEditor}
        data={post}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
        }}
        onChange={(event, editor) => {
          const data = editor.getData();

          setPost(data);
        }}
      />
          </Box>
          
       

       
          <Box className="d-flex justify-content-center mt-5">
            <CusButton  bgcolor={"#4c62ac"} color={"#fff"} name={<Typography sx={{px:2,py:"5px"}}>POST</Typography>}/>
          </Box>
        </Grid>
        </form>
      </Grid>
    // </Modal>
  );
};

export default AddPost;

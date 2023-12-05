import { Box, Button, Grid, Modal, Stack, TextareaAutosize, Typography } from "@mui/material";
import React, { useState } from "react";
import CancelIcon from '@mui/icons-material/Cancel';
import { Padding } from "@mui/icons-material";
import CusButton from "../PostPages/CusButton";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { AddPostApi } from "../../../API/PostAddApi";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { loadingContext } from "../../../Context/Loading";


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

const AddPost = ({setAddPost}) => {

  const idget = localStorage.getItem("usr_id")

  const [image_url, setImage_url] = useState('');
  const [post , setPost]=useState();
  const [id , setId]=useState(idget);
  const {loadingd , setLoadingd} = useContext(loadingContext)
  
  

  const navigate = useNavigate();

    let data = {
    
      post :post,
      
      user_id:id
    }

    
    const handleSubmit = (e) => {
      e.preventDefault()
      let apidata = AddPostApi(data);
  
      if(apidata){
        apidata.then((res)=>{
        console.log(res);
        })
        apidata.catch((error)=>{
          console.log(error , "erro in post api");
        })
      }
      console.log(data);
  
      if (data.status === 'Success') {
        window.alert("Your Post Successfully");
        console.log("Your Post Successfully");
        navigate("/");
        
      } else {
        console.log("error");
      }
      setAddPost(false);
      
    };

  // const api_URL = "https://noteyard-backend.herokuapp.com"
  const api_URL = `https://admin.allnuud.com/api`
  const Upload_Endpoint = "userpost/image"

  function uploadAdapter(loader){
    return{
      upload:()=>{
        return new Promise((resolve , reject)=>{
          const body = new FormData();
          loader.file.then((file)=>{
            body.append("image",file);
            body.append("user_id",id);
            fetch(`${api_URL}/${Upload_Endpoint}` , {
              method:"post",
              body:body
            })
            .then((res=>res.json()))
            .then((res)=>{
              resolve({default: `${res.image_url}`})
              console.log(res);
            })
            .catch((err)=>{
              //reject(err);
              console.log(err , "errir");
            })
          })
        })
      }
    }
  }

  function uploadPlugin(editor){
    editor.plugins.get("FileRepository").createUploadAdapter = (loader)=>{
      return uploadAdapter(loader)
      
    }
  }


  return (
   
      <Grid container sx={style} className="addPost">
        <Grid item xs={12} sx={{bgcolor:"#4c62ac",p:1,color:"#fff",borderRadius:"0.75rem 0.75rem 0 0"}}>
          <Stack direction="row" sx={{ justifyContent: "space-between"}}>
            <Box></Box>
            <Box sx={{fontSize:"20px"}}>Add Post</Box>
            <Box><CancelIcon onClick={()=>setAddPost(false)} sx={{width:30,height:30}}/></Box>
          </Stack>
        </Grid>

        <Grid item xs={12} sx={{bgcolor:"#fff",p:3,borderRadius:"0 0 .75rem .75rem"}}>
         
          <Box>
           
          <CKEditor

          config={{
            extraPlugins:[uploadPlugin]
          }}
          
                    editor={ ClassicEditor }
                   
                    data={post}
                    onReady={ editor => {
                       
                        console.log( 'Editor is ready to use!', editor );
                    } }
                 
                     
      
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setPost(data)
                        console.log(data , "pppppp")
                       
                    } }
                    onBlur={ ( event, editor ) => {
                       
                    } }
                    onFocus={ ( event, editor ) => {
                        
                    } }
                    
                />
          </Box>
         
       
          <Box className="d-flex justify-content-center mt-5">
            <CusButton onClick={handleSubmit} bgcolor={"#4c62ac"} color={"#fff"} name={<Typography sx={{px:2,py:"5px"}}>POST</Typography>}/>
          </Box>
        </Grid>
        
      </Grid>
      
  );
};

export default AddPost;

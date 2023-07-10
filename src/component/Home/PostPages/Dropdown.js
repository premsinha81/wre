
import { Box, Button, Grid, Modal, Stack, TextareaAutosize, Typography, List, ListItem } from "@mui/material";
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
const Dropdown = ({setAddPost, name1 , name2 , name3,onClick,onclick}) => {
  const idget = localStorage.getItem("usr_id")

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
  };

  // const api_URL = "https://noteyard-backend.herokuapp.com"
  const api_URL = `https://admin.allnuud.com/api/userpost/add`
  const Upload_Endpoint = "api/blogs/uploading"

  function uploadAdapter(loader){
    return{
      upload:()=>{
        return new Promise((resolve , reject)=>{
          const body = new FormData();
          loader.file.then((file)=>{
            body.append("uploadImg",file);
            fetch(`${api_URL}/${Upload_Endpoint}` , {
              method:"post",
              body:body
            })
            .then((res)=>{
              res.json()
            })
            .then((res)=>{
              resolve({default: `${api_URL}/${res.url}`})
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
    <Box sx={{p:"10px 1px",bgcolor:"#3C3C3C",color:"#fff"}} className="rounded rounded-2">
        <List className="p-0">
            <ListItem onClick={onClick}  sx={{borderBottom:"1px solid #fff",cursor:"pointer"}}>{name1}</ListItem>
            <ListItem  sx={{borderBottom:"1px solid #fff",cursor:"pointer"}}>{name2}</ListItem>
            <ListItem sx={{borderBottom:"1px solid #fff",cursor:"pointer"}}>{name3}</ListItem>
        </List>
        {/* <Grid item xs={12} sx={{bgcolor:"#fff",p:3,borderRadius:"0 0 .75rem .75rem"}}>
         
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
       </Grid> */}
    </Box>
    
  )
}

export default Dropdown
import { Box, Button, Grid, Modal, Stack, TextareaAutosize, Typography } from "@mui/material";
import React, { useState,useEffect } from "react";
import CancelIcon from '@mui/icons-material/Cancel';
import { Padding } from "@mui/icons-material";
import CusButton from "../PostPages/CusButton";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AddPostApi } from "../../../API/PostAddApi";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { loadingContext } from "../../../Context/Loading";
import { addPostData } from "../../../API/PostAddApi";
import { updatePostApi } from "../../../API/PostAddApi";



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


 
  
const EditPost = ({setEditPost}) => {

  const idget = localStorage.getItem("usr_id")

  const [post , setPost]=useState();
  const [id , setId]=useState(idget);
  const {loadingd , setLoadingd} = useContext(loadingContext)
  const [updatedPost,setUpdatedPost]=useState({});

  const postId=localStorage.getItem("update_post_id");
  useEffect(() => {
    // localStorage.removeItem('update_post_id')
    (async()=>{
     const res= await addPostData()
     if(res)
     {
      
     const postData= res.data.result.filter((item)=>{
              return item.id == postId
      })
      if(postData) setUpdatedPost({id:postData[0].id,content:postData[0].content})
      console.log(updatedPost);
     }
    })()
  
    
  }, [postId])

  const navigate = useNavigate();

    let data = {
      post :post, 
      user_id:id
    }

    

    const handleUpdatePost=async (e)=>{
      e.preventDefault()
      
      let apiData= updatePostApi({post_id:updatedPost.id,content:updatedPost.content,user_id:id})
      if(apiData)
      {
       apiData.then((res)=>{
        console.log(res);
        // console.log(updatedPost);
        if(res){
          localStorage.removeItem('update_post_id')
          alert(res.data.messege)
          //  location.reload()
           window.location.reload()
        }
       }).catch((error)=>{
        console.log('error while updating post data',error);
       })
      }
    }

  const handleAddPost = (e) => {
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
   
      <Grid container sx={style} className="addPost">
        <Grid item xs={12} sx={{bgcolor:"#4c62ac",p:1,color:"#fff",borderRadius:"0.75rem 0.75rem 0 0"}}>
          <Stack direction="row" sx={{ justifyContent: "space-between"}}>
            <Box></Box>
            <Box sx={{fontSize:"20px"}}>Edit Post</Box>
            <Box><CancelIcon onClick={()=>setEditPost(false)} sx={{width:30,height:30}}/></Box>
          </Stack>
        </Grid>

        <Grid item xs={12} sx={{bgcolor:"#fff",p:3,borderRadius:"0 0 .75rem .75rem"}}>
         
          <Box>
          <CKEditor
          config={{
            extraPlugins:[uploadPlugin]
          }}
                    editor={ ClassicEditor }
                    data={postId ?(updatedPost.content || '') :post}
                    onReady={ editor => {
                       
                        console.log( 'Editor is ready to use!', data);
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        postId? setUpdatedPost({id:postId,content:data}):  setPost(data)
                        console.log(updatedPost.content)
                       
                    } }
                    onBlur={ ( event, editor ) => {
                       
                    } }
                    onFocus={ ( event, editor ) => {
                        
                    } }
                />
          </Box>
         
       
          <Box className="d-flex justify-content-center mt-5">
            <CusButton onClick={postId ? handleUpdatePost : handleAddPost} bgcolor={"#4c62ac"} color={"#fff"} name={<Typography sx={{px:2,py:"5px"}}>{postId ?'UPDATE':'POST'}</Typography>}/>
          </Box>
        </Grid>
      </Grid>
  );
};

export default EditPost;

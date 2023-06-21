import axios from "axios"



export const AddPostApi = (postData)=>{


    console.log(postData , "api code ka data")
  

    let data = axios.post("https://admin.allnuud.com/api/userpost/add",{...postData})
    .then((res)=>{
        return res
    }).catch((error)=>{
        // alert(error)
        console.log("add post api error" , error);
    })

    if(data){
        return data
    }
}


export const addPostData = ()=>{

    var id = localStorage.getItem("usr_id")

     let data= axios.get(`https://admin.allnuud.com/api/userpost/show_by_user/${id}`)
    .then((res)=>{
        return res
    })
    .catch((error)=>{
        // alert(error)
        console.log("get post api error" , error);
        
    })
    if(data){
        return data
    }
    
}

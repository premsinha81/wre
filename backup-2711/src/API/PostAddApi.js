import axios from "axios"



export const AddPostApi = (postData)=>{


    let data = axios.post("https://admin.allnuud.com/api/userpost/add",{...postData})
    .then((res)=>{
        return res
    }).catch((error)=>{
        console.log("add post api error" , error);
    })

    if(data){
        return data
    }
    
}


export const addPostData = ()=>{

    var id = localStorage.getItem("usr_id")

     let data= axios.get(`https://admin.allnuud.com/api/userpost/show_by_user/${id}`)
    //  let data= axios.get(`https://admin.allnuud.com/api/userpost/list`)
    .then((res)=>{
        return res
    })
    .catch((error)=>{
       
        console.log("get post api error" , error);
        
    })
    if(data){
        return data
    }
    
}

export const commentData = (comment)=>{
    
 let data =  axios.post("https://admin.allnuud.com/api/userpost/comment/add",{...comment})
.then((res)=>{
    return res
})
.catch((error)=>{
   
    console.log("comment post api error" , error);
})

if(data){
    return data
}

}

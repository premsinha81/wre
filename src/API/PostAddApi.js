


export const AddPostApi = (props)=>{

    const {editor} = props

    var postData = new FormData()

    postData.append("post",editor)

    var request = {
        method:"POST",
        body:postData,
        redirect: 'follow'
    }

    return fetch("https://admin.allnuud.com/api/userpost/add",{
        request
    })
    .then((res)=>{
        return res.json();
    })
    .catch((error)=>{
        alert(error)
    })
}
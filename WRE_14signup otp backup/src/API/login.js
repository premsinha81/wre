
import axios from 'axios'  

export const loginaction=(email,password)=>{
   var formdata = new FormData();
formdata.append("email", email);
formdata.append("password", password);

var requestOptions = {
       
    
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

 return fetch("https://admin.allnuud.com/api/get/login", requestOptions)
  
  .then((data)=>{
    return data.json()
  })
  .catch(error => console.log('error', error));

}
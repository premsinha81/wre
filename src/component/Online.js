import {React,useState,useEffect} from 'react'

const Online = () => {
    const url="http://workreadyeducation.com/wre/api/get/onlinecourse";
  const[data,setdata]=useState([]);
  
const getuser=async()=>{
    const respond = await fetch(url);
    const user =await  respond.json();
      setdata(user);

}

useEffect(() => {
getuser();
  },[])
    
  return (

        <div class="row">
            {
    data.map((s)=>{
    const{  Course_title,Course_name,Duration,Course_type}=s;

    return(
            <div class="col-md-4 col-lg-4">

       

 
            <div class="programBox">
                        <div class="programTitle">
                           <h1>{Course_title}</h1>
                        </div>
                        <div class="programContent">
                           <div class="programsContentInfo">
                              <i class="fa fa-certificate"></i>
                              <h5>{Course_name}</h5>
                           </div>
                           <div class="programsContentInfo">
                              <i class="fa fa-clock-o"></i>
                              <h5>{Duration}</h5>
                           </div>
                           <div class="programsContentInfo">
                              <i class="fa fa-location-arrow"></i>
                              <h5>{Course_type}</h5>
                           </div>
                        </div>
                     </div>
                  
   
                     </div>
    )

    })

}

</div>
 
  )
}

export default Online
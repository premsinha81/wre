import React, {useState,useEffect} from 'react';
import fetchProfileData from '../../API/getDataApi';
import { getDate, getYear } from 'date-fns';
import axios from 'axios';

const Loginandsecurity = () => {
   const [profileData,setProfileData]=useState(null)
const Id=localStorage.getItem('usr_id')
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [dob,setDob]=useState('')
const [phone,setPhone]=useState('')
const [password,setPassword]=useState('')
const [study,setStudy]=useState('')
const [location,setLocation]=useState('')
const [about,setAbout]=useState('')
useEffect(()=>{(async() =>  {
  

   const data= await fetchProfileData();  
    setProfileData(data);
    setName(data.name)
    setEmail(data.email)
    let d=new Date(data.birthday.replace('th',''));
    let newDate=d.getFullYear()+'-'+ (d.getMonth().toString().length==2?d.getMonth():'0'+d.getMonth())+'-'+(d.getDate().toString().length>1?d.getDate():'0'+d.getDate());
   
    setDob(newDate)
   //  dob.replace('th','')
   //  console.log(dob)
    setPhone(data.mob)
    setStudy(data.study)
    setLocation(data.lives)
    setAbout(data.about)
    
   })()
   }, [Id]);

   const updateDetails=()=>{
      console.log('hello');
      (
      
         async()=>{
           try {
             const data={
                user_id:Id,
                name,
                email,
                // birthday:dob,
                mob:phone,
               //  image:profileData.image
                // about,
                // study,
                // lives:location
             }
             const res=await axios.post('https://admin.allnuud.com/api/profile',{...data})
             
             if(res.data.success)
             {
               alert("your data updated successfully")
             }
           } catch (error) {
              console.log("error while updating the post");
           }
         }
      )()
   }
 

   const [firstName, setFirstName] = useState('abc12@gmail.com');
   const [block, setBlock] = useState('Review and edit the people you previously blocked.');
  return (
   profileData && <div>
     
         <div className="postSection">
            <div className="container">
               <div className="row">
                  <div className="col-lg-4">
                     
                     <div className="MessageTitle">Your Profile</div>
                     <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search Here" title="Type in a name" />

                    
                     <strong>Your Profile</strong>
                     <hr />
                     <div
      class="nav flex-column nav-tabs "
      id="v-tabs-tab"
      role="tablist"
      aria-orientation="vertical"
    >
      <a
        class="nav-link active"
        id="v-tabs-home-tab"
        data-bs-toggle="tab"
        href="#v-tabs-home"
        role="tab"
        aria-controls="v-tabs-home"
        aria-selected="true"
        >Login and security</a
      >
      <a
        class="nav-link"
        id="v-tabs-profile-tab"
        data-bs-toggle="tab"
        href="#v-tabs-profile"
        role="tab"
        aria-controls="v-tabs-profile"
        aria-selected="false"
        >Personal Information</a
      >
      <a
        class="nav-link"
        id="v-tabs-messages-tab"
        data-bs-toggle="tab"
        href="#v-tabs-messages"
        role="tab"
        aria-controls="v-tabs-messages"
        aria-selected="false"
        >Data & Privacy</a
      >
    </div>
                    
                  </div>
                  <div className="col-lg-8">
                  <div class="tab-content" id="v-tabs-tabContent">
      <div
        class="tab-pane fade show active"
        id="v-tabs-home"
        role="tabpanel"
        aria-labelledby="v-tabs-home-tab"
      >
       <div className="messageSidePadding">
                        <div className="messageSidebar">
                           <div className="messageGrop ">
                              <div>
                                 
                                 <p className="HeadingTitleSetting" width="100%">Login and security</p><table className="table table-striped table-class" id="table-id">
                                    <tbody>
                                       <tr className="border-bottom">

                                       </tr>
                                       <tr className="border-bottom">

                                       <td className="nameM">Email</td>

                                       <td className="sMessage"> <input type="text" value={name}   name="firstName" onChange={e => setName(e.target.value)} /></td>
                                             <td></td>
                                          <td><a href=""> Update</a></td>
                                                         </tr>
                                       <tr className="border-bottom">

                                          <td className="nameM">Email</td>

                                          <td className="sMessage"> <input type="text" value={email}   name="firstName" onChange={e => setEmail(e.target.value)} /></td>
                                          <td></td>
                                          <td><a href=""> Update</a></td>
                                       </tr>
                                       <tr className="border-bottom">
                                          <td className="nameM">Phone</td>
                                          <td className="sMessage"><input type="number" value={phone}   name="mob" onChange={e => setPhone(e.target.value)} /></td>
                                          <td></td>
                                          <td><a href=""> Update</a></td>
                                       </tr>
                                       <tr className="border-bottom">
                                          <td className="nameM">Password</td>
                                          <td className="sMessage"><input type="password" value={password}   name="firstName" onChange={e => setPassword(e.target.value)} /></td>
                                          <td></td>
                                          <td><a href=""> Update</a></td>
                                       </tr>
                                       {/* <tr className="border-bottom">
                                          <td className="nameM">Security questions</td>
                                        
                                          <td className="sMessage">
                                          Add a Security Question. </td>
                                          <td></td>
                                          <td><a href=""> Update</a></td>
                                       </tr>
                                       <tr className="border-bottom">
                                       <td className="nameM">2-step verification</td>
                                      
                                          <td className="sMessage">Add a Security Question.
@-step Verification Add an extra of securrity to your account by using a one-time security code in addition to your password each time you log in.</td>
<td></td>
                                          <td><a href=""> Update</a></td>
                                       </tr> */}
                                      
                                  
                                    </tbody>
                                 </table>
                              </div>
                          <center>    <button onClick={updateDetails} type="button" class="btn d-none d-md-block  
      btn-primary rounded  btnSidebar fw-bold mt-0 mb-0 mb-md-2 mb-lg-0 bg-blue  text-white ">Update</button></center>
  
                           </div>
                        </div>
                     </div>
      </div>
      <div
        class="tab-pane fade"
        id="v-tabs-profile"
        role="tabpanel"
        aria-labelledby="v-tabs-profile-tab"
      >
       <div className="messageSidePadding">
                        <div className="messageSidebar">
                           <div className="messageGrop ">
                              <div>
                                 <p className="HeadingTitleSetting" width="100%">Personal Information</p><table className="table table-striped table-class" id="table-id">
                                    <tbody>
                                       <tr className="border-bottom">

                                       </tr>
                                       <tr className="border-bottom">
                                          <td className="nameM"><img src ="" />Study</td>
                                          <td className="sMessage"><input type="text" value={study}   name="birthday" onChange={e => setStudy(e.target.value)} /></td>
                                          <td></td>
                                          <td><a href=""> Update</a></td>
                                       </tr>
                                       <tr className="border-bottom">
                                          <td className="nameM">DOB</td>
                                          <td className="sMessage"><input type="date" value={dob}  name="birthday" onChange={e => setDob(e.target.value)} /></td>
                                          <td></td>
                                          <td><a href=""> Update</a></td>
                                       </tr>
                                       <tr className="border-bottom">
                                          <td className="nameM">About Us</td>
                                          <td className="sMessage"> <input type="text" value={about}   name="about" onChange={e => setAbout(e.target.value)} /></td>
                                          <td></td>
                                          <td><a href=""> Update</a></td>
                                       </tr>
                                       <tr className="border-bottom">
                                          <td className="nameM">current Location</td>
                                        
                                          <td className="sMessage">
                                          <input type="text" value={location}   name="about" onChange={e => setLocation(e.target.value)} /></td>
                                          <td></td>
                                          <td><a href=""> Update</a></td>
                                       </tr>
                                       
                                      
                                  
                                    </tbody>
                                 </table>
                              </div>
   <center>  
      <button type="button" class="btn d-none d-md-block  
      btn-primary rounded  btnSidebar fw-bold mt-0 mb-0 mb-md-2 mb-lg-0 bg-blue  text-white ">Update</button></center>
  
                           </div>
                        </div>
                     </div>
      </div>
      <div
        class="tab-pane fade"
        id="v-tabs-messages"
        role="tabpanel"
        aria-labelledby="v-tabs-messages-tab"
      >
        <div className="messageSidePadding">
                        <div className="messageSidebar">
                           <div className="messageGrop ">
                              <div>
                                 
                                 <p className="HeadingTitleSetting mt-4 mb-4" width="100%">Manage your privacy settings</p><table className="table table-striped table-class" id="table-id">
                                    <tbody>
                                       <tr className="border-bottom">

                                       </tr>
                                       <tr className="border-bottom">

                                          <td className="nameM">Blocked contacts</td>

                                          <td className="sMessage"> <input type="text" value={block}   name="block" onChange={e => setBlock(e.target.value)} /></td>
                                          <td></td>
                                          <td><a href=""> Update</a></td>
                                       </tr>
                                     
                                     
                                     
                                      
                                  
                                    </tbody>
                                 </table>
                              </div>
                          <center>    <button  onClick={updateDetails} type="button" class="btn d-none d-md-block  
      btn-primary rounded  btnSidebar fw-bold mt-0 mb-0 mb-md-2 mb-lg-0 bg-blue  text-white ">Upddate</button></center>
  
                           </div>
                        </div>
                     </div>
      </div>
       </div>
                     


                  </div>
                 
               </div>
            </div>
        
            <br></br> <br></br> <br></br>
         </div>
    </div>
  )
}

export default Loginandsecurity
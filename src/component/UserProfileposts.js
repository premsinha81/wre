import profile from '../img/profile2.jpg';
import { Avatar, Box, Button, Grid, InputBase, Stack, Typography,ListItem  } from '@mui/material'
import Profilep from '../img/profile.jpg';
import Img1 from '../img/css-gradient.webp';
import background from '../img/profile1.jpg';
import ChatProfile from './Home/PostPages/ChatProfile'
import AddPost from "./Home/PostPages/AddPost";
import  './Responshive.css';
import PostProfile from './Home/PostPages/PostProfile';
import CusButton from './Home/PostPages/CusButton2'
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import PostTimer from './Home/PostPages/PostTimer';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState, useEffect } from 'react';
import { Home } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const UserProfileposts = ({onClick, onclick}) => {
  const [timer , setTimer]=useState(false)

  const userName = localStorage.getItem("usr_name")

  const [profileData, setProfileData] = useState(null);
  const navigate = useNavigate();
  const [addpost, setAddPost] = useState(false);
  const Id = localStorage.getItem("usr_id")
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch(`https://admin.allnuud.com/api/profile/${Id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }
        const data = await response.json();
        setProfileData(data.data);
      } catch (error) {
        console.error(error);
        // Handle error (e.g., show error message to the user)
      }
    };

    fetchProfileData();
  }, [Id]);
  console.log("shiv", profileData);
  return (
    <>
    {profileData ? (
    <div class="body1">   
<section className="mb-2">
          <div className="overflow">
            <div id="profile-upper">
              <div id="profile-banner-image">
                <img src={Img1} alt="Banner image" />
              </div>
              <div id="profile-d">
                <div id="profile-pic">
                  <div className="avatar-upload">
                    <div className="avatar-edit">
                      <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" />
                      <label htmlFor="imageUpload" />
                    </div>
                    <div className="avatar-preview">
                      <div id="imagePreview" style={{backgroundImage: `url(${profileData.image_path})`}}>
                      </div>
                    </div>
                  </div>
                </div>
              
                <div id="u-name" className="row">
                  <span>{profileData.name}</span>
                  <div className="ptop">{profileData.email}<ul><li>{profileData.joined}</li></ul></div>
                </div>
                
                <div className="tb image-upload" id="m-btns">
                  <div className="filterArea  ">
                    <button type="button" className=" btn btn-primary btnSidebar1 filterBtn position-relative bg-dark ">
                      <p className="mb-0 ms-4 text-light"><input id="file-input" type="file" hidden /> <label htmlFor="file-input" style={{cursor: 'pointer'}}>Change picture</label></p>
                      <div className="position-absolute start-0 top-0">
                        <p> <i className="fa fa-camera me-2 position-absolute start-0 fs-1 text-light " /></p>
                      </div>
                    </button>  
                  </div>
                </div>
              </div>
              <div id="black-grd" />
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row justify-content-end">
          <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="postAccessoryIcons ">
                <ul className="ps-0">
                  <li><button type="button" className="btn btn-primary btnSidebar2 filterBtn custom-btn ">1,025<br /><span>Posts</span></button></li>
                  <li><button type="button" className="btn btn-primary btnSidebar2 filterBtn custom-btn">268 <br /><span>Followers</span></button></li>
                  <li><button type="button" className="btn btn-primary btnSidebar2 filterBtn custom-btn ">1,999<br /><span>Following</span></button></li>
                  <li><button type="button" className="btn btn-primary btnSidebar2 filterBtn custom-btn">695 <br /><span>Communities</span></button></li>
                   </ul>
              </div>
            </div>
            <div className='col-md-2'>
              <ul className='margen'> 
              <li className='dawn-left'><button type="button" className=" fs-2 custom-btn border-0">
                <ListItem>
                    {/* <a href="/dashboard" style={MenuStyle}>
                      Hello {localStorage.getItem("usr_name")}
                    </a> */}
                    <Dropdown >
                      <Dropdown.Toggle variant="" id="dropdown-basic ">
                      <i className=" fa fa-angle-down" />
               </Dropdown.Toggle>

                      <Dropdown.Menu>
                      
                        <Dropdown.Item href="/UserProfileposts">Unfollow </Dropdown.Item>
                        <Dropdown.Item href="/Loginandsecurity"> Block</Dropdown.Item>
                        <Dropdown.Item href="/Needhelp">Report</Dropdown.Item>
                            </Dropdown.Menu>
                    </Dropdown>
                  </ListItem>
                </button></li>
              </ul>
            </div>
          </div>
        </div>
       <br></br>     <br></br> 
        <div className="postSection mt-4">
          <div className="container">
           
            <div className="row">
              <div className="col-lg-4">
                <div className="sideBarSearchProgram mt-0">
                  <div className="postSidebar mt-0">
                    <div className="postGroups">
                      <div className="row">
                        <div className="col-12">
                          <div className="groupSection2">
                            <div className="groupName">
                              <h3 className="gName">About</h3>
                              <p className="groupFollowers1">
                                {profileData.about}</p>
                            </div>
                            <div className="arrayright">
                              <div className="gPlus"> <i className="fa fa-arrow-right" /></div>
                            </div>
                          </div>
                          <div className="groupSection2 d-flex justify-content-between">
                            <div className="groupName">
                              <div className="mb-3">
                                <h3 className="gName">Credentials</h3>
                                <p className=" groupFollowers1 fw-bold">Works At</p>
                                <p className="groupFollowers1">Professor at Chinese Univ. of China</p>
                                <p className="groupFollowers1">2016 - present</p>
                              </div>
                              <div className="mb-3">
                                <p className=" groupFollowers1 fw-bold">Studied at</p>
                                <p className="groupFollowers1">Drexel University</p>
                                <p className="groupFollowers1">2013 - 2018</p>
                              </div>
                              <div className="mb-3">
                                <p className=" groupFollowers1 fw-bold">Lives in</p>
                                <p className="groupFollowers1 mb-3">{profileData.lives}</p>
                                <p className="groupFollowers1"><b>12.3K</b> Content Views </p>
                                <p className="groupFollowers1">71 this month</p>
                              </div>
                              <div className="mb-3">
                                <p className=" groupFollowers1 fw-bold">Communities Membership</p>
                                <p className="groupFollowers1">6</p>
                              </div>
                            </div>
                            <div className="arrayright">
                              <div className="gPlus"> <i className="fa fa-arrow-right" /></div>
                            </div>
                          </div>
                          <div className="groupSection2 d-flex justify-content-between">
                            <div className="groupName">
                              <h3 className="gName">Additional Info</h3>
                              <p className="groupFollowers1"><i className="fa fa-birthday-cake me-2" /> {profileData.birthday}</p>
                              <p className="groupFollowers1"><i className="fa fa-birthday-cake me-2" /> {profileData.joined}
                              </p>
                            </div>
                            <div className="arrayright">
                              <div className="gPlus"> <i className="fa fa-arrow-right" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="postSidebar">
                  <div className="postGroups">
                    <div className="row">
                      <div className="col-12">
                        <div className="sideBarTitle">
                          <h1>Recommended Groups</h1>
                        </div>
                        <div className="divider" />
                      </div>
                      <div className="col-12">
                        <div className="groupSection">
                          <div className="groupIcon">
                            <img src="https://www.mnghealth.com/wp-content/uploads/pexels-icsa-1708936-640x427.jpg" alt="" />
                          </div>
                          <div className="groupName">
                            <h4 className="gName">West Philly Welders Association</h4>
                            <p className="groupFollowers">4,602 Followers</p>
                          </div>
                          <div className="groupAdd">
                            <div className="gPlus">+</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="groupSection">
                          <div className="groupIcon">
                            <img src="https://i.pinimg.com/236x/86/9b/cf/869bcfea3080797cdbf733451fe312a8.jpg" alt="" />
                          </div>
                          <div className="groupName">
                            <h4 className="gName">North Dakota Electricians</h4>
                            <p className="groupFollowers">4,602 Followers</p>
                          </div>
                          <div className="groupAdd">
                            <div className="gPlus">+</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="groupSection">
                          <div className="groupIcon">
                            <img src="img/g3.png" alt="" />
                          </div>
                          <div className="groupName">
                            <h4 className="gName">GTG Hospitals N. Jersey</h4>
                            <p className="groupFollowers">4,602 Followers</p>
                          </div>
                          <div className="groupAdd">
                            <div className="gPlus">+</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="groupSection">
                          <div className="groupIcon">
                            <img src="https://tr.rbxcdn.com/63f683e1d9cd1d4eab0361ad13b4eaa9/420/420/Image/Png" alt="" />
                          </div>
                          <div className="groupName">
                            <h4 className="gName">North Philly Welders Association</h4>
                            <p className="groupFollowers">4,602 Followers</p>
                          </div>
                          <div className="groupAdd">
                            <div className="gPlus">+</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="groupSection">
                          <div className="groupIcon">
                            <img src="https://i5.walmartimages.com/asr/411e603d-f8d2-4fb9-b319-456f35f66a66.5649795a8484e5183652b0b237088ceb.jpeg" alt="" />
                          </div>
                          <div className="groupName">
                            <h4 className="gName">West Philly Welders Association</h4>
                            <p className="groupFollowers">4,602 Followers</p>
                          </div>
                          <div className="groupAdd">
                            <div className="gPlus">+</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="groupSection">
                          <div className="groupIcon">
                            <img src="https://www.mnghealth.com/wp-content/uploads/pexels-icsa-1708936-640x427.jpg" alt="" />
                          </div>
                          <div className="groupName">
                            <h4 className="gName">West Philly Welders Association</h4>
                            <p className="groupFollowers">4,602 Followers</p>
                          </div>
                          <div className="groupAdd">
                            <div className="gPlus">+</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="groupSection">
                          <div className="groupIcon">
                            <img src={Profilep} alt="" />
                          </div>
                          <div className="groupName">
                            <h4 className="gName">West Philly Welders Association</h4>
                            <p className="groupFollowers">4,602 Followers</p>
                          </div>
                          <div className="groupAdd">
                            <div className="gPlus">+</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space30" />
                  <div className="space30" />
                </div>
              </div>
              <div className="col-lg-8">
            <div className="container">
                <div className="postAccessoryIcons postAccessoryIcons1">
                 
              
  <ul   className="ps-0" id="pills-tab" role="tablist">
    <li  role="presentation">
      <button
     className='nav-link'
        id="pills-home-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-home"
        type="button"
        role="tab"
        aria-controls="pills-home"
        aria-selected="true"
      >
       POSTS
      </button>
    </li>
    <li  role="presentation">
      <button
        className="nav-link"
        id="pills-profile-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-profile"
        type="button"
        role="tab"
        aria-controls="pills-profile"
        aria-selected="false"
      >
       COMMENTS
      </button>
    </li>
    <li  role="presentation">
      <button
        className="nav-link"
        id="pills-contact-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-contact"
        type="button"
        role="tab"
        aria-controls="pills-contact"
        aria-selected="false"
      >
     COMMUNITIES
      </button>
    </li>
   
  </ul>
  </div>
  <div className="tab-content" id="pills-tabContent">
    <div
      className="tab-pane fade show active"
      id="pills-home"
      role="tabpanel"
      aria-labelledby="pills-home-tab"
      tabIndex={0}
    >
      {
        addpost &&
        <Box sx={{ bgcolor: "rgba(0,0,0,.5)", position: "absolute", top: 0, left:0, width: "100%", height: "100%", zIndex: "9999" }}>
          <AddPost addpost={addpost} setAddPost={setAddPost} />
        </Box>
      }
       <Box>
                <PostProfile
                  onClick={() => {{
                    if(localStorage.getItem("usr_id")){
                      setAddPost(true)
                    }else{
                      setAddPost(false)
                      navigate("/Login");
                    }
                    }}}
                />
              </Box>
   
    <ChatProfile/>
    </div>
    <div
      className="tab-pane fade"
      id="pills-profile"
      role="tabpanel"
      aria-labelledby="pills-profile-tab"
      tabIndex={0}
    >
      <ChatProfile/>
    </div>
    <div
      className="tab-pane fade"
      id="pills-contact"
      role="tabpanel"
      aria-labelledby="pills-contact-tab"
      tabIndex={0}
    >
     <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="container">
                  <div className="row commentbox">
                    {/* first img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="https://www.mnghealth.com/wp-content/uploads/pexels-icsa-1708936-640x427.jpg" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">
                            West Philly Welders Association
                          </h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    {/* second Img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="https://i.pinimg.com/236x/86/9b/cf/869bcfea3080797cdbf733451fe312a8.jpg" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">North Dakota Electricians</h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    {/* Third Img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="img/g3.png" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">GTG Hospitals N. Jersey</h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    {/* Fourth Img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="https://tr.rbxcdn.com/63f683e1d9cd1d4eab0361ad13b4eaa9/420/420/Image/Png" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">
                            North Philly Welders Association
                          </h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    {/* Fifth Img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="https://i5.walmartimages.com/asr/411e603d-f8d2-4fb9-b319-456f35f66a66.5649795a8484e5183652b0b237088ceb.jpeg" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">
                            West Philly Welders Association
                          </h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    {/* Fifth Img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="img/profile.jpg" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">
                            West Philly Welders Association
                          </h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    {/* first img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="https://www.mnghealth.com/wp-content/uploads/pexels-icsa-1708936-640x427.jpg" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">
                            West Philly Welders Association
                          </h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    {/* second Img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="https://i.pinimg.com/236x/86/9b/cf/869bcfea3080797cdbf733451fe312a8.jpg" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">North Dakota Electricians</h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    {/* Third Img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="img/g3.png" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">GTG Hospitals N. Jersey</h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    {/* Fourth Img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="https://tr.rbxcdn.com/63f683e1d9cd1d4eab0361ad13b4eaa9/420/420/Image/Png" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">
                            North Philly Welders Association
                          </h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    {/* Fifth Img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="https://i5.walmartimages.com/asr/411e603d-f8d2-4fb9-b319-456f35f66a66.5649795a8484e5183652b0b237088ceb.jpeg" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">
                            West Philly Welders Association
                          </h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    {/* Fifth Img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="img/profile.jpg" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">
                            West Philly Welders Association
                          </h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    {/* first img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="https://www.mnghealth.com/wp-content/uploads/pexels-icsa-1708936-640x427.jpg" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">
                            West Philly Welders Association
                          </h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    {/* second Img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="https://i.pinimg.com/236x/86/9b/cf/869bcfea3080797cdbf733451fe312a8.jpg" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">North Dakota Electricians</h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    {/* Third Img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="img/g3.png" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">GTG Hospitals N. Jersey</h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    {/* Fourth Img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="https://tr.rbxcdn.com/63f683e1d9cd1d4eab0361ad13b4eaa9/420/420/Image/Png" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">
                            North Philly Welders Association
                          </h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    {/* Fifth Img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="https://i5.walmartimages.com/asr/411e603d-f8d2-4fb9-b319-456f35f66a66.5649795a8484e5183652b0b237088ceb.jpeg" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">
                            West Philly Welders Association
                          </h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    {/* Fifth Img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="img/profile.jpg" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">
                            West Philly Welders Association
                          </h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    {/* first img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="https://www.mnghealth.com/wp-content/uploads/pexels-icsa-1708936-640x427.jpg" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">
                            West Philly Welders Association
                          </h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    {/* second Img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="https://i.pinimg.com/236x/86/9b/cf/869bcfea3080797cdbf733451fe312a8.jpg" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">North Dakota Electricians</h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    {/* Third Img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="img/g3.png" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">GTG Hospitals N. Jersey</h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    {/* Fourth Img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="https://tr.rbxcdn.com/63f683e1d9cd1d4eab0361ad13b4eaa9/420/420/Image/Png" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">
                            North Philly Welders Association
                          </h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    {/* Fifth Img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="https://i5.walmartimages.com/asr/411e603d-f8d2-4fb9-b319-456f35f66a66.5649795a8484e5183652b0b237088ceb.jpeg" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">
                            West Philly Welders Association
                          </h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    {/* Fifth Img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="img/profile.jpg" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">
                            West Philly Welders Association
                          </h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    {/* first img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="https://www.mnghealth.com/wp-content/uploads/pexels-icsa-1708936-640x427.jpg" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">
                            West Philly Welders Association
                          </h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    {/* second Img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="https://i.pinimg.com/236x/86/9b/cf/869bcfea3080797cdbf733451fe312a8.jpg" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">North Dakota Electricians</h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    {/* Third Img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="img/g3.png" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">GTG Hospitals N. Jersey</h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    {/* Fourth Img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="https://tr.rbxcdn.com/63f683e1d9cd1d4eab0361ad13b4eaa9/420/420/Image/Png" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">
                            North Philly Welders Association
                          </h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    {/* Fifth Img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="https://i5.walmartimages.com/asr/411e603d-f8d2-4fb9-b319-456f35f66a66.5649795a8484e5183652b0b237088ceb.jpeg" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">
                            West Philly Welders Association
                          </h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    {/* Fifth Img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="img/profile.jpg" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">
                            West Philly Welders Association
                          </h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    {/* first img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="https://www.mnghealth.com/wp-content/uploads/pexels-icsa-1708936-640x427.jpg" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">
                            West Philly Welders Association
                          </h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    {/* second Img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="https://i.pinimg.com/236x/86/9b/cf/869bcfea3080797cdbf733451fe312a8.jpg" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">North Dakota Electricians</h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    {/* Third Img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="img/g3.png" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">GTG Hospitals N. Jersey</h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    {/* Fourth Img  */}
                    <div className="col-sm-8">
                      <div className="d-flex gap-5">
                        <div className="groupIcon">
                          <img src="https://tr.rbxcdn.com/63f683e1d9cd1d4eab0361ad13b4eaa9/420/420/Image/Png" />
                        </div>
                        <div className="groupName">
                          <h4 className="gName">
                            North Philly Welders Association
                          </h4>
                          <p className="groupFollowers">4,602 Followers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="unfollow-btn">
                        <div className="follow">Unfollow</div>
                      </div>
                    </div>
                    {/* end  */}
                    <div className="col-md-12 text-center mt-3">
                      <button className="load-btn">Load More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
    <div
      className="tab-pane fade"
      id="pills-disabled"
      role="tabpanel"
      aria-labelledby="pills-disabled-tab"
      tabIndex={0}
    >
      ...
    </div>
  </div>

               
              </div>
              </div>
            </div>
          </div></div>
          
  
     
    </div>
     ) : (
      <p></p>
    )}
    </>
  )
}

export default UserProfileposts
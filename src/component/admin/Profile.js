import DataShow from '../showdata'
import React, { useState } from 'react';
import profilegra from "../../img/css-gradient.webp";
import { useNavigate } from 'react-router-dom';
const Iconstyle = { width: 35, height: 35, borderRadius: "50%", border: 0, bgcolor: "#283b8b", color: "#fff", p: "5px" };
const converted = { "#root": { backgroundColor: "#ECECEC" } }

const Profile = () => {
  const userName = localStorage.getItem("usr_name")
  const userEmail = localStorage.getItem("usr_email")
  const created_at = localStorage.getItem("created_at")
    const navigate = useNavigate();
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [user, setUser] = useState({
        name: "", email: "", mob: "", password: "", role:"user"
    })
    let name, value
    const handleInputChange = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    const handleSubmit = async (e) => {
        const { name, email, mob, password, role } = user;
        setPopupVisible(true);

        const res = await fetch("https://admin.allnuud.com/api/get/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name, email, mob, password,role
            })
            
            
        })
        const data = await res.json();
        console.log(data);
        if (data.status === "Succes") {
            window.alert("Registration Successfully");
            console.log("Registration Successfully");
            navigate("/login");

        } else if (data.status === "Failed") {
            window.alert("User Already Exist");
            console.log("User Already Exist");

        } else {
            window.alert("Something went wrong please try again!");
            console.log("Something went wrong please try again!");

        }
    }
  return (
  <>
  <>
  <div className="seachBox">
    <form action="" method="post" className="searchForm">
      <input type="search" placeholder="Search..." />
      <button type="submit">Go</button>
    </form>
    <div className="closeSearch">+</div>
  </div>
  <section className="mb-2">
    <div className="overflow">
      <div id="profile-upper">
        <div id="profile-banner-image">
          <img src={profilegra} alt="Banner image" />
        </div>
        <div id="profile-d">
          <div id="profile-pic">
            <div className="avatar-upload">
              <div className="avatar-edit">
                <input
                  type="file"
                  id="imageUpload"
                  accept=".png, .jpg, .jpeg"
                />
                <label htmlFor="imageUpload" />
              </div>
              <div className="avatar-preview">
                <div
                  id="imagePreview"
                  style={{ backgroundImage: 'url("https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY=")' }}
                ></div>
              </div>
            </div>
          </div>
          <div id="u-name" className="row">
            <span>{userName}</span>
            <div className="ptop">
             {userEmail}
              <ul>
                <li>{created_at}</li>
              </ul>
            </div>
          </div>
          <div className="tb image-upload" id="m-btns">
            <div className="filterArea  ">
              <button
                type="button"
                className=" btn btn-primary btnSidebar1 filterBtn position-relative bg-dark "
              >
                <p className="mb-0 ms-4 text-light">
                  <input id="file-input" type="file" hidden="" />{" "}
                  <label htmlFor="file-input" style={{ cursor: "pointer" }}>
                    Change picture
                  </label>
                </p>
                <div className="position-absolute start-0 top-0">
                  <p>
                    {" "}
                    <i className="fa fa-camera me-2 position-absolute start-0 fs-1 text-light " />
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div id="black-grd" />
      </div>
    </div>
  </section>
  <div className="mt-5 mt-lg-0  pt-lg-0">
    <div className="container">
      <div className="row justify-content-end my-5">
        <div className="col-md-9">
          <button
            className="px-5 mb-3 py-2 mx-1 rounded-2 bg-white border-0 "
            type="button"
          >
            <p className="mb-0 fw-bold fs-5">1,025</p>
            <p className="m-0">Posts</p>
          </button>
          <button
            className="px-5 mb-3 py-2 mx-1 rounded-2 bg-white border-0 "
            type="button"
          >
            <p className="mb-0 fw-bold fs-5">1,025</p>
            <p className="m-0">Posts</p>
          </button>
          <button
            className="px-5 mb-3 py-2 mx-1 rounded-2 bg-white border-0 "
            type="button"
          >
            <p className="mb-0 fw-bold fs-5">1,025</p>
            <p className="m-0">Posts</p>
          </button>
          <button
            className="px-5 mb-3 py-2 mx-1 rounded-2 bg-white border-0 "
            type="button"
          >
            <p className="mb-0 fw-bold fs-5">1,025</p>
            <p className="m-0">Posts</p>
          </button>
          <button
            className="ps-5 py-2 ms-2 py-2 hh  border-0"
            type="button"
          >
            <i className="fa fa-angle-down fw-bold fs-2" />
          </button>
        </div>
      </div>
      <section className="mb-2">
        <div className="row justify-content-end">
          <div className="col-md-8">
            <div className="postAccessoryIcons ">
              <div className="postAccessoryIcons postAccessoryIcons1">
                <ul className="ps-0">
                  <li>POSTS</li>
                  <li>COMMENTS</li>
                  <li className="active">COMMUNITIES</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="row mb-5">
        <div className="col-lg-3">
          <div className="sideBarSearchProgram mt-0 pt-0">
            <div className="postSidebar mt-0 pt-0">
              <div className="postGroups mt-0 pt-0">
                <div className="row">
                  <div className="col-12">
                    <div className="groupSection2">
                      <div className="groupName">
                        <h3 className="gName">About</h3>
                        <p className="groupFollowers1">
                          An associate degree in healthcare is a two-year degree
                          that students may complete on campus, online, or in a
                          combination of on-campus and online learning.
                          Healthcare is a major part of the US economy, and an
                          associate in health, health information management,
                          health services management, or a healthcare
                          administration program can open many paths to
                          employment opportunities in the healthcare industry.
                          Population changes drivestudents earning a healthcare
                        </p>
                      </div>
                      <div className="arrayright">
                        <div className="gPlus">
                          {" "}
                          <i className="fa fa-arrow-right" />
                        </div>
                      </div>
                    </div>
                    <div className="groupSection2 d-flex justify-content-between">
                      <div className="groupName">
                        <div className="mb-3">
                          <h3 className="gName">Credentials</h3>
                          <p className=" groupFollowers1 fw-bold">Works At</p>
                          <p className="groupFollowers1">
                            Professor at Chinese Univ. of China
                          </p>
                          <p className="groupFollowers1">2016 - present</p>
                        </div>
                        <div className="mb-3">
                          <p className=" groupFollowers1 fw-bold">Studied at</p>
                          <p className="groupFollowers1">Drexel University</p>
                          <p className="groupFollowers1">2013 - 2018</p>
                        </div>
                        <div className="mb-3">
                          <p className=" groupFollowers1 fw-bold">Lives in</p>
                          <p className="groupFollowers1 mb-3">
                            London, United kingdom
                          </p>
                          <p className="groupFollowers1">
                            <b>12.3K</b> Content Views{" "}
                          </p>
                          <p className="groupFollowers1">71 this month</p>
                        </div>
                        <div className="mb-3">
                          <p className=" groupFollowers1 fw-bold">
                            Communities Membership
                          </p>
                          <p className="groupFollowers1">6</p>
                        </div>
                      </div>
                      <div className="arrayright">
                        <div className="gPlus">
                          {" "}
                          <i className="fa fa-arrow-right" />
                        </div>
                      </div>
                    </div>
                    <div className="groupSection2 d-flex justify-content-between">
                      <div className="groupName">
                        <h3 className="gName">Additional Info</h3>
                        <p className="groupFollowers1">
                          <i className="fa fa-birthday-cake me-2" /> 9th Nov
                          2000
                        </p>
                        <p className="groupFollowers1">
                          <i className="fa fa-birthday-cake me-2" /> 9th Nov
                          2000
                        </p>
                      </div>
                      <div className="arrayright">
                        <div className="gPlus">
                          {" "}
                          <i className="fa fa-arrow-right" />
                        </div>
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
                      <img
                        src="https://www.mnghealth.com/wp-content/uploads/pexels-icsa-1708936-640x427.jpg"
                        alt=""
                      />
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
                      <img
                        src="https://i.pinimg.com/236x/86/9b/cf/869bcfea3080797cdbf733451fe312a8.jpg"
                        alt=""
                      />
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
                      <img
                        src="https://tr.rbxcdn.com/63f683e1d9cd1d4eab0361ad13b4eaa9/420/420/Image/Png"
                        alt=""
                      />
                    </div>
                    <div className="groupName">
                      <h4 className="gName">
                        North Philly Welders Association
                      </h4>
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
                      <img
                        src="https://i5.walmartimages.com/asr/411e603d-f8d2-4fb9-b319-456f35f66a66.5649795a8484e5183652b0b237088ceb.jpeg"
                        alt=""
                      />
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
                      <img
                        src="https://www.mnghealth.com/wp-content/uploads/pexels-icsa-1708936-640x427.jpg"
                        alt=""
                      />
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
                      <img src="img/profile.jpg" alt="" />
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
        <div className="col-lg-9">
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
      </div>
    </div>
  </div>
</>

  </>
  )
}

export default Profile;



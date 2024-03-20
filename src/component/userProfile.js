import Img1 from '../Image/css-gradient.webp';
import profile from '../Image/profile2.jpg';
import Profilep from '../Image/profile.jpg';
import background from '../Image/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faEdit, faThumbsUp, faShare, faRetweet, faEye, faComment } from '@fortawesome/fontawesome-free-solid';
import './userprofile.css';
//import  './Responshive.css';


const UserProfileposts = () => {
 
  return (
    <div>   

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
                    <FontAwesomeIcon icon={faEdit} />                        
                      <input type="file" id="imageUpload" />
                        
                      <label htmlFor="imageUpload" />
                    </div>
                    <div className="avatar-preview">
                      <div id="imagePreview" style={{backgroundImage: `url(${background})`}}>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="u-name" className="row">
                  <span>Prem Sinha</span>
                  <div className="ptop">@homeowner12<ul><li>Joined 2022</li></ul></div>
                </div>
                <div className="tb image-upload" id="m-btns">
                  <div className="filterArea  ">
                    <button type="button" className=" btn btn-primary btnSidebar1 filterBtn position-relative bg-dark ">
                      <p className="mb-0 ms-4 text-light"><input id="file-input" type="file" hidden /> <label htmlFor="file-input" style={{cursor: 'pointer'}}>Change Picture</label></p>
                      <div className="position-absolute start-0 top-0">
                        <p> <FontAwesomeIcon icon={faCamera} /></p>
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
            <div className="col-md-8">
              <div className="postAccessoryIcons ">
                <ul className="ps-0">
                  <li><button type="button" className="btn btn-primary btnSidebar2 filterBtn custom-btn ">1,025<br /><span>Posts</span></button></li>
                  <li><button type="button" className="btn btn-primary btnSidebar2 filterBtn custom-btn">268 <br /><span>Followers</span></button></li>
                  <li><button type="button" className="btn btn-primary btnSidebar2 filterBtn custom-btn ">1,999<br /><span>Following</span></button></li>
                  <li><button type="button" className="btn btn-primary btnSidebar2 filterBtn custom-btn">695 <br /><span>Communities</span></button></li>
                  <li><button type="button" className=" fs-2 custom-btn border-0"><i className=" fa fa-angle-down   " /></button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="postSection">
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-md-8">
                <div className="postAccessoryIcons postAccessoryIcons1">
                  <ul className="ps-0">
                    <li className="active">POSTS</li>
                    <li>COMMENTS</li>
                    <li>COMMUNITIES</li>
                  </ul>
                </div>
              </div>
            </div>
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
                              <p className="groupFollowers1">An associate degree in healthcare is a two-year degree that students may complete on campus, online, or in a combination of on-campus and online learning. Healthcare is a major part of the US economy, and an associate in health, health information management, health services management, or a healthcare administration program can open many paths to employment opportunities in the healthcare industry. Population changes drivestudents earning a healthcare</p>
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
                                <p className="groupFollowers1 mb-3">London, United kingdom</p>
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
                              <p className="groupFollowers1"><i className="fa fa-birthday-cake me-2" /> 9th Nov 2000</p>
                              <p className="groupFollowers1"><i className="fa fa-birthday-cake me-2" /> 9th Nov 2000</p>
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
              
                <div className="row">
                  <div className>       
                  <div className="viewPostSection1">
                      <div className="viewShowProfile">
                        <div className="postProfileLeft">
                          <div className="postPimg">
                            <img src={Profilep} alt="" />
                          </div>
                          <div className="postAutorName">
                            <p className="postAuthor">Priti Sinha</p>
                            <small className="postAuthorUsername">@homeowner12</small>
                          </div>
                          <div className="postDate">
                            <ul>
                              <li>12<sup>th</sup> May 2020</li>
                            </ul>
                          </div>
                        </div>
                        <div className="postProfileRight">
                          <div className="postDownArrow">
                            <i className="fa fa-caret-down" />
                          </div>
                        </div>
                      </div>
                      <div className="postContent">
                        <div className="postImg">
                          <img src="img/pexels-photo-1709003.jpeg" alt="" />
                        </div>
                        <div className="postTitle">
                          <h1>Welding Classes In Jersey</h1>
                          <p>We know that carbon emissions have sharply fallen during lockdown. But will all these changes
                            actually be good for the environment in the long run?</p>
                        </div>
                        <div className="postTag">
                          <a href="#">Idea</a> | <a href="#">Welding</a>
                        </div>
                        <div className="row">
                          <div className="col-lg-7">
                            <div className="postShareLike">
                              <div className="postLike"><FontAwesomeIcon icon={faThumbsUp} />  Like</div>
                              <div className="postShare"><FontAwesomeIcon icon={faShare} /> Share</div>
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="postAccessoryIcons">
                              <ul>
                                <li><FontAwesomeIcon icon={faRetweet} /> 2.3k</li>
                                <li><FontAwesomeIcon icon={faEye} /> 6.9K</li>
                                <li><FontAwesomeIcon icon={faComment} /> 563</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space30" />
                      <div className="jobCProfile">
                        <div className="viewShowProfile">
                          <div className="postProfileLeft">
                            <div className="postPimg">
                            
                              <img src={Profilep} alt="" />
                            </div>
                            <div className="postAutorName">
                              <p className="postAuthor">Prem Sinha</p>
                              <small className="postAuthorUsername">@homeowner12</small>
                            </div>
                            <div className="postDate">
                              <ul>
                                <li>12<sup>th</sup> May 2020</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="autorComment">
                          <p>First image is of clouds, called Australian glory cloud. Second one is the vortex of Saturn.
                            These are called solitons, the best known non-dispersive object which can't be perturbed
                            easily. ...</p>
                        </div>
                      </div>
                      <div className="commentProfile">
                        <div className="commentUserImg">
                          <img src={profile} alt="" />
                        </div>
                        <div className="commentInput">
                          <input type="text" placeholder="Start Typing your Comment here" />
                          <button>Send</button>
                        </div>
                      </div>
                      <div className="space15" />
                    </div>

                    
                   
                    <div className="space30" />
                    <div className="viewPostSection1">
                      <div className="viewShowProfile">
                        <div className="postProfileLeft">
                          <div className="postPimg">
                            <img src={Profilep} alt="" />
                          </div>
                          <div className="postAutorName">
                            <p className="postAuthor">Priti Sinha</p>
                            <small className="postAuthorUsername">@homeowner12</small>
                          </div>
                          <div className="postDate">
                            <ul>
                              <li>12<sup>th</sup> May 2020</li>
                            </ul>
                          </div>
                        </div>
                        <div className="postProfileRight">
                          <div className="postDownArrow">
                            <i className="fa fa-caret-down" />
                          </div>
                        </div>
                      </div>
                      <div className="postContent">
                        <div className="postImg">
                          <img src="img/pexels-photo-1709003.jpeg" alt="" />
                        </div>
                        <div className="postTitle">
                          <h1>Welding Classes In Jersey</h1>
                          <p>We know that carbon emissions have sharply fallen during lockdown. But will all these changes
                            actually be good for the environment in the long run?</p>
                        </div>
                        <div className="postTag">
                          <a href="#">Idea</a> | <a href="#">Welding</a>
                        </div>
                        <div className="row">
                          <div className="col-lg-7">
                            <div className="postShareLike">
                              <div className="postLike"><FontAwesomeIcon icon={faThumbsUp} />  Like</div>
                              <div className="postShare"><FontAwesomeIcon icon={faShare} /> Share</div>
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="postAccessoryIcons">
                              <ul>
                                <li><FontAwesomeIcon icon={faRetweet} /> 2.3k</li>
                                <li><FontAwesomeIcon icon={faEye} /> 6.9K</li>
                                <li><FontAwesomeIcon icon={faComment} /> 563</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space30" />
                      <div className="jobCProfile">
                        <div className="viewShowProfile">
                          <div className="postProfileLeft">
                            <div className="postPimg">
                            
                              <img src={Profilep} alt="" />
                            </div>
                            <div className="postAutorName">
                              <p className="postAuthor">Prem Sinha</p>
                              <small className="postAuthorUsername">@homeowner12</small>
                            </div>
                            <div className="postDate">
                              <ul>
                                <li>12<sup>th</sup> May 2020</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="autorComment">
                          <p>First image is of clouds, called Australian glory cloud. Second one is the vortex of Saturn.
                            These are called solitons, the best known non-dispersive object which can't be perturbed
                            easily. ...</p>
                        </div>
                      </div>
                      <div className="commentProfile">
                        <div className="commentUserImg">
                          <img src={profile} alt="" />
                        </div>
                        <div className="commentInput">
                          <input type="text" placeholder="Start Typing your Comment here" />
                          <button>Send</button>
                        </div>
                      </div>
                      <div className="space15" />
                    </div>
                   
                    <div className="space30" />
                    <div className="viewPostSection1">
                      <div className="viewShowProfile">
                        <div className="postProfileLeft">
                          <div className="postPimg">
                            <img src={Profilep} alt="" />
                          </div>
                          <div className="postAutorName">
                            <p className="postAuthor">Priti Sinha</p>
                            <small className="postAuthorUsername">@homeowner12</small>
                          </div>
                          <div className="postDate">
                            <ul>
                              <li>12<sup>th</sup> May 2020</li>
                            </ul>
                          </div>
                        </div>
                        <div className="postProfileRight">
                          <div className="postDownArrow">
                            <i className="fa fa-caret-down" />
                          </div>
                        </div>
                      </div>
                      <div className="postContent">
                        <div className="postImg">
                          <img src="img/pexels-photo-1709003.jpeg" alt="" />
                        </div>
                        <div className="postTitle">
                          <h1>Welding Classes In Jersey</h1>
                          <p>We know that carbon emissions have sharply fallen during lockdown. But will all these changes
                            actually be good for the environment in the long run?</p>
                        </div>
                        <div className="postTag">
                          <a href="#">Idea</a> | <a href="#">Welding</a>
                        </div>
                        <div className="row">
                          <div className="col-lg-7">
                            <div className="postShareLike">
                              <div className="postLike"><FontAwesomeIcon icon={faThumbsUp} />  Like</div>
                              <div className="postShare"><FontAwesomeIcon icon={faShare} /> Share</div>
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="postAccessoryIcons">
                              <ul>
                                <li><FontAwesomeIcon icon={faRetweet} /> 2.3k</li>
                                <li><FontAwesomeIcon icon={faEye} /> 6.9K</li>
                                <li><FontAwesomeIcon icon={faComment} /> 563</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space30" />
                      <div className="jobCProfile">
                        <div className="viewShowProfile">
                          <div className="postProfileLeft">
                            <div className="postPimg">
                            
                              <img src={Profilep} alt="" />
                            </div>
                            <div className="postAutorName">
                              <p className="postAuthor">Prem Sinha</p>
                              <small className="postAuthorUsername">@homeowner12</small>
                            </div>
                            <div className="postDate">
                              <ul>
                                <li>12<sup>th</sup> May 2020</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="autorComment">
                          <p>First image is of clouds, called Australian glory cloud. Second one is the vortex of Saturn.
                            These are called solitons, the best known non-dispersive object which can't be perturbed
                            easily. ...</p>
                        </div>
                      </div>
                      <div className="commentProfile">
                        <div className="commentUserImg">
                          <img src={profile} alt="" />
                        </div>
                        <div className="commentInput">
                          <input type="text" placeholder="Start Typing your Comment here" />
                          <button>Send</button>
                        </div>
                      </div>
                      <div className="space15" />
                    </div>
                    <div className="space30" />
                  </div>
                </div>
              </div>
            </div>
          </div></div>
          
  
     
    </div>
    
  )
}

export default UserProfileposts
import React from 'react'
import Header from '../common/header'
import Footer from '../common/footer'

const Accountowner = () => {
    return (
        <div>
            <Header />
            <div className="postSection">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="MessageTitle">Account settings</div>
                            <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search Here" title="Type in a name" />

                            <b>ACCOUNT &amp; SECURITY</b>
                            <hr />
                            <ul className="ser">
                                <li><a href="#">Account access</a></li>
                                <li> <a href="#">Account preferences</a></li>
                                <li> <a href="">Payment preferences</a></li>
                            </ul>
                            <strong>BUSINESS PROFILE</strong>
                            <hr />

                            <ul className="ser">
                                <li><a href="#">Business information</a></li>
                                <li className='datapri'><a href="#">Account Owner information</a></li>
                                <li><a href="#">Wallet, banks and cards</a></li>
                                <li> <a href="#">Notifications</a></li>

                            </ul>
                            <b> PRODUCTS &amp; SERVICES</b>
                            <hr />
                            <ul className="ser">
                                <li><a href="#">Course payments</a></li>
                                <li> <a href="#">WRE Subscription</a></li>
                                <li> <a href="">Job Portal</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-8">
                        <div class="messageSidePadding">
                  <div class="messageSidebar">
                     <div class="messageGrop ">
                        <div>
                           <p class="HeadingTitleSetting" width="100%">Account Owner information</p><table class="table table-striped table-class" id="table-id">
                              <tbody>
                                 <tr class="border-bottom">
                                    
                                 </tr>
                                 <tr class="border-bottom">
                                    <td class="nameM">Owner Name</td>
                                    <td class="sMessage">Temple University</td>
                                    <td></td>
                                    <td><a href=""> Update</a></td>
                                 </tr>
                                
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
               </div>


                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <Footer />
                            </div>
    )}
                            export default Accountowner
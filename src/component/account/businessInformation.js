import React from 'react'
import Header from '../common/header'
import Footer from '../common/footer'

const businessInformation = () => {
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
                                <li className='datapri'><a href="#">Business information</a></li>
                                <li><a href="#">Account Owner information</a></li>
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
                        <div className="messageSidePadding">
                  <div className="messageSidebar">
                     <div className="messageGrop ">
                        <div>
                           <p className="HeadingTitleSetting" width="100%">Business information</p><table className="table table-striped table-class" id="table-id">
                              <tbody>
                                 <tr className="border-bottom">
                                    
                                 </tr>
                                 <tr className="border-bottom">
                                    <td className="nameM">Business information</td>
                                    <td className="sMessage">Temple University</td>
                                    <td></td>
                                    <td><a href=""> Update</a></td>
                                 </tr>
                                   <tr className="border-bottom">
                                    <td className="nameM">WRE Merchant ID</td>
                                    <td className="sMessage">WAWLRHH5TPLTC</td>
                                    <td></td>
                                    <td><a href=""> Update</a></td>
                                 </tr>
                                   <tr className="border-bottom">
                                    <td className="nameM">GST No.</td>
                                    <td className="sMessage">WAWLRHH5TPLTC</td>
                                    <td></td>
                                    <td><a href=""> Update</a></td>
                                 </tr>
                                   <tr className="border-bottom">
                                    <td className="nameM">Trade License Number</td>
                                    <td className="sMessage">WAWLRHH5TPLTC</td>
                                    <td></td>
                                    <td><a href=""> Update</a></td>
                                 </tr>
                                   <tr className="border-bottom">
                                    <td className="nameM">Admin Security Key</td>
                                    <td className="sMessage1">Add an extra layer of security to your account by using a one-time security code in addition to your password each time you log in. (Useful for multiple Admin logins)</td>
                                    <td></td>
                                    <td><a href=""> Update</a></td>
                                 </tr>
                                   <tr className="border-bottom">
                                    <td className="nameM">Certificate &amp; Training</td>
                                    <td className="sMessage">Certified by Temple</td>
                                    <td></td>
                                    <td><a href=""> Update</a></td>
                                 </tr>
                                 <tr>
                                    <td className="nameM">Address</td>
                                    <td className="sMessage1">1801 N Broad St, Philadelphia, PA 19122, USA (Home) 1801 N Broad St, Philadelphia, PA 19122, USA (Business)</td>
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
                            export default businessInformation
import React, {useState} from 'react';
import axios from 'axios';
// import { useNavigate } from "react-router-dom";
const Studentapplication = () => {
    const [successMessage, setSuccessMessage] = useState('');
      const [name, setName] = useState('');
      const [dob, setDob] = useState('');
      const [email, setEmail] = useState('');
      const [mobile, setMobile] = useState('');
      const [job_role, setJob_role] = useState('');
      const [job_exp, setJob_exp] = useState('');
      const [address, setAddress] = useState('');
      const [city, setCity] = useState('');
      const [pincode, setPincode] = useState('');
      const [cv, setCv] = useState('');
      function handleChange(e) {
        setCv(e.target.files[0]);
      }
    console.log(cv)
      
      function handleSubmit(e) {
        e.preventDefault();
        const url = 'https://admin.allnuud.com/api/job_application';
        const formData = new FormData();
        formData.append('name', name);
        formData.append('dob', dob);
        formData.append('email', email);
        formData.append('mobile', mobile);
        formData.append('job_role', job_role);
        formData.append('job_exp', job_exp);
        formData.append('address', address);
        formData.append('city', city);
        formData.append('pincode', pincode);
        formData.append('cv', cv);
        const config = {
          headers: {
            'content-type': 'multipart/form-data',
          },
        };
        axios.post(url, formData, config)
          .then((response) => {
            console.log(response.data);
            setSuccessMessage('Application Submitted');
            console.log(response.data.file);
          })
          .catch((error) => {
            console.error("Error uploading file: ", error);
            console.log(error);
          });
        
         
      }
    return (
        <div>
            <div class="container">
                <div class="apply_box">
                    <h1>Job Application Form</h1>

                    <form className='stu' onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div class="form_controluu">
                                    <input  type="text" value={name} name="name" onChange={(e)=>{setName(e.target.value)}}  />
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div class="form_control">
                                    <input id="first name" placeholder="Enter Email" name="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                                </div>
                            </div>
                            <div className='col-lg-6'>
                            <div class="form_control">
                                <input type='password' placeholder='Enter Password'  required />
                                </div>
                            </div>
                            <div className='col-lg-6'>
                            <div class="form_control">
                                <input type='password' placeholder='Confim Password' required />
                                </div>
                            </div>
                            <div className='col-lg-6'>
                            <div class="form_control">
                                <input  type="date" id=" date"  value={dob} name="dob" onChange={(e)=>{setDob(e.target.value)}} placeholder="Enter Date of Birth" />
                                </div>
                            </div>
                            <div className='col-lg-6'>
                            <div class="form_control">
                                <input type="text" id="mobNum" value={mobile} name="mobile" onChange={(e)=>{setMobile(e.target.value)}} placeholder="Mobile No" required />
                                </div>
                            </div>
                            <div className='col-lg-6'>
                            <div class="form_control">
                            <input type="text" id="mobNum" value={job_role} name="job_role" onChange={(e)=>{setJob_role(e.target.value)}} placeholder="job_role" required />
                         
                                {/* <select id="job" placeholder='Enter Job Role'>
                                    <option value="">Select Job Role</option>
                                    <option value="">Fronted Devloper</option>
                                    <option value="">Backend Devloper</option>
                                    <option value="">Full stack Devloper</option>
                                    <option value="">UI IX Designer</option>
                                </select> */}
                                </div>
                            </div>
                            <div className='col-lg-6'>
                            <div class="form_control">
                            <input type="text" id="mobNum" value={job_exp} name="job_exp" onChange={(e)=>{setJob_exp(e.target.value)}} placeholder="job_exp" required />
                         
                            </div>
                            </div>
                            <div className='col-lg-6'>
                            <div class="form_control">
                                <textarea id="address" name="address" value={address} onChange={(e)=>{setAddress(e.target.value)}}  row="2" className='form-control' placeholder="Enter Address"></textarea>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                            <div class="form_control">
                                <input name="city" value={city} onChange={(e)=>{setCity(e.target.value)}} placeholder="Enter city name" />
                                </div>
                            </div>
                            <div className='col-lg-6'>
                            <div class="form_control">
                                <select id="city">
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">District Of Columbia</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </select>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                            <div class="form_control">
                                <input name="pincode" value={pincode} onChange={(e)=>{setPincode(e.target.value)}}  placeholder="Enter ZipCode" />
</div>
                            </div>
                            <div className='col-lg-12'>
                            <div class="form_control">
                                <textarea id="resume" name="resume" row="2" className='form-control' placeholder="Cover Letter"></textarea>
                                </div>
                            </div>
                            <div className='clearfix'></div>
                            <div className='col-lg-12'>
                            <div class="form_control">
                                <label for="Upload">Upload Your CV</label>
                                <input type="file"  name="cv" onChange={handleChange} className='form-control'  id="upload"  placeholder='Upload CV' />
                                </div>
                            </div>
                            <div className='clearfix'></div>
                           
                        </div>
                        <div class="button_container">
                            <button type="submit"  className='btn btn-primary'>Apply Now</button>
                           
                        </div>
                        {successMessage && <p className='sucress'>{successMessage}</p>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Studentapplication
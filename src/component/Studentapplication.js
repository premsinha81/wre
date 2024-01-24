import React from 'react'

const Studentapplication = () => {
    return (
        <div>
            <div class="container">
                <div class="apply_box">
                    <h1>Job Application Form</h1>

                    <form className='stu'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div class="form_control">
                                    <input id="first name" placeholder="Enter Full Name" required />
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div class="form_control">
                                    <input id="first name" placeholder="Enter Email" required />
                                </div>
                            </div>
                            <div className='col-lg-6'>
                            <div class="form_control">
                                <input type='password' placeholder='Enter Password' required />
                                </div>
                            </div>
                            <div className='col-lg-6'>
                            <div class="form_control">
                                <input type='password' placeholder='Confim Password' required />
                                </div>
                            </div>
                            <div className='col-lg-6'>
                            <div class="form_control">
                                <input value="2023-02-15" type="date" id=" date" placeholder="Enter Date of Birth" />
                                </div>
                            </div>
                            <div className='col-lg-6'>
                            <div class="form_control">
                                <input type="text" id="mobNum" placeholder="Mobile No" required />
                                </div>
                            </div>
                            <div className='col-lg-6'>
                            <div class="form_control">
                                <select id="job" placeholder='Enter Job Role'>
                                    <option value="">Select Job Role</option>
                                    <option value="">Fronted Devloper</option>
                                    <option value="">Backend Devloper</option>
                                    <option value="">Full stack Devloper</option>
                                    <option value="">UI IX Designer</option>
                                </select>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                            <div class="form_control">
                                <select id="job" placeholder='Working Experience'>
                                    <option value="">Working Experience</option>
                                    <option value="">01 Year</option>
                                    <option value="">02 Year</option>
                                    <option value="">03 Year</option>
                                    <option value="">04 Year</option>
                                </select>
                            </div>
                            </div>
                            <div className='col-lg-6'>
                            <div class="form_control">
                                <textarea id="address" name="address" row="2" className='form-control' placeholder="Enter Address"></textarea>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                            <div class="form_control">
                                <input name="city" placeholder="Enter city name" />
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
                                <input name="city" placeholder="Enter ZipCode" />
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
                                <input className='form-control' type="file" id="upload" name="upload" placeholder='Upload CV' />
                                </div>
                            </div>
                            <div className='clearfix'></div>
                           
                        </div>
                        <div class="button_container">
                            <button type="submit" className='btn btn-primary'>Apply Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Studentapplication
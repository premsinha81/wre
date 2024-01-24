import React from 'react'

const studentapplicatin = () => {
  return (
    <div>
        <div class="container">
        <div class="apply_box">
            <h1>Job Application
                   
                
            </h1>
            <form className='stu'>
                <div class="form_container">
                    <div class="form_control">
                        <label for="first name"> Name</label>
                        <input id="first name" placeholder="Enter  name" />
                    </div>
                    <div class="form_control">
                        <label for="date">DOB</label>
                        <input value="2023-02-15" type="date" id=" date" placeholder="Enter city name" />
                    </div>
                    <div class="form_control">
                        <label for="email  ">Email</label>
                        <input type="email
                        " id="email" placeholder="Enter email" />
                    </div>
                    <div class="form_control">
                        <label for="email  ">Mobile No</label>
                        <input type="email
                        " id="email" placeholder="Mobile No" />
                    </div>
                   
                    <div class="form_control">
                        <label for="job">Job Role</label>
                        <select id="job">
                            <option value="">Select Job Role</option>
                            <option value="">Fronted Devloper</option>
                            <option value="">Backend Devloper</option>
                            <option value="">Full stack Devloper</option>
                            <option value="">UI IX Designer</option>S
                        </select>
                    </div>
                    <div class="form_control">
                        <label for="job">Job Experience</label>
                        <select id="job">
                            <option value="">Select Experience</option>
                            <option value="">Fronted Devloper</option>
                            <option value="">Backend Devloper</option>
                            <option value="">Full stack Devloper</option>
                            <option value="">UI IX Designer</option>S
                        </select>
                    </div>
                    <div class="textarea_control">
                        <label for="address  ">Address</label>
                        <textarea id="address" name="address" row="4" cols="50" placeholder="Enter address"></textarea>
                    </div>
                    <div class="form_control">
                        <label for="city">City</label>
                        <input name="city"  placeholder="Enter city name" />
                    </div>
                    <div class="form_control">
                        <label for="pincode">pincode</label>
                        <input type="number" id=" pincode" placeholder="Enter Pincode Number" />
                    </div>
                  
                    <div class="form_control">
                        <label for="Upload">Upload Your CV</label>
                        <input type="file" id="upload" name="upload" />
                    </div>
                </div>
                <div class="button_container">
                    <button type="submit">Apply now</button>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default studentapplicatin
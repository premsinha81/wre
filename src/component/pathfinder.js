import { display } from '@mui/system';
import React, { useState } from 'react'

// import { quiz } from './quiz';
const Pathfinder = () => {



  var Questionbank = [
    {
      Question: "What are you looking to gain from PTTI?",
      Answers: [
        { Answer: "Portfolio building", isCorrect: true },
        { Answer: "A steady career", isCorrect: false },
      ]
    },
    {
      Question: "How do you prefer your workflow?",
      Answers: [
        { Answer: "Self-structured", isCorrect: true },
        { Answer: "Guided", isCorrect: false },
      ]
    },
    {
      Question: "What kind of learner are you?",
      Answers: [
        { Answer: "I prefer hands-on work.", isCorrect: true },
        { Answer: "I’m a visual learner!", isCorrect: false },
      ]
    },
    {
      Question: "How would you describe your access to transportation?",
      Answers: [
        { Answer: "I have my own vehicle.", isCorrect: true },
        { Answer: "I typically use public transportation.", isCorrect: false },
      ]
    },
    {
      Question: "Are you self driven or do you like to be taught by professionals?",
      Answers: [
        { Answer: "Self learner", isCorrect: true },
        { Answer: "Taught by professionals", isCorrect: false },
      ]
    }
  ]
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showscore, setShowscore] = useState(0);
  const progressBar = currentQuestion + 1;
  return (
    <div>
      <section className="headerImagecoun headerImagecoun1">
        <div className="backgroundcoun ">
          <div className="container">
            <div className="row  ">
              <div className="col-md-12 section-h">
                <div className="bannerHeadingcoun">
                  <center>
                    <h1>WRE Pathfinder</h1>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='container formSetup'>
        <h2>Pathfinder Quiz</h2>
        <div className='row'>
          <div className='col-lg-12'>
            <form action='https://forms.zohopublic.in/workreadyeducation/form/WREPathfinder/formperma/MioisqnYu5ojH_jtdyvGDMYeelKHYqe0i-371H8XlIo/htmlRecords/submit' name='form' id='form' method='POST' accept-charset='UTF-8' enctype='multipart/form-data'>
              <input type="hidden" name="zf_referrer_name" value="" />
              <input type="hidden" name="zf_redirect_url" value="" />
              <input type="hidden" name="zc_gad" value="" />
              <div className='row'>
                <div className='col-lg-6'>
                  <input className='form-control' type="text" maxlength="255" class="form-control" name="Name_First" fieldType="7" placeholder="Enter Name" required />              
                </div>
                <div className='col-lg-6'>
                  <input className='form-control' required type="text" compname="PhoneNumber" placeholder="Enter Phone Number" name="PhoneNumber_countrycode" phoneFormat="1" isCountryCodeEnabled="false" maxlength="20" value="" fieldType="11" id="international_PhoneNumber_countrycode" />
                </div>
                <div className='col-lg-6'>
                  <input className='form-control' type="text" maxlength="255" name="Email" value="" fieldType="9" placeholder="Enter Email" required />
                </div>
                <div className='col-lg-6'>  
                  <input className='form-control' type="text" maxlength="2083" name="Website" value="" placeholder="Enter Website" />
                </div>
                <div className='col-lg-6'>  
                  <input className='form-control' type="text" maxlength="255" name="Address_AddressLine1" placeholder="Enter Address" />
                </div>
                <div className='col-lg-6'>
                <input className='form-control' type="text" maxlength="255" name="Address_AddressLine2" placeholder="" />
                </div>
                <div className='col-lg-6'>
                <input className='form-control' type="text" maxlength="255" name="Address_City" placeholder="" />
                </div>
                <div className='col-lg-6'>
                <input className='form-control' type="text" maxlength="255" name="Address_Region" placeholder="" />
                </div>
                <div className='col-lg-6'>
                <input className='form-control' type="text" maxlength="255" name="Address_ZipCode" placeholder="" />
                </div>
                <div className='col-lg-6'>
                <select name="Address_Country">
                <option value="-Select-">-Select-</option>
                <option>&Aring;land Islands</option>
                <option>Afghanistan</option>
                <option>Akrotiri</option>
                <option>Albania</option>
                <option>Algeria</option>
                <option>American Samoa</option>
                <option>Andorra</option>
                <option>Angola</option>
                <option>Anguilla</option>
                <option>Antarctica</option>
                <option>Antigua and Barbuda</option>
                <option>Argentina</option>
                <option>Armenia</option>
                <option>Aruba</option>
                <option>Ashmore and Cartier Islands</option>
                <option>Australia</option>
                <option>Austria</option>
                <option>Azerbaijan</option>
                <option>Bahrain</option>
                <option>Bangladesh</option>
                <option>Barbados</option>
                <option>Bassas Da India</option>
                <option>Belarus</option>
                <option>Belgium</option>
                <option>Belize</option>
                <option>Benin</option>
                <option>Bermuda</option>
                <option>Bhutan</option>
                <option>Bolivia</option>
                <option>Bosnia and Herzegovina</option>
                <option>Botswana</option>
                <option>Bouvet Island</option>
                <option>Brazil</option>
                <option>British Indian Ocean Territory</option>
                <option>British Virgin Islands</option>
                <option>Brunei</option>
                <option>Bulgaria</option>
                <option>Burkina Faso</option>
                <option>Burma</option>
                <option>Burundi</option>
                <option>Cambodia</option>
                <option>Cameroon</option>
                <option>Canada</option>
                <option>Cape Verde</option>
                <option>Caribbean Netherlands</option>
                <option>Cayman Islands</option>
                <option>Central African Republic</option>
                <option>Chad</option>
                <option>Chile</option>
                <option>China</option>
                <option>Christmas Island</option>
                <option>Clipperton Island</option>
                <option>Cocos &#x28;Keeling&#x29; Islands</option>
                <option>Colombia</option>
                <option>Comoros</option>
                <option>Cook Islands</option>
                <option>Coral Sea Islands</option>
                <option>Costa Rica</option>
                <option>Cote D&#x27;Ivoire</option>
                <option>Croatia</option>
                <option>Cuba</option>
                <option>Cura&ccedil;ao</option>
                <option>Cyprus</option>
                <option>Czech Republic</option>
                <option>Democratic Republic of the Congo</option>
                <option>Denmark</option>
                <option>Dhekelia</option>
                <option>Djibouti</option>
                <option>Dominica</option>
                <option>Dominican Republic</option>
                <option>Ecuador</option>
                <option>Egypt</option>
                <option>El Salvador</option>
                <option>Equatorial Guinea</option>
                <option>Eritrea</option>
                <option>Estonia</option>
                <option>Ethiopia</option>
                <option>Europa Island</option>
                <option>Falkland Islands &#x28;Islas Malvinas&#x29;</option>
                <option>Faroe Islands</option>
                <option>Federated States of Micronesia</option>
                <option>Fiji</option>
                <option>Finland</option>
                <option>France</option>
                <option>French Guiana</option>
                <option>French Polynesia</option>
                <option>French Southern and Antarctic Lands</option>
                <option>Gabon</option>
                <option>Gaza Strip</option>
                <option>Georgia</option>
                <option>Germany</option>
                <option>Ghana</option>
                <option>Gibraltar</option>
                <option>Glorioso Islands</option>
                <option>Greece</option>
                <option>Greenland</option>
                <option>Grenada</option>
                <option>Guadeloupe</option>
                <option>Guam</option>
                <option>Guatemala</option>
                <option>Guernsey</option>
                <option>Guinea</option>
                <option>Guinea-bissau</option>
                <option>Guyana</option>
                <option>Haiti</option>
                <option>Heard Island and Mcdonald Islands</option>
                <option>Holy See &#x28;Vatican City&#x29;</option>
                <option>Honduras</option>
                <option>Hong Kong</option>
                <option>Hungary</option>
                <option>Iceland</option>
                <option>India</option>
                <option>Indonesia</option>
                <option>Iran</option>
                <option>Iraq</option>
                <option>Ireland</option>
                <option>Isle of Man</option>
                <option>Israel</option>
                <option>Italy</option>
                <option>Jamaica</option>
                <option>Jan Mayen</option>
                <option>Japan</option>
                <option>Jersey</option>
                <option>Jordan</option>
                <option>Juan De Nova Island</option>
                <option>Kazakhstan</option>
                <option>Kenya</option>
                <option>Kiribati</option>
                <option>Kosovo</option>
                <option>Kuwait</option>
                <option>Kyrgyzstan</option>
                <option>Laos</option>
                <option>Latvia</option>
                <option>Lebanon</option>
                <option>Lesotho</option>
                <option>Liberia</option>
                <option>Libya</option>
                <option>Liechtenstein</option>
                <option>Lithuania</option>
                <option>Luxembourg</option>
                <option>Macau</option>
                <option>Macedonia</option>
                <option>Madagascar</option>
                <option>Malawi</option>
                <option>Malaysia</option>
                <option>Maldives</option>
                <option>Mali</option>
                <option>Malta</option>
                <option>Marshall Islands</option>
                <option>Martinique</option>
                <option>Mauritania</option>
                <option>Mauritius</option>
                <option>Mayotte</option>
                <option>Mexico</option>
                <option>Moldova</option>
                <option>Monaco</option>
                <option>Mongolia</option>
                <option>Montenegro</option>
                <option>Montserrat</option>
                <option>Morocco</option>
                <option>Mozambique</option>
                <option>Myanmar</option>
                <option>Namibia</option>
                <option>Nauru</option>
                <option>Navassa Island</option>
                <option>Nepal</option>
                <option>Netherlands</option>
                <option>Netherlands Antilles</option>
                <option>New Caledonia</option>
                <option>New Zealand</option>
                <option>Nicaragua</option>
                <option>Niger</option>
                <option>Nigeria</option>
                <option>Niue</option>
                <option>Norfolk Island</option>
                <option>North Korea</option>
                <option>Northern Mariana Islands</option>
                <option>Norway</option>
                <option>Oman</option>
                <option>Pakistan</option>
                <option>Palau</option>
                <option>Palestine</option>
                <option>Panama</option>
                <option>Papua New Guinea</option>
                <option>Paracel Islands</option>
                <option>Paraguay</option>
                <option>Peru</option>
                <option>Philippines</option>
                <option>Pitcairn Islands</option>
                <option>Poland</option>
                <option>Portugal</option>
                <option>Puerto Rico</option>
                <option>Qatar</option>
                <option>Republic of the Congo</option>
                <option>Reunion</option>
                <option>Romania</option>
                <option>Russia</option>
                <option>Rwanda</option>
                <option>Saint Barth&Atilde;&copy;lemy</option>
                <option>Saint Helena</option>
                <option>Saint Kitts and Nevis</option>
                <option>Saint Lucia</option>
                <option>Saint Martin</option>
                <option>Saint Pierre and Miquelon</option>
                <option>Saint Vincent and the Grenadines</option>
                <option>Samoa</option>
                <option>San Marino</option>
                <option>Sao Tome and Principe</option>
                <option>Saudi Arabia</option>
                <option>Senegal</option>
                <option>Serbia</option>
                <option>Seychelles</option>
                <option>Sierra Leone</option>
                <option>Singapore</option>
                <option>Sint Maarten</option>
                <option>Slovakia</option>
                <option>Slovenia</option>
                <option>Solomon Islands</option>
                <option>Somalia</option>
                <option>South Africa</option>
                <option>South Georgia and the South Sandwich Islands</option>
                <option>South Korea</option>
                <option>South Sudan</option>
                <option>Spain</option>
                <option>Spratly Islands</option>
                <option>Sri Lanka</option>
                <option>Sudan</option>
                <option>Suriname</option>
                <option>Svalbard</option>
                <option>Swaziland</option>
                <option>Sweden</option>
                <option>Switzerland</option>
                <option>Syria</option>
                <option>Taiwan</option>
                <option>Tajikistan</option>
                <option>Tanzania</option>
                <option>Thailand</option>
                <option>The Bahamas</option>
                <option>The Gambia</option>
                <option>Timor-leste</option>
                <option>Togo</option>
                <option>Tokelau</option>
                <option>Tonga</option>
                <option>Trinidad and Tobago</option>
                <option>Tromelin Island</option>
                <option>Tunisia</option>
                <option>Turkey</option>
                <option>Turkmenistan</option>
                <option>Turks and Caicos Islands</option>
                <option>Tuvalu</option>
                <option>Uganda</option>
                <option>Ukraine</option>
                <option>United Arab Emirates</option>
                <option>United Kingdom</option>
                <option>United States</option>
                <option>Uruguay</option>
                <option>Uzbekistan</option>
                <option>Vanuatu</option>
                <option>Venezuela</option>
                <option>Vietnam</option>
                <option>Virgin Islands</option>
                <option>Wake Island</option>
                <option>Wallis and Futuna</option>
                <option>West Bank</option>
                <option>Western Sahara</option>
                <option>Yemen</option>
                <option>Zambia</option>
                <option>Zimbabwe</option>
              </select>
                </div>
              </div>
              <div style={{ textAlign:'center'}}>
              <button className='btn btn-primary postButton' type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>


      {/* Pathfinder Quiz Start */}
     {/* <div className="pathFinder">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="quizTitle">Pathfinder Quiz</h1>
            </div>
            <div className="col-lg-12">
              <div className="pathFinderQuizBody">
                <div className="quizHeader" />
                <main>
                  <article>
                    
                    <div className="container d-flex justify-content-center pt-2"></div>
                    <div className="col-12 p-3 collapse" id="collapseExample">
                      <div className="card">
                        <div className="card-header font-weight-bold">
                          Available features
                        </div>
                        <div className="card-body">
                          <ul>
                            <li>
                              Multi step form using Bootstrap 5, Jquery and CSS
                            </li>
                            <li>
                              Automatically percentage calculation of the progress
                              bar
                            </li>
                            <li>
                              <b>Step 1:</b> Add new user / Search existing user
                            </li>
                            <ul>
                              <li>Option "Add new user"</li>
                              <ul>
                                <li>Abilty to click on Next button</li>
                              </ul>
                              <li>Option Search existing user</li>
                              <ul>
                                <li>Display input field, which is searchable</li>
                                <li>
                                  Next button is disabled until a available option
                                  is selected from the searchlist.
                                </li>
                                <li>
                                  Next button will be deactivated when the selected
                                  value is being altered.
                                </li>
                                <li>
                                  When a user is selected the step 2 form will be
                                  filled with all available data.
                                </li>
                              </ul>
                            </ul>
                            <li>
                              <b>Step 2:</b> User information
                            </li>
                            <ul>
                              <li>
                                Input field "first name" and "last name" are
                                required to advance to step 3.
                              </li>
                              <li>
                                When first and/or last name is empty an invalid
                                warning will be displayed.
                              </li>
                            </ul>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="container d-flex justify-content-center"
                      style={{ minWidth: "720px!important" }}
                    >
                      <div className="col-11 col-offset-2">
                        <div className="card mt-3">
                          <div className="card-header font-weight-bold">
                            <span>{currentQuestion + 1}</span>/<span>{Questionbank.length}</span>
                            <div className="progress" style={{ height: 20 }}>
                              <div
                                className="progress-bar progress-bar-striped progress-bar-animated"
                                style={{ fontWeight: "bold", fontSize: 15, width: progressBar * 20 + '%' }}
                                role="progressbar"
                              />
                            </div>
                          </div>
                          <div className="card-body p-4 step">
                            <div className="container pad">
                              <div className="col-md-12">
                                <section className=" mt-3">
                                  <h5>
                                    <b>{currentQuestion + 1}.</b> {Questionbank[currentQuestion].Question}
                                  </h5>
                                  <ul className="prorfolio">
                                    {Questionbank[currentQuestion].Answers.map((answer) => (
                                      <li>
                                        <label>
                                          <input
                                            type="radio"
                                            name="answers"
                                            id=""
                                            defaultValue=""
                                          />
                                          <span className="" />
                                          <span className="">{answer.Answer}</span>
                                        </label>
                                      </li>
                                    ))}

                                  </ul>
                                </section>
                              </div>
                            </div>
                          </div>
                          <div className="card-footer">
                            <button
                              type="submit"
                              className="postButton next float-end"
                              disabled={currentQuestion == Questionbank.length - 1}
                              onClick={() => {
                                setCurrentQuestion((currQuestion) => currQuestion + 1)
                              }}
                            >
                              {currentQuestion === Questionbank.length - 1 ? "Submit" : "Next"}
                            </button>
                            <button
                              type="submit"
                              className="postButton back"
                              disabled={currentQuestion == 0}
                              onClick={() => {
                                setCurrentQuestion((currQuestion) => currQuestion - 1)
                              }}
                            >
                              <i className="fa fa-paper-plane postSendBtn" />
                              <span className="postSendText">Prev</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </article>
                </main>
              </div>
            </div>
          </div>
          
        </div>
                            </div> */}

    </div>

  )
}

export default Pathfinder
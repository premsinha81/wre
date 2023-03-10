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
  const progressBar = currentQuestion +1;
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
      {/* Pathfinder Quiz Start */}
      <div className="pathFinder">
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
                    {/* partial:index.partial.html */}
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
                            <span>{currentQuestion+1}</span>/<span>{Questionbank.length}</span>
                            <div className="progress" style={{ height: 20 }}>
                              <div
                                className="progress-bar progress-bar-striped progress-bar-animated"
                                style={{ fontWeight: "bold", fontSize: 15, width: progressBar*20 + '%' }}
                                role="progressbar"
                              />
                            </div>
                          </div>
                          <div className="card-body p-4 step">
                            <div className="container pad">
                              <div className="col-md-12">
                                <section className=" mt-3">
                                  <h5>
                                    <b>{currentQuestion+1}.</b> {Questionbank[currentQuestion].Question}
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
                              onClick={()=> {
                                setCurrentQuestion((currQuestion) => currQuestion + 1)
                              }}
                            >
                              {currentQuestion === Questionbank.length - 1 ? "Submit" : "Next"}
                            </button>
                            <button
                              type="submit"
                              className="postButton back"
                              disabled={currentQuestion == 0}
                              onClick={()=> {
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
                    {/* partial */}
                  </article>
                </main>
              </div>
            </div>
          </div>
          {/* Pathfinder Quiz End */}
        </div>
      </div>

    </div>

  )
}

export default Pathfinder
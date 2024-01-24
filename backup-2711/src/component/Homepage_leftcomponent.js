import React, { useState, useEffect } from "react";

// import { faSearch} from '@fortawesome/fontawesome-free-solid';

function Homepage_leftcomponent() {
  const [RatingNewpage, setRatingNewpage] = useState([]);
  const getRatingNewpage = async () => {
    const respond = await fetch(
      "https://admin.allnuud.com/api/suggestion_question"
    );
    const dataRatingNewpage = await respond.json();
    setRatingNewpage(dataRatingNewpage);
  };
  useEffect(() => {
    getRatingNewpage();
  }, []);

  return (
    <div>
      <div className="rightSection leftsectionset my-lg-5 mt-3 p-2 bg-lgrey rounded">
        <div className="row">
          <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="w-100">
              <h5 className="cssh">Top Ranking Schools</h5>
              <div class="divider mt-0 mb-2"></div>
              {RatingNewpage.data &&
                RatingNewpage.data.length > 0 &&
                RatingNewpage.data.map((RatingNewpage, x) => (
                  <div class="col-12">
                    <div class="p-2">
                      <div class="groupName rounded bg-white p-2">
                        <h4 class="gNamell text-blue ">
                          <a href={"search_Ranking/" + RatingNewpage.id}>
                            {RatingNewpage.question}
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage_leftcomponent;

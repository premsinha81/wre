import './resources.css';
import Img1 from '../img/section1.jpg';
import Img2 from '../img/section2.jpg';
import Img3 from '../img/section3.jpg';
function Resources() {
    return (
            <section>
               
                        <h4 class=" related">Related Top Resources</h4>
                        <div class="row ">
                            <div class="col-md-4 col-lg-4 col-sm-12 related">
                                <img class="img-fluid w-100" src={Img1} />
                                    <div class="border-top related-p">
                                        <span> June 14 2022</span>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
                                    </div>
                            </div>
                            <div class="col-md-4 col-lg-4 col-sm-12 related">
                                <img class="img-fluid w-100" src={Img2} />
                                    <div class="border-top related-p">
                                        <span> June 14 2022</span>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
                                    </div>
                            </div>
                            <div class="col-md-4 col-lg-4 col-sm-12 related">
                                <img class="img-fluid w-100" src={Img3} />
                                    <div class="border-top related-p">
                                        <span> June 14 2022</span>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
                                    </div>
                            </div>
                        </div>
                  
            </section>
    )
}

export default Resources;
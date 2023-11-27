import logoImg from '../../img/WRE.png';
export default function Footer() {
  return (
    <>
      <footer class="footerSection">
        <div className="subscribeNow">
          <ul>
            <li className="text-right">Be up to date across industries</li>
            <li><form action="" class="subscribeForm">
                <div class="inputField">
                  <input
                    type="text"
                    name="email"
                    placeholder="e-Mail ID"
                    required=""
                  />
                  <button type="submit" class="subscribeBtn">
                    Subscribe
                  </button>
                </div>
              </form></li>
          </ul>
        </div>
        <div class="container">
          


        <div class="row">

          <div class="col-lg-4">
            <div class="footerBox footer1">

              <div class="footerTitle">
                <img src={logoImg} className='img-fluid' />
              </div>
              <div class="footerBody">
                <ul>
                  <li className="about">
                    A nonprofit organization with a National mission to support Trade skills industry and all stakeholders.

                  </li>
                  <li>

                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="footerBox footer1">
              <div class="footerTitle">
                <h4>Services</h4>
              </div>
              <div class="footerBody">
                <ul>
                  <li>
                    <a href="#">Community</a>
                  </li>
                  <li>
                    <a href="#">Trade Programs</a>
                  </li>
                  <li>
                    <a href="#"> Trade Jobs</a>
                  </li>

                  <li>
                    <a href="#"> News & Articles
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="footerBox footer1">
              <div class="footerTitle">
                <h4>Popular Links</h4>
              </div>
              <div class="footerBody">
                <ul>
                  <li>
                    <a href="">Press & Media</a>
                  </li>
                  <li>
                    <a href=""> Online Store</a>
                  </li>

                  <li>
                    <a href="">About</a>
                  </li>
                  <li>
                    <a href="">FAQ’s</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="footerBox footer1">
              <div class="footerTitle1">
                <h4>Contact Us</h4>
              </div>
              <div class="footerBody">
                <div class="followUs11">
                  <ul class="solialLink">
                    <li>
                      <a href="" class="socialLinkItem">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="" class="socialLinkItem">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="" class="socialLinkItem">
                        <i class="fa fa-youtube-play"></i>
                      </a>
                    </li>
                    <li>
                      <a href="" class="socialLinkItem">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="" class="socialLinkItem">
                        <i class="fa fa-envelope"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <br />
                <p><strong>Get in Touch</strong><br />
                1901 West Girard Ave Philadelphia, PA 19130</p>
                <p>215-381-9403 <a href="mailto:info@ptt.edu">info@ptt.edu</a></p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="subscirpSection">

              <div class="termsLink">
                <ul class="tandcLink">
                  <li>
                    <a href="" class=""></a>
                  </li>
                  <li>
                    <a href="" class=""></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer >
      <div class="footerBottom">
        <div class="container">
          <div class="row">
          <div class="col-lg-6">
              <div class="copyright text-left">
                <a href="#" className='color-primary'>Privacy Policy </a> |
                <a href="#" className='color-primary'>Terms of Use </a>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="copyright text-right">
                <p>©2023 Work Ready Education, All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

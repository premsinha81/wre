export default function Footer() {
  return (
    <>
      <footer class="footerSection">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="footerBox footer1">
                <div class="footerTitle">
                  <h3>WRE </h3>
                </div>
                <div class="footerBody">
                  <ul>
                    <li className="about">
                      PTTI was founded on this exact philosophy 10 years ago.
                      PTTI was formed by a Drexel University graduate who
                      believes in our youth to receive a technology-driven
                      education so that they can secure...
                    </li>
                    <li>
                      <div class="followUs1">
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
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="footerBox footer1">
                <div class="footerTitle">
                  <h3>Popular Links</h3>
                </div>
                <div class="footerBody">
                  <ul>
                    <li>
                      <a href="">About WRE</a>
                    </li>
                    <li>
                      <a href=""> Contributors &amp; Experts</a>
                    </li>

                    <li>
                      <a href="">FAQ's</a>
                    </li>
                    <li>
                      <a href="">Pricing</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="footerBox footer1">
                <div class="footerTitle">
                  <h3>Services</h3>
                </div>
                <div class="footerBody">
                  <ul>
                  <li>
                      <a href="#">Community</a>
                    </li>
                    <li>
                      <a href="#">Career</a>
                    </li>
                    <li>
                      <a href="#"> Jobs</a>
                    </li>
                    
                    <li>
                      <a href="#"> Newsroom</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
           

            <div class="col-lg-2">
              <div class="footerBox footer1">
                <div class="footerTitle1">
                  <h3>Contact Us</h3>
                </div>
                <div class="footerBody">
                  <ul>
                    <li>
                      <a href="" class="socialLinkItem1">
                        <i class="fa fa-phone"></i>{" "}
                        <span> +91-89898988988</span>
                      </a>
                    </li>
                    <br></br>
                    <li>
                      <a href="" class="socialLinkItem1">
                        <i class="fa fa-envelope"> </i>
                        <span> wre@gmail.com </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="subscirpSection">
                <h1 class="subscribeTitle">Newsletter Subscription Form</h1>
                <form action="" class="subscribeForm">
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
                </form>
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
                <div class="termsLink">
                  <ul class="tandcLink">
                    <li>
                      <a href="" class="">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="" class="">
                        Terms of use
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div class="footerBottom">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="copyright">
                <p>© 2022 WRE. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

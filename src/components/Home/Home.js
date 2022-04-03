import React from "react";
import "./Home.css";
import "./Home_mediaquery.css";

const Home = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var progressbar = document.querySelectorAll(".progress_bar");
    var time = 1500;

    progressbar.forEach(function (i) {
      let label = i.children[0];
      let line = i.children[1];
      let count = 0;
      let dataCount = label.getAttribute("data-count");
      let lineCount = line.children[0];

      let runTime = time / dataCount;

      let animationLineCount = setInterval(function () {
        if (count < dataCount) {
          count++;
          label.innerHTML = count + "%";
          lineCount.style.width = count + "%";
        }
      }, runTime);
    });
  });

  return (
    <div>
      <section className="home">
        <div className="container-fluid background_img">
          <div className="container-fluid banner-section">
            <div className="banner_box">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h1>COMPLETE BPO SOLUTION</h1>
                  <p>
                    We provide complete BPO and ITES support. We Help our
                    Clients achieve measurable results with the help of our
                    highly skilled and dedicated work force.
                  </p>
                  <button className="btn btn-contact-home">Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*About cubix*/}

      <section className="aboutbpo_section">
        <div className="container">
          <div className="row flex-column-reverse flex-xl-row flex-lg-row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 for-mobile">
              <div>
                <img
                  className="home_abt_img"
                  src={process.env.PUBLIC_URL + "/images/second-img.jpg"}
                  alt="about_img"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-auto right-section">
              <div className="heading">
                <h2 className="abt_heading">About Cubix Solution</h2>
              </div>
              <div>
                <p className="abt_para">
                  U.S Solution BPO LLP incorporated with MCA on 1 st January
                  2018. U.S SOLUTION BPO LLP is listed in the class of LLP
                  company.
                </p>
                <p className="abt_para">
                  The company has 2 directors/key management personal Umaiz
                  Ansari and Shamoon Momin.
                </p>
                <p className="abt_para">
                  We Help our Clients achieve measurable results with the help
                  of our highly skilled and dedicated work force. We have the
                  best people onboard who are equipped with next-generation
                  technology in order to consistently deliver superior results
                  and strive to earn 100% customer satisfaction.
                </p>

                <button className="btn btn-more_abt_us">More about us</button>
              </div>

              <div className="target_counts d-flex flex-row justify-content-between justify-content-md-around">
                <div className="d-flex flex-column flex-xl-row flex-lg-row flex-md-row w-xl-50 w-lg-50 w-md-50 align-items-center">
                  <img
                    src={process.env.PUBLIC_URL + "/icons/checklist.png"}
                    alt="icons"
                    className="target_icons"
                  />
                  <div className="d-flex flex-column pl-2 align-items-left">
                    <span className="count_numbers text-center">5,000 +</span>
                    <p className="count_text text-center mb-0">
                      Work Completed
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-column flex-xl-row flex-lg-row flex-md-row w-xl-50 w-lg-50 w-md-50 align-items-center">
                  <img
                    src={process.env.PUBLIC_URL + "/icons/expert.png"}
                    alt="icons"
                    className="target_icons"
                  />
                  <div className="d-flex flex-column pl-2 align-items-left">
                    <span className="count_numbers text-center">500 +</span>
                    <p className="count_text text-center mb-0">
                      Work Completed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* why us */}

      <section className="why_section">
        <div className="container-fluid details px-0">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-column left-side-why">
              <h2 className="why_heading pb-3">Why Cubix Solution BPO?</h2>
              <h5 className="why_sub-heading">About us</h5>
              <p className="why_para">
                U.S Solution BPO is a premier business services company that is
                focused on building innovative solutions that create value for
                businesses and consumers. Our solutions are built around
                opportunities, innovation and Client satisfaction
              </p>

              <div className="row progress-section">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="d-flex flex-column">
                    <p className="title-text">Professional Works</p>
                    <div className="progress_bar">
                      <div
                        className="label d-flex flex-row justify-content-between"
                        data-count="83"></div>
                      <div className="line">
                        <span></span>
                      </div>
                    </div>
                    <p className="title-text">Professional Experts</p>
                    <div className="progress_bar">
                      <div
                        className="label d-flex flex-row justify-content-between"
                        data-count="80"></div>
                      <div className="line">
                        <span></span>
                      </div>
                    </div>
                    <p className="title-text">Professional Value</p>
                    <div className="progress_bar">
                      <div
                        className="label d-flex flex-row justify-content-between"
                        data-count="79"></div>
                      <div className="line">
                        <span></span>
                      </div>
                    </div>
                    <p className="title-text">Professional Communication</p>
                    <div className="progress_bar">
                      <div
                        className="label d-flex flex-row justify-content-between"
                        data-count="85"></div>
                      <div className="line">
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mobile-display-img">
              <div className="progress-bg-img"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Sevices*/}

      <section className="services_section">
        <div className="container">
          <div className="row">
            <div className="col-12 pl-0 text-center">
              <h2 className="services_heading mb-0">Our Services</h2>
            </div>

            <div className="col-xl-12 col-lg-12 col-md-12 col-12 d-flex flex-column">
              <h5 className="sub-heading">What We Do</h5>
              <p className="sub_text">
                U.S Solution believes reaching out to customers and encouraging
                product and services will results in significant reduction in
                customer attrition.
              </p>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="profile-card-2">
                <img
                  src={process.env.PUBLIC_URL + "/images/services-22.png"}
                  className="img img-responsive w-100"
                  alt="img2"
                />
                <div className="profile-name">Healthcare Solution</div>
                <button className="btn btn_read_more">Read more</button>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="profile-card-2">
                <img
                  src={process.env.PUBLIC_URL + "/images/services-23.png"}
                  className="img img-responsive w-100"
                  alt="img2"
                />
                <div className="profile-name">
                  Technology For Advanced Solutions
                </div>
                <button className="btn btn_read_more">Read more</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* client review */}

      <section>
        <div className="container-fluid testimonials-clean">
          <div class="container">
            <div class="intro">
              <h2 class="text-center">Client Satisfaction</h2>
              <p class="text-center">Positive feedback</p>
            </div>
            <div class="row people">
              <div class="col-md-6 col-lg-4 item">
                <div class="box">
                  <p class="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                    finibus est.
                  </p>
                </div>
                <div class="author">
                  <img
                    class="rounded-circle"
                    src="https://i.imgur.com/nUNhspp.jpg"
                  />
                  <h5 class="name">Ben Johnson</h5>
                  <p class="title">CEO of Company Inc.</p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 item">
                <div class="box">
                  <p class="description">
                    Praesent aliquam in tellus eu gravida. Aliquam varius
                    finibus est, et interdum justo suscipit id.
                  </p>
                </div>
                <div class="author">
                  <img
                    class="rounded-circle"
                    src="https://i.imgur.com/o5uMfKo.jpg"
                  />
                  <h5 class="name">Carl Kent</h5>
                  <p class="title">Founder of Style Co.</p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 item">
                <div class="box">
                  <p class="description">
                    Aliquam varius finibus est, et interdum justo suscipit.
                    Vulputate quis leo in, vehicula rhoncus lacus. Praesent
                    aliquam in tellus eu.
                  </p>
                </div>
                <div class="author">
                  <img
                    class="rounded-circle"
                    src="https://i.imgur.com/At1IG6H.png"
                  />
                  <h5 class="name">Emily Clark</h5>
                  <p class="title">Owner of Creative Ltd.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* artical */}
      <section className="artical">
        <div className="container-fluid artical_bg">
          <div className="elementor-background-overlay"></div>
          <div className="container artical_for_contact">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex flex-column">
                <h2>Contact Us Now!</h2>
                <p>Get Start a New Service with U.S Solution</p>
                <div className="align-self-end">
                  <button className="btn btn-contact-no">Contact us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* our team */}
      <section className="team_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <h2 className="team_heading">Our Team</h2>
              <p className="team_para">
                Our management team consists of experienced professionals from
                leading companies and deep domain expertise in information
                technology and business process outsourcing space. We have data
                center grade communication systems for voice and data from
                multiple service providers, power back up systems include in
                house diesel generator and UPS systems. We follow comprehensive
                information security and data back-up processes and systems.
                Guiding U.S Solution growth is a highly experienced team. The
                philosophy in business is that employees must focus on making
                each and every customer relationship a success. This team
                adheres to this philosophy day-in and day-out and sets the
                standard for the rest of the company.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
              <div className="team text-center rounded p-3 py-4">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  className="img-fluid avatar avatar-medium shadow rounded-pill"
                  alt=""
                />
                <div className="content mt-3">
                  <h4 className="title mb-0">Lisa Martin</h4>
                  <small className="text-muted">Founder</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
              <div className="team text-center rounded p-3 py-4">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar8.png"
                  class="img-fluid avatar avatar-medium shadow rounded-pill"
                  alt=""
                />
                <div className="content mt-3">
                  <h4 className="title mb-0">Lisa Martin</h4>
                  <small className="text-muted">Founder</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
              <div className="team text-center rounded p-3 py-4">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar2.png"
                  class="img-fluid avatar avatar-medium shadow rounded-pill"
                  alt=""
                />
                <div className="content mt-3">
                  <h4 className="title mb-0">Lisa Martin</h4>
                  <small className="text-muted">Founder</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
              <div className="team text-center rounded p-3 py-4">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar6.png"
                  class="img-fluid avatar avatar-medium shadow rounded-pill"
                  alt=""
                />
                <div className="content mt-3">
                  <h4 className="title mb-0">Lisa Martin</h4>
                  <small className="text-muted">Founder</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
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
                  <h1>
                    We Provide All Aspects Of Dental and Medical Insurance
                    Verification and Billing Services for Doctors and HealthCare
                    Providers.
                  </h1>
                  <p>
                    Offering innovative solutions, specializing in Dental and
                    Medical services for treatement of healthcare infrastucture.
                  </p>
                  <Link to="/contactus">
                    <button className="btn btn-contact-home">Contact Us</button>
                  </Link>
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
                  src={
                    process.env.PUBLIC_URL +
                    "/images/medical-banner-with-doctor-holding-stethoscope.jpg"
                  }
                  alt="about_img"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-auto right-section">
              <div className="heading">
                <h2 className="abt_heading">HealthCare Solution</h2>
              </div>
              <div>
                <p className="abt_para">
                  DocRCM experts offers Medical Billing Services, focusing on
                  every aspect of the Medical Billing/RCM cycle.
                </p>
                <p className="abt_para">
                  We strive to achieve the best possible timely reimbursement
                  for our clients by making the RCM cycle smooth and easy which
                  will help our clients to focus more on patient care.
                </p>
                <p className="abt_para">
                  Whether choosing an end-to-end engagement or a targeted
                  solution for the front, middle or back, We help to reduce
                  total cost to collect, improve net patient revenue and enhance
                  patient experience.
                </p>
                <p className="abt_para">
                  Our RCM services covers the below essential responsibilities
                  of our consulting team :
                </p>
                <ul className="">
                  <li className="abt_para">
                    Perform analytics and evaluate revenue cycle processes and
                    procedures.
                  </li>
                  <li className="abt_para">
                    Assessing and optimizing revenue cycle workflows.
                  </li>
                  <li className="abt_para">
                    Prepare recommendations for revenue cycle improvement.
                  </li>
                  <li className="abt_para">
                    Assess the entire revenue cycle systems and IT
                    interoperability
                  </li>
                </ul>
                <Link to="/aboutus">
                  <button className="btn btn-more_abt_us">More about us</button>
                </Link>
              </div>

              <div className="target_counts d-flex flex-row justify-content-between justify-content-md-around">
                <div className="d-flex flex-column flex-xl-row flex-lg-row flex-md-row w-xl-50 w-lg-50 w-md-50 align-items-center px-2">
                  <img
                    src={process.env.PUBLIC_URL + "/icons/checklist.png"}
                    alt="icons"
                    className="target_icons mr-1"
                  />
                  <div className="d-flex flex-column pl-2 align-items-left">
                    <span className="count_numbers text-center">10K +</span>
                    <p className="count_text text-center mb-0">
                      Happy Customers
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-column flex-xl-row flex-lg-row flex-md-row w-xl-50 w-lg-50 w-md-50 align-items-center px-2">
                  <img
                    src={process.env.PUBLIC_URL + "/icons/expert.png"}
                    alt="icons"
                    className="target_icons mr-1"
                  />
                  <div className="d-flex flex-column pl-2 align-items-left">
                    <span className="count_numbers text-center">100 +</span>
                    <p className="count_text text-center mb-0">
                      Professional Advisors
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
              <h2 className="why_heading pb-3">Why Doc RCM Experts ?</h2>
              {/* <h5 className="why_sub-heading">About us</h5> */}
              <p className="why_para">
                We provide the solutions to grow your business You are always
                intended towards the best solution, when it comes to Healthcare.
                At Amromed , we serve innovative healthcare solution to the
                physicians pertaining to ABA therapy billing and Medical Billing
                Services. Experts in the said fields, have found our billing
                solution ideal covering all the prospects required by the ABA
                therapists across the country. Our growth has grown over the
                time, because of the investment in the relationship as our team
                has always focused on Quality solution to our clients.
              </p>

              <div className="row progress-section">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="d-flex flex-column">
                    <p className="title-text">AR</p>
                    <div className="progress_bar">
                      <div
                        className="label d-flex flex-row justify-content-between"
                        data-count="83"></div>
                      <div className="line">
                        <span></span>
                      </div>
                    </div>
                    <p className="title-text">Coding</p>
                    <div className="progress_bar">
                      <div
                        className="label d-flex flex-row justify-content-between"
                        data-count="80"></div>
                      <div className="line">
                        <span></span>
                      </div>
                    </div>
                    <p className="title-text">First Pass</p>
                    <div className="progress_bar">
                      <div
                        className="label d-flex flex-row justify-content-between"
                        data-count="79"></div>
                      <div className="line">
                        <span></span>
                      </div>
                    </div>
                    <p className="title-text">Old AR</p>
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
          <div className="row d-flex justify-content-center">
            <div className="col-12 pl-0 text-center">
              <h2 className="services_heading mb-0">Our Services</h2>
            </div>

            <div className="col-xl-12 col-lg-12 col-md-12 col-12 d-flex flex-column">
              <h5 className="sub-heading">What We Do</h5>
              <p className="sub_text">
                The service we offer is specifically designed to meet your
                needs.
              </p>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="profile-card-2">
                <img
                  src={process.env.PUBLIC_URL + "/images/services-22.png"}
                  className="img img-responsive w-100"
                  alt="img2"
                />
                <div className="profile-name">Eligibility & Benefits</div>
                <button className="btn btn_read_more">Read more</button>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="profile-card-2">
                <img
                  src={process.env.PUBLIC_URL + "/images/services-24.png"}
                  className="img img-responsive w-100"
                  alt="img2"
                />
                <div className="profile-name">Charge Posting</div>
                <button className="btn btn_read_more">Read more</button>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="profile-card-2">
                <img
                  src={process.env.PUBLIC_URL + "/images/dollers.jpg"}
                  className="img img-responsive w-100"
                  alt="img2"
                />
                <div className="profile-name">Payment Posting</div>
                <button className="btn btn_read_more">Read more</button>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="profile-card-2">
                <img
                  src={process.env.PUBLIC_URL + "/images/services-25.png"}
                  className="img img-responsive w-100"
                  alt="img2"
                />
                <div className="profile-name">
                  Open Credit / Patient Statements
                </div>
                <button className="btn btn_read_more">Read more</button>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="profile-card-2">
                <img
                  src={process.env.PUBLIC_URL + "/images/services-27.png"}
                  className="img img-responsive w-100"
                  alt="img2"
                />
                <div className="profile-name">
                  Rejections from the clearing house
                </div>
                <button className="btn btn_read_more">Read more</button>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="profile-card-2">
                <img
                  src={process.env.PUBLIC_URL + "/images/services-28.png"}
                  className="img img-responsive w-100"
                  alt="img2"
                />
                <div className="profile-name">
                  Account Receivable / Denial Management
                </div>
                <button className="btn btn_read_more">Read more</button>
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
                <p>Get Start a New Service with Doc RCM Experts</p>
                <div className="align-self-end">
                  <Link to="/contactus">
                    <button className="btn btn-contact-no">Contact us</button>
                  </Link>
                </div>
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
                    I believe that by partnering with DocRCM experts to manage
                    key business components of my practice, I have gained
                    invaluable in-house expertise in both accounts receivable
                    and general business management. It just did not make good
                    sense to me to reinvent the wheel, especially when I wanted
                    to concentrate on doing what I knew and loved best -
                    delivering quality patient care.
                  </p>
                </div>
                <div class="author">
                  <img
                    class="rounded-circle"
                    src="https://i.imgur.com/nUNhspp.jpg"
                  />
                  <h5 class="name">Ben Johnson</h5>
                  {/* <p class="title">CEO of Company Inc.</p> */}
                </div>
              </div>
              <div class="col-md-6 col-lg-4 item">
                <div class="box">
                  <p class="description">
                    DocRCM experts is timely and on top of things…very
                    aggressive, a well oiled machine. They are professional,
                    service oriented, accommodating and easy to work with. The
                    group is willing to travel anytime for face-to-face meetings
                    and is in communication by phone or email daily. A burden
                    has been lifted off my shoulders.
                  </p>
                </div>
                <div class="author">
                  <img
                    class="rounded-circle"
                    src="https://i.imgur.com/o5uMfKo.jpg"
                  />
                  <h5 class="name">Carl Kent</h5>
                  {/* <p class="title">Founder of Style Co.</p> */}
                </div>
              </div>
              <div class="col-md-6 col-lg-4 item">
                <div class="box">
                  <p class="description">
                    In just the first six months since DocRCM experts took over
                    our billing from another billing company, we've seen our
                    revenue grow 12.4 percent with no change in patient volume.
                    I would highly recommend DocRCM experts team to other
                    physicians.
                  </p>
                </div>
                <div class="author">
                  <img
                    class="rounded-circle"
                    src="https://i.imgur.com/At1IG6H.png"
                  />
                  <h5 class="name">Emily Clark</h5>
                  {/* <p class="title">Owner of Creative Ltd.</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* our team */}
      {/* <section className="team_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <h2 className="team_heading">Our Team</h2>
              <p className="team_para">
                Our management team consists of experienced professionals from
                leading companies and deep domain expertise in medical billing
                and information technology. We follow comprehensive information
                security and data back-up processes and systems. Guiding Doc RCM
                Experts growth is a highly experienced team. The philosophy in
                business is that employees must focus on making each and every
                provider relationship a success. This team adheres to this
                philosophy day-in and day-out and sets the standard for the rest
                of the company.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
              <div className="team text-center rounded p-3 py-4">
                <img
                  src={process.env.PUBLIC_URL + "/images/team/mehboob.png"}
                  class="img-fluid avatar avatar-medium shadow rounded-pill"
                  alt="Mehboob Ali Shaikh"
                />
                <div className="content mt-3">
                  <h4 className="title mb-0">Mehboob Ali Shaikh (BRIAN) </h4>
                  <small className="text-muted">Founder</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
              <div className="team text-center rounded p-3 py-4">
                <img
                  src={process.env.PUBLIC_URL + "/images/team/gulam.png"}
                  class="img-fluid avatar avatar-medium shadow rounded-pill"
                  alt="Gulam Sarvar Ajmeri"
                />
                <div className="content mt-3">
                  <h4 className="title mb-0">
                    Gulam Sarvar Ajmeri <br />
                  </h4>
                  <small className="text-muted">Founder</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
              <div className="team text-center rounded p-3 py-4">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  className="img-fluid avatar avatar-medium shadow rounded-pill"
                  alt="Labib Hayat"
                />
                <div className="content mt-3">
                  <h4 className="title mb-0">Labib Hayat </h4>
                  <small className="text-muted">Manager</small>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
              <div className="team text-center rounded p-3 py-4">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar6.png"
                  class="img-fluid avatar avatar-medium shadow rounded-pill"
                  alt="Marzanul Haque"
                />
                <div className="content mt-3">
                  <h4 className="title mb-0">Marzanul Haque</h4>
                  <small className="text-muted">Manager</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;

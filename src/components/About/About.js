import React from "react";
import "./About.css";
import "./About_mediaquery.css";
import { IoIosPeople } from "react-icons/io";
import $ from "jquery";

const About = () => {
  $(document).ready(function () {
    $(".counter").each(function () {
      $(this)
        .prop("Counter", 6000)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 4000,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
  });

  return (
    <div>
      <section className="about_header">
        <div className="container-fluid bg-heading-imag main-about">
          <div className="elementor-background-overlay"></div>
          <div className="d-flex flex-column header-content">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
      </section>

      <section className="diff-solution">
        <div className="container">
          <div className="row flex-xl-row flex-lg-row flex-column">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="left_sec">
                <div className="d-flex flex-row pb-4">
                  <IoIosPeople className="page_icons" />
                  <h6 className="page_subheading">About us</h6>
                </div>

                <h2>What makes Cubix solution different?</h2>
                <p>
                  We Help our Clients achieve measurable results with the help
                  of our highly skilled and dedicated work force. We have the
                  best people onboard who are equipped with next-generation
                  technology in order to consistently deliver superior results
                  and strive to earn 100% customer satisfaction.
                </p>
                <p>
                  We operate across all time zones and work in close association
                  with our clients to deliver industry-leading. Our potential,
                  proven methodologies and experience allow us to give that
                  much-needed competitive edge to our clients, eventually
                  enabling them to make their businesses more apprehensible,
                  efficient & profitable.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div>
                <img
                  className="home_abt_img"
                  src={process.env.PUBLIC_URL + "/images/aboutus_page.jpg"}
                  alt="about_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="abt-cubix">
        <div className="container-fluid performance">
          <div className="container perf-cubx">
            <div className="row vision-mission">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 px-3 pb-3">
                <div className="d-flex flex-column flex-xl-row flex-lg-row flex-md-row vision_section">
                  <img
                    className="vision_img"
                    src={process.env.PUBLIC_URL + "/icons/vision.png"}
                    alt="about_img"
                  />
                  <div className="d-flex flex-column">
                    <h3>Our Vision</h3>
                    <p className="mb-0">
                      Our vision is to achieve great heights and recognition in
                      the domain of ITES/ Business Process Outsourcing and
                      captivating our client's desire to augment their Business
                      to greatness.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 px-3">
                <div className="d-flex flex-column flex-xl-row flex-lg-row flex-md-row mission_section">
                  <img
                    className="mission_img"
                    src={process.env.PUBLIC_URL + "/icons/mission.png"}
                    alt="about_img"
                  />
                  <div className="d-flex flex-column">
                    <h3>Our Mission</h3>
                    <p className="mb-0">
                      Our Mission is achieving excellence in the domain of ITES/
                      Business Process Outsourcing and through our Skilled
                      services and Positive results help our client draw
                      measurable results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="per-counter">
            <div className="row">
              <div className="four col-md-3">
                <div className="counter-box colored">
                  <h4>Numbers Speak For Themselves!</h4>
                </div>
              </div>
              <div className="four col-md-3">
                <div className="counter-box">
                  <div className="d-flex flex-row justify-content-center">
                    <span className="counter">6000</span>
                    <span>+</span>
                  </div>
                  <p>Work Completed</p>
                </div>
              </div>
              <div className="four col-md-3">
                <div className="counter-box">
                  <div className="d-flex flex-row justify-content-center">
                    <span className="counter">550</span>
                    <span>+</span>
                  </div>
                  <p>Expert Workers</p>
                </div>
              </div>
              <div className="four col-md-3">
                <div className="counter-box">
                  <div className="d-flex flex-row justify-content-center">
                    <span className="counter">21000</span>
                    <span>+</span>
                  </div>
                  <p>Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cubix-solution">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <img
                className="cubix-solution_img"
                src={process.env.PUBLIC_URL + "/images/why-c.jpg"}
                alt="about_img"
              />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-auto">
              <div className="cubix-sol-detail">
                <h2 className="abt_heading">Why Cubix Solution?</h2>
                <p className="abt_para">
                  Cubix Solution BPO is a premier business services company that
                  is focused on building innovative solutions that create value
                  for businesses and consumers. Our solutions are built around
                  opportunities, innovation and Client satisfaction. Through our
                  solutions we ensure that we are able to provide unmatched,
                  superior resolution to specific customer problems and help our
                  clients exceed their customers’ expectations within a highly
                  collaborative, secure and compliant environment. We have a
                  team of experienced professionals and a skilled workforce that
                  helps companies operate efficiently, achieve their business
                  goals, and increase profitability.
                </p>
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

export default About;

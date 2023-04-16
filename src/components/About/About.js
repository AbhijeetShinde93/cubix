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
              Our seamless virtual process reduces no-shows, increases
              collections, optimizes clinical workflows, and allows you to focus
              back on patient care.
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

                <h2>What makes Doc RCM Experts different?</h2>
                <p>
                  Assured 98% first pass claim acceptance rate and 97% medical
                  coding accuracy.
                </p>
                <p>
                  Consistent workflow to reduce AR backlogs and accelerate your
                  revenue cycle.
                </p>
                <p>
                  We equip you to scale up and streamline operations to handle
                  value based reimbursement models.
                </p>
                <p>
                  Technical and professional capabilities that minimize
                  downtimes, delays and loss of productivity.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div>
                <img
                  className="home_abt_img"
                  src={
                    process.env.PUBLIC_URL +
                    "/images/doctor-nurse-discussing-digital-tablet.png"
                  }
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
                      To build our presence as a recognized billing service that
                      is superior in delivering a comprehensive end to end
                      business process solution that specializes exclusively in
                      the healthcare industry through the utilization of proven,
                      advanced technologies with an organization which advocates
                      teamwork and is unhindered by bureaucracy.
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
                      To provide superior quality healthcare services that
                      PHYSICIANS AND THERAPIST recommends to family and friends,
                      EMPLOYEES are proud of, and INVESTORS seek for long-term
                      returns.
                      <br />
                      Integrity, Accountability, Commitment, Quality, Teamwork
                      and Simplicity.
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
                  <p>Complete task per day</p>
                  <br />
                </div>
              </div>
              <div className="four col-md-3">
                <div className="counter-box">
                  <div className="d-flex flex-row justify-content-center">
                    <span className="counter">550</span>
                    <span>+</span>
                  </div>
                  <p>Providers helped in over many specialties</p>
                </div>
              </div>
              <div className="four col-md-3">
                <div className="counter-box">
                  <div className="d-flex flex-row justify-content-center">
                    <span className="counter">700</span>
                    <span>+</span>
                  </div>
                  <p>Remote Nurses & Billers Available</p>
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
                src={process.env.PUBLIC_URL + "/images/three.jpg"}
                alt="about_img"
              />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-auto">
              <div className="cubix-sol-detail">
                <h2 className="abt_heading">Why Doc RCM Experts?</h2>
                <p className="abt_para">
                  DocRCM experts is a pioneer in providing leading and
                  innovative healthcare solutions to physicians across the
                  country. Started in 2012 for physicians serving the billing
                  needs AR follow-up / Verification of Benefits / Credentialing
                  / Payment posting/coding / Charge entry. The key to our growth
                  has always been the fact that we are a relationship-focused
                  company that strongly believes that “We get paid more only
                  when you do” With 14 years of experience and a team of
                  exceptional and highly trained employees, we provide
                  professional billing services to all types of Specialty and
                  are equipped with everything you need to build a successful
                  practice and maximize your revenue. Our specially trained team
                  in all verticals of billing, Certified Billers and Coders is
                  outfitted to handle all aspects of the medical billing process
                  from start to payment! Our office concentrates on a wide range
                  of physician specialties including dental, plastic surgery,
                  anesthesiology, emergency medicine, Ob/Gyn, Orthopedics, and
                  Urology amongst many others. Our doctors save an average of
                  $25,000/year per doctor in billing overhead with the added
                  benefit of increasing their cash flow. Since every practice is
                  unique, we customize our services to meet your individual
                  practice needs and requirements.
                </p>
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

export default About;

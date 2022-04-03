import React from "react";
import "./Career.css";
import "./Career_mediaquery.css";
import { IoIosPeople } from "react-icons/io";

const Career = () => {
  return (
    <div>
      <section className="carrer_header">
        <div className="container-fluid bg-heading-imag main-carrer">
          <div className="elementor-background-overlay"></div>
          <div className="d-flex flex-column carrer_header-content">
            <h1>Career</h1>
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
              <div>
                <img
                  className="home_abt_img"
                  src={process.env.PUBLIC_URL + "/images/why-c.jpg"}
                  alt="about_img"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="left_sec">
                <div className="d-flex flex-row pb-4">
                  <IoIosPeople className="page_icons" />
                  <h6 className="page_subheading">Career</h6>
                </div>

                <h2>We're Building For You</h2>
                <p>
                  We operate in a very professional environment that nurtures
                  you and provides wide scope of growth. We extend exciting and
                  inclusive work environment that values the diversity of people
                  and recognizes individual contributions.
                </p>
                <p>
                  Learning & Development- We strongly focus on the long-term
                  professional growth of our employees through different
                  development and learning initiatives
                </p>
                <p>
                  We provide our employees a compensation that is at par with
                  industry standards. It also provides you with opportunities to
                  earn incentive. This ensures that your career is a satisfying
                  and rewarding journey.
                </p>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-12 text-center">
              <p>
                We actively organize indoor as well as outdoor activities for
                our employees such as, Fun-Friday games and events and sports
                tournament. We also have offsite meetings conducted regularly
                which gives employees an opportunity for creative
                self-expression besides constructing better professional
                rapport.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="carrer-comm">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="text-center box-con">
                <img
                  src={process.env.PUBLIC_URL + "/icons/assitance.png"}
                  alt="icons"
                  className="career_icons"
                />
                <h5 className="mt-2">Call center</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="text-center box-con">
                <img
                  src={process.env.PUBLIC_URL + "/icons/callcenter.png"}
                  alt="icons"
                  className="career_icons"
                />
                <h5 className="mt-2">Virtual Assistance</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="text-center box-con">
                <img
                  src={process.env.PUBLIC_URL + "/icons/Customer Support.png"}
                  alt="icons"
                  className="career_icons"
                />
                <h5 className="mt-2">Customer Support</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;

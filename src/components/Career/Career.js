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
              Our Success stories are enough to interpret the place we have
              created over the years with our clients. To put the same in words,
              we ensure to overcome the business hassles and grow the
              profitability of the business.
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
                  src={process.env.PUBLIC_URL + "/images/medic.jpg"}
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

                <h2>We're Building For You Because You Matter</h2>
                <p>
                  We believe our employees thrive in an environment that is open
                  and safe and that is the motto we work by. We have an open
                  door policy and numerous opportunities for the employees to
                  grow and prosper.
                </p>
                <p>
                  There is no gap between the workers and the higher-ups. We do
                  not have any hierarchy and we treat everyone with utmost
                  respect and consideration.
                </p>
                <p>
                  We hire dedicated, efficient, and qualified members to provide
                  innovative services to the healthcare sector. We leave no
                  stones unturned when it comes to making life easier for our
                  clients.
                </p>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-12 text-center">
              <p>
                We help you collect more. We solve your Account Receivables
                problems.
                <br />
                We Provide All Aspects Of Medical Billing Services for Doctors
                and HealthCare Providers.
                <br /> DocRCM experts has a technology as well as resource to
                support businesses at very affordable cost
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
                <h5 className="mt-2">
                  You get to be part of an amazing company
                </h5>
                <p>
                  DocRCM experts is a leading company. It is an up-and-coming
                  company. We encourage our employees to always strive for the
                  best and provide numerous opportunities to increase and
                  improve their skill set.
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
                <h5 className="mt-2">You get to make an impact</h5>
                <p>
                  DocRCM experts is involved in the healthcare industry. We are
                  working to make an impact and better the lives of
                  practitioners. Wroking with us is a great way to contribute to
                  the healthcare industry.
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
                <h5 className="mt-2">You will always find a place with us</h5>
                <p>
                  DocRCM experts provides job opportunities that are best suited
                  for personnel. We offer job based on your qualifications,
                  passion, needs and requiements.
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

import React from "react";
import "./OurServices.css";
import "./OurService_mediaquery.css";

const OurService = () => {
  return (
    <div>
      <section className="ourservices_header">
        <div className="container-fluid bg-heading-imag main-ourservices">
          <div className="elementor-background-overlay"></div>
          <div className="d-flex flex-column header-content">
            <h1>Our Services</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
      </section>

      <section className="service_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12 text-center service_heading">
              <img
                src={process.env.PUBLIC_URL + "/icons/our services.png"}
                alt="icons"
                className="services_icons"
              />
              <h2>What Service We Offer</h2>
            </div>
          </div>
          <div className="row two-section">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="card service-card">
                <img
                  className="card-img-top image_size"
                  src={
                    process.env.PUBLIC_URL + "/images/customer-service-2.jpg"
                  }
                  alt="about_img"
                />
                <div className="card-body">
                  <h4 className="card-title">Healthcare Solutions</h4>
                  <p className="card-text">
                    U.S SOLUTION works on competitive business environment
                    module, Our Healthcare Specialist and Executives engage
                    themselves with all potential customers through inbound and
                    outbound communication using multiple channels. Businesses
                    around the world rely on Innovative Technologies, we
                    specialize in all-encompassing sales and customer
                    acquisition process that strengthen customer relationships
                    and promote revenue generation. We support the entire
                    customer lifecycle, from lead generation to lead support,
                    through both voice and non-voice customer interactions.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="card service-card">
                <img
                  className="card-img-top image_size"
                  src={
                    process.env.PUBLIC_URL + "/images/customer-service-3.jpg"
                  }
                  alt="about_img"
                />
                <div className="card-body">
                  <h4 className="card-title">
                    Technology For Advanced Solutions
                  </h4>
                  <p className="card-text">
                    We empower our specialists with the latest technologies to
                    safely and securely manage your customer’s information. This
                    professional approach provides us with the best results in
                    the business, also help you achieve and maintain a
                    competitive advantage in your business. Through leveraging
                    the tools available, we can increase your company’s
                    productivity and have you enjoy higher operating capacity,
                    also deliver a superior customer satisfaction experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why_section">
        <div className="container-fluid details px-0">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-column left-side-why">
              <h2 className="why_heading pb-3">What do we do?</h2>
              <p className="why_para">
                Every Business come across various challenges, we provide
                customized solution to all you need. Right from Healthcare to
                Insurance and Promotion thus providing your Business a solution
                for the challenges and exceeding your business potential.
              </p>
              <p className="why_para">
                We can be an addition to your existing team to help you operate
                effectively and provide quality service to maintain the highest
                level of customer satisfaction.
              </p>
              <p className="why_para">
                We provide outsourcing solutions to a variety of businesses,
                such as,Customer Acquisition, Services, Engagement and
                Retention.
              </p>
              <p className="why_para">
                Our highly trained and experienced resources have the potential
                to communicate not only to convince the prospect costumer to
                enroll/ buy our servicesbut also to keep them engaged and
                interested in the services we have given them, resulting in the
                significant downward graph of Customer Attrition. Through our
                effective Customer Relation Management Tool,we manage to keep a
                track on the Sales, Customer Satisfaction and Retention targets
                along with ROI.
              </p>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mobile-display-img">
              <div className="service-bg-img"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-artical">
        <div className="container contact-artical-bg-img">
          <div className="elementor-background-overlay"></div>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <h2>Contact us now</h2>
              <div className="text-center">
                <button className="btn btn-contact-call">Contact now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurService;

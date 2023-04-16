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
              Our medical billing services are focused on your bottom line. We
              customize medical billing, medical coding and accounts receivables
              as per your needs so that you can focus on delivering excellent
              patient care.
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
                  <h4 className="card-title">
                    We bring solutions to make life easier for our customers
                  </h4>
                  <p className="card-text">
                    We offer a complete insurance verification and revenue cycle
                    management to meet the individualized needs of each
                    practice. DocRCM experts is pleased to deliver the highest
                    levels of quality, support, and follow-up; which translates
                    into quicker reimbursement. We firmly believe in a
                    ‘partnership approach’ with all our clients. Through our
                    global delivery network and comprehensive service offerings,
                    we deliver business value to our clients by combining
                    operational excellence with in-depth industry knowledge.
                    Nothing is more important to us than protecting the privacy
                    and security of the data our client entrusts to us. We are
                    vigilant in protecting them and maintaining a platform they
                    can trust.
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
                    We have the experience and expertise you need
                  </h4>
                  <p className="card-text">
                    We offer a complete revenue cycle management and a strong
                    back office fully equipped to meet the individualized needs
                    of each practice. Ukela is pleased to deliver the highest
                    levels of quality, support, and follow-up; which translates
                    into quicker reimbursement turnarounds. We will match or
                    beat our competitors while lowering costs and increasing
                    revenue. At DocRCM experts, we firmly believe in a
                    ‘partnership approach’ with all our clients. Through our
                    global delivery network and comprehensive service offerings,
                    we deliver business value to our clients by combining
                    operational excellence with in-depth industry knowledge.
                    Nothing is more important to us than protecting the privacy
                    and security of the data our client entrusts to us. We are
                    vigilant in protecting them and maintaining a platform they
                    can trust.
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
                A Spectrum of Excellence in Healthcare Revenue Cycle Management
              </p>
              <p className="why_para">
                DocRCM experts provides a full range of revenue cycle services
                including consulting, credentialing, medical coding, A/R and
                denials management, and extended business office services. Our
                nationwide clients include hospitals and clinics other
                healthcare providers and investors. What makes DocRCM experts a
                solid, reliable provider of RCM services is our exceptionally
                strong team of healthcare industry experts who have confronted
                virtually every RCM problem and devised innovative solutions to
                solve them. Our custom methodology is significantly more
                powerful than the regular one-size-fits-all arrangement. We have
                made answers for many associations, huge and little, each with
                their own specific intricacies. Trust Amromed to do the same for
                you.
              </p>
              <p className="why_para">
                DocRCM experts has different workplaces the nation over, and our
                global group empowers us to be exceptionally aggressive. Our
                organization claimed conveyance community in India, staffed by
                RCM specialists and gifted clinical charging veterans, permits
                us to minimize expenses and keep away from holes in help while
                scaling to address the issues of your developing business. Our
                various workplaces the country over empower us to apply
                specialists on location depending on the situation to address
                your RCM challenges.
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

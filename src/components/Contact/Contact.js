import React, { useState } from "react";
import "./Contact.css";
import "./Contact_mediaquery.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    const templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        "service_aqaq8v7",
        "template_2dkb9c5",
        templateParams,
        "user_fpdypaLFDnOqlu2XCG4AP"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    setMsg("Thankyou we will contact you shortly!");
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  return (
    <div>
      <section className="contactus_header">
        <div className="container-fluid bg-heading-imag main-contactus">
          <div className="elementor-background-overlay"></div>
          <div className="d-flex flex-column header-content">
            <h1>Contact Us</h1>
            <p>
              Have any questions? Reach out to us from our contact form and we
              will get back to you shortly.
            </p>
          </div>
        </div>
      </section>

      <section className="getintouch">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12 text-center get_heading">
              <img
                src={process.env.PUBLIC_URL + "/icons/getintouch.png"}
                alt="icons"
                className="head_icons"
              />
              <h2>Get In Touch</h2>
              <p className="text-center">
                Please feel welcome to contact our Team with any general or
                billing enquiry. Our Team will receive or return any urgent
                calls.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="text-center box-con">
                <img
                  src={process.env.PUBLIC_URL + "/icons/assitance.png"}
                  alt="icons"
                  className="touch_icons"
                />
                <h3 className="mt-2">Office Location</h3>
                <p>
                  19214 CANNON HILLS LN RICHMOND,
                  <br /> TX 77407 USA
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="text-center box-con">
                <img
                  src={process.env.PUBLIC_URL + "/icons/callcenter.png"}
                  alt="icons"
                  className="touch_icons"
                />
                <h3 className="mt-2">Give us a call</h3>
                <p>Call Us : (281)786-0408</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="text-center box-con">
                <img
                  src={process.env.PUBLIC_URL + "/icons/Customer Support.png"}
                  alt="icons"
                  className="touch_icons"
                />
                <h3 className="mt-2">Email Address</h3>
                <p>info@docrcmexperts.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container messg-box px-0">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <img
                className="contact_img"
                src={process.env.PUBLIC_URL + "/images/cubix-contact.jpg"}
                alt="contact_img"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-12 cubix-form">
              <form onSubmit={sendEmail} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Your name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Your subject"
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    type="text"
                    name="message"
                    rows="3"
                    placeholder="Your message"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    required></textarea>
                </div>
                <button type="submit" className="btn btn-sendmsg">
                  Send Message
                </button>

                {msg && <h5 className="thnkmsg">{msg}</h5>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

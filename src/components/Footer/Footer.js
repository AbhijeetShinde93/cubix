import React from "react";
import "./Footer.css";
import "./Footer_mediaquery.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="footer_about">
                <h3>About Us</h3>
                <p>
                  The leading independent provider of end-to-end revenue cycle
                  solutions. We are a leading provider of technology-driven
                  solutions that transform the patient experience and financial
                  performance of healthcare providers.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 col-12">
              <div className="footer_main">
                <h3 className="text-center">Contact</h3>
                <ul>
                  <li>
                    <MdLocationOn className="contacts_icons" />
                    <span>Richmond, TX 77407 USA</span>
                  </li>
                  {/* <li>
                    <BiPhoneCall className="contacts_icons" />
                    <span>987654123</span>
                  </li> */}
                  <li>
                    <BiPhoneCall className="contacts_icons" />
                    <span>(281)786-0408</span>
                  </li>
                  <li>
                    <BsFillEnvelopeFill className="contacts_icons" />
                    <span>info@docrcmexperts.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div class="footer_right">
                <h3 className="text-center">Social Links</h3>
                <div class="footer_links">
                  <a
                    href="https://instagram.com/doc_rcm_experts?igshid=MDM4ZDc5MmU"
                    className="socal_links"
                    target="_blank">
                    <AiFillInstagram />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100087288706133&mibextid=LQQJ4d"
                    className="socal_links"
                    target="_blank">
                    <AiFillFacebook />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mehboob-ali-shaikh-44b5b0134/"
                    className="socal_links"
                    target="_blank">
                    <AiFillLinkedin />
                  </a>
                  <a
                    href="https://twitter.com/DRcmexperts"
                    className="socal_links"
                    target="_blank">
                    <AiFillTwitterCircle />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright">
          Copyright © 2021 All Rights Reserved by Doc RCM experts A MED RELIANCE
          LLC COMPANY.
        </div>
      </footer>
    </div>
  );
};

export default Footer;

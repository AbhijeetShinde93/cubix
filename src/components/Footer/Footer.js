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
          <div className="footer_about">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              aliquid, inventore veritatis, a beatae asperiores eveniet ex
              repudiandae voluptatibus tempora, optio nam harum temporibus
              tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nisi recusandae dolore molestiae quis iste.
            </p>
          </div>
          <div className="footer_main">
            <h3>Contact</h3>
            <ul>
              <li>
                <MdLocationOn className="contacts_icons" />
                <span>
                  102 Amfotech IT Park, 1st Floor Padwal Nagar, Thane West,
                  Mumbai, Maharashtra-400080
                </span>
              </li>
              <li>
                <BiPhoneCall className="contacts_icons" />
                <span>987654123</span>
              </li>
              <li>
                <BiPhoneCall className="contacts_icons" />
                <span>987654123</span>
              </li>
              <li>
                <BsFillEnvelopeFill className="contacts_icons" />
                <span>lorem@gmail.com</span>
              </li>
            </ul>
          </div>
          <div class="footer_right">
            <div class="footer_links">
              <Link to="/" className="socal_links">
                <AiFillInstagram />
              </Link>
              <Link to="/" className="socal_links">
                <AiFillFacebook />
              </Link>
              <Link to="/" className="socal_links">
                <AiFillLinkedin />
              </Link>
              <Link to="/" className="socal_links">
                <AiFillTwitterCircle />
              </Link>
            </div>
          </div>
        </div>
        <div class="copyright">
          Copyright © 2021 All Rights Reserved by Hanibal.
        </div>
      </footer>
    </div>
  );
};

export default Footer;

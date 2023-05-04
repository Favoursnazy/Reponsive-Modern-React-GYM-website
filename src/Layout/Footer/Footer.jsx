import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="website Logo" />
          </Link>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
            corrupti cupiditate nam voluptatem alias consectetur animi officia
            nulla suscipit autem.
          </p>
          <div className="footer__socials">
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrrer noopener"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrrer noopener"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twiter.com/"
              target="_blank"
              rel="noreferrrer noopener"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrrer noopener"
            >
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/s">Blog</Link>
          <Link to="/plans">Case Studies</Link>
          <Link to="/trainers">Event</Link>
          <Link to="/gallery">Communities</Link>
          <Link to="/contact">FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="/contact">Contact</Link>
          <Link to="/plans">Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>2022 FAVOURSNAZY DEV </small>
      </div>
    </footer>
  );
};

export default Footer;

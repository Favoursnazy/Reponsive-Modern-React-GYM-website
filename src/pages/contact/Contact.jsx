import Header from "../../components/header/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

import "./contact.css";

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
        perferendis, suscipit nesciunt excepturi provident odio!
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:contact@favoursnazy.dev" target="_blank">
              <MdEmail />
            </a>
            <a href="http://m.me/favoursnazy" target="_blank">
              <BsMessenger />
            </a>
            <a href="https://wa.me/+2349030217486" target="_blank">
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

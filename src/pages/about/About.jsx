import Header from "../../components/header/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, deleniti?
        Quasi natus alias, aut earum veritatis deleniti tempora odit doloremque!
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              quae asperiores blanditiis amet aut cumque ratione, commodi,
              numquam dolorum odio maiores voluptatibus, est nisi ad adipisci
              dicta nemo similique porro!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              perferendis commodi. Recusandae fuga, provident illum voluptate,
              doloremque voluptates expedita soluta commodi, quo repellat quis
              debitis reprehenderit saepe.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores, quia at! Id sunt veniam nihil eveniet veritatis
              pariatur quos dolorem! Doloribus delectus aperiam vel magni maxime
              eaque autem?
            </p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              quae asperiores blanditiis amet aut cumque ratione, commodi,
              numquam dolorum odio maiores voluptatibus, est nisi ad adipisci
              dicta nemo similique porro!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              perferendis commodi. Recusandae fuga, provident illum voluptate,
              doloremque voluptates expedita soluta commodi, quo repellat quis
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              quae asperiores blanditiis amet aut cumque ratione, commodi,
              numquam dolorum odio maiores voluptatibus, est nisi ad adipisci
              dicta nemo similique porro!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              perferendis commodi. Recusandae fuga, provident illum voluptate,
              doloremque voluptates expedita soluta commodi, quo repellat quis
              debitis reprehenderit saepe.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores, quia at! Id sunt veniam nihil eveniet veritatis
              pariatur quos dolorem! Doloribus delectus aperiam vel magni maxime
              eaque autem?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

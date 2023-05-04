import FAQs from "../../components/faq/FAQs";
import MainHeader from "../../components/mainHeader/MainHeader";
import Programs from "../../components/programs/Programs";
import Testimonial from "../../components/testimonial/Testimonial";
import Values from "../../components/values/Values";
import "./home.css";

const Home = () => {
  return (
    <>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
      <Testimonial />
    </>
  );
};

export default Home;

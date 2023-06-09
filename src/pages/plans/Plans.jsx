import Header from "../../components/header/Header";
import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../../Ui/card/Card";
import { plans } from "../../data/data";
import "./plans.css";

const Plans = () => {
  return (
    <>
      <Header title="Membership Plans" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum earum
        doloribus vel!
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {plans?.map(({ id, name, desc, price, features }) => (
            <Card key={id} className="plan">
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>{`$${price}`}</h1>
              <h2>/mo</h2>
              <h4>Features</h4>
              {features?.map(({ feature, available }, index) => (
                <p className={!available ? "disabled" : ""} key={index}>
                  {feature}
                </p>
              ))}
              <button className="btn lg">Choose Plan</button>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Plans;

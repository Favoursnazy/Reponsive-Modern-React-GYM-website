import React from "react";
import Image from "../../images/values.jpg";
import SectionHead from "../sectionHead/SectionHead";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../../data/data";
import Card from "../../Ui/card/Card";

const Values = () => {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={Image} alt="value image" />
          </div>
        </div>
        <div className="values__right">
          <SectionHead Icon={GiCutDiamond} title="values" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            praesentium minima, ullam rerum ex expedita!
          </p>
          <div className="values__wrapper">
            {values?.map(({ id, icon, title, desc }) => (
              <Card className="values__value" key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{desc} </small>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;

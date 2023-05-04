import React, { useState } from "react";
import SectionHead from "../sectionHead/SectionHead";
import Card from "../../Ui/card/Card";
import { ImQuotesLeft } from "react-icons/im";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { testimonials } from "../../data/data";

const Testimonial = () => {
  const [index, setIndex] = useState(Number(0));
  const { name, quote, job, avatar } = testimonials[index];

  //handle previous testimonial
  const prevTestimonialHandler = () => {
    setIndex((prev) => prev - 1);
    if (index <= 0) {
      setIndex(testimonials.length - 1);
    }
  };

  // handle next testimonial
  const nextTestimonialHandler = () => {
    setIndex((prev) => prev + 1);
    if (index >= testimonials.length - 1) {
      setIndex(0);
    }
  };
  return (
    <section className="testimonials">
      <div className="container testimonials__container">
        <SectionHead
          Icon={ImQuotesLeft}
          title="Testimonials"
          className="testimonials__head"
        />
        <Card className="testimonial">
          <div className="testimonial__avatar">
            <img src={avatar} alt="testimonial " />
          </div>
          <p className="testimonial__quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonial__title">{job}</small>
        </Card>
        <div className="testimonial__btn-container">
          <button
            className="testimonials__btn"
            onClick={prevTestimonialHandler}
          >
            <IoIosArrowDropleftCircle />
          </button>
          <button
            className="testimonials__btn"
            onClick={nextTestimonialHandler}
          >
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

import React from "react";
import { SiOpenaigym } from "react-icons/si";

//image import
import Image1 from "../images/avatar1.jpg";
import Image2 from "../images/avatar2.jpg";
import Image3 from "../images/avatar3.jpg";
import Image4 from "../images/avatar4.jpg";
import Image5 from "../images/avatar5.jpg";

//import Gallery images
import gallery1 from "../images/gallery1.jpg";
import gallery2 from "../images/gallery2.jpg";
import gallery3 from "../images/gallery3.jpg";
import gallery4 from "../images/gallery4.jpg";
import gallery5 from "../images/gallery5.jpg";
import gallery6 from "../images/gallery6.jpg";
import gallery7 from "../images/gallery7.jpg";
import gallery8 from "../images/gallery8.jpg";
import gallery9 from "../images/gallery9.jpg";
import gallery10 from "../images/gallery10.jpg";
import gallery11 from "../images/gallery11.jpg";
import gallery12 from "../images/gallery12.jpg";
import gallery13 from "../images/gallery13.jpg";
import gallery14 from "../images/gallery14.jpg";
import gallery15 from "../images/gallery15.jpg";

//import Trainers Image
import Trainer1 from "../images/trainer1.jpg";
import Trainer2 from "../images/trainer2.jpg";
import Trainer3 from "../images/trainer3.jpg";
import Trainer4 from "../images/trainer4.jpg";
import Trainer5 from "../images/trainer5.jpg";
import Trainer6 from "../images/trainer6.jpg";

//Array of Gallery
export const GalleryImages = [
  {
    image: gallery1,
    id: 1,
  },
  {
    image: gallery2,
    id: 2,
  },
  {
    image: gallery3,
    id: 3,
  },
  {
    image: gallery4,
    id: 4,
  },
  {
    image: gallery5,
    id: 5,
  },
  {
    image: gallery6,
    id: 6,
  },
  {
    image: gallery7,
    id: 7,
  },
  {
    image: gallery8,
    id: 8,
  },
  {
    image: gallery9,
    id: 9,
  },
  {
    image: gallery10,
    id: 10,
  },
  {
    image: gallery11,
    id: 11,
  },
  {
    image: gallery12,
    id: 12,
  },
  {
    image: gallery13,
    id: 13,
  },
  {
    image: gallery14,
    id: 14,
  },
  {
    image: gallery15,
    id: 15,
  },
];

export const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Plans",
    path: "/plans",
  },
  {
    name: "Trainers",
    path: "/trainers",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

//Program Page
export const programs = [
  {
    id: 1,
    icon: <SiOpenaigym />,
    title: "Program One",
    info: "This is the day that the lord has made. We will rejoice!",
    path: "/programs/111",
  },
  {
    id: 2,
    icon: <SiOpenaigym />,
    title: "Program Two",
    info: "This is the day that the lord has made. We will rejoice!",
    path: "/programs/222",
  },
  {
    id: 3,
    icon: <SiOpenaigym />,
    title: "Program Three",
    info: "This is the day that the lord has made. We will rejoice!",
    path: "/programs/333",
  },
  {
    id: 4,
    icon: <SiOpenaigym />,
    title: "Program Four",
    info: "This is the day that the lord has made. We will rejoice!",
    path: "/programs/444",
  },
];

export const values = [
  {
    id: 1,
    icon: <SiOpenaigym />,
    title: "Value One",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
  {
    id: 2,
    icon: <SiOpenaigym />,
    title: "Value Two",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
  {
    id: 3,
    icon: <SiOpenaigym />,
    title: "Value Three",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
  {
    id: 4,
    icon: <SiOpenaigym />,
    title: "Value Four",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
];

// Frequently Asked Questions Page
export const faqs = [
  {
    id: 1,
    question: "How often should I exercise?",
    answer:
      "Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum omnis ex, fuga temporibus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!",
  },
  {
    id: 2,
    question: "What time of day is best to work out?",
    answer:
      "Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui. Eos, omnis beatae? Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit.",
  },
  {
    id: 3,
    question: "How long should my workouts be?",
    answer:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
  },
  {
    id: 4,
    question: "Do I need to warm up before my workouts?",
    answer:
      "Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate? Qui totam est omnis dolor nobis quisquam veritatis a!",
  },
  {
    id: 5,
    question: "Should I do strength training, cardio or both?",
    answer:
      "Maiores fuga, cum praesentium esse laudantium! Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui.",
  },
  {
    id: 6,
    question: "Should I lift weights for strength training?",
    answer:
      "Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Diana Ayi",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
    job: "Student",
    avatar: Image1,
  },
  {
    id: 2,
    name: "Daniel Vinyo",
    quote:
      "Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and that odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
    job: "Software Egineer",
    avatar: Image2,
  },
  {
    id: 3,
    name: "Edem Quist",
    quote:
      "Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
    job: "University Lecturer",
    avatar: Image3,
  },
  {
    id: 4,
    name: "Grace Lavoe",
    quote:
      "Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
    job: "Talking Parrot",
    avatar: Image4,
  },
  {
    id: 5,
    name: "Nana Yaa Dankwa",
    quote:
      "Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
    job: "Pharmacist",
    avatar: Image5,
  },
];

export const plans = [
  {
    id: 1,
    name: "Silver Package",
    desc: "This package is perfect for beginners who need constant help",
    price: 29.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: true },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: true },
      { feature: "Fifth Feature", available: true },
      { feature: "Fifth Feature Plus", available: false },
      { feature: "Sixth Feature", available: false },
      { feature: "Seventh Feature", available: false },
      { feature: "Seventh Feature Plus", available: false },
      { feature: "Eighth Feature", available: false },
      { feature: "Ninth Feature", available: false },
      { feature: "Tenth Feature", available: false },
      { feature: "Eleventh Feature", available: false },
    ],
  },
  {
    id: 2,
    name: "Gold Package",
    desc: "This is the perfect package for beginners who know what their doing",
    price: 49.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: true },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: true },
      { feature: "Fifth Feature", available: true },
      { feature: "Fifth Feature Plus", available: true },
      { feature: "Sixth Feature", available: true },
      { feature: "Seventh Feature", available: true },
      { feature: "Seventh Feature Plus", available: true },
      { feature: "Eighth Feature", available: false },
      { feature: "Ninth Feature", available: false },
      { feature: "Tenth Feature", available: false },
      { feature: "Eleventh Feature", available: false },
    ],
  },
  {
    id: 3,
    name: "Platinum Package",
    desc: "This package is perfect for busy people who need home service",
    price: 89.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: true },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: true },
      { feature: "Fifth Feature", available: true },
      { feature: "Fifth Feature Plus", available: true },
      { feature: "Sixth Feature", available: true },
      { feature: "Seventh Feature", available: true },
      { feature: "Seventh Feature Plus", available: true },
      { feature: "Eighth Feature", available: true },
      { feature: "Ninth Feature", available: true },
      { feature: "Tenth Feature", available: true },
      { feature: "Eleventh Feature", available: true },
    ],
  },
];

export const trainers = [
  {
    id: 1,
    image: Trainer1,
    name: "John Doe",
    job: "Aerobic Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 2,
    image: Trainer2,
    name: "Daniel vinyo",
    job: "Speed Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 3,
    image: Trainer3,
    name: "Edem Quist",
    job: "Flexibility Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 4,
    image: Trainer4,
    name: "Shatta Wale",
    job: "Body Composition Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 5,
    image: Trainer5,
    name: "Diana Ayi",
    job: "Circuit Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 6,
    image: Trainer6,
    name: "Wayne Carter",
    job: "Physical Intelligence Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
];

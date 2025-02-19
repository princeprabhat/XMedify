import React from "react";
import style from "./FAQs.module.css";
import Accordion from "../../Accordion/Accordion";
import FAQWall from "../../../assets/Faq_image.png";
import HappyHeart from "../../../assets/happyHeart.png";
import SmileyIcon from "../../../assets/smiley.png";
const accordion_Data = [
  {
    id: "1",
    question: "Why choose our medical for your family?",
    answer:
      "We provide expert care, advanced treatments, and a patient-first approach to keep your family healthy.",
  },
  {
    id: "2",
    question: "Why we are different from others?",
    answer:
      "We offer personalized care, cutting-edge treatments, and a patient-first experience that sets us apart.",
  },
  {
    id: "3",
    question: "Trusted & experience senior care & love",
    answer:
      "Our experienced caregivers provide compassionate, reliable, and expert senior care with love and respect.",
  },
  {
    id: "4",
    question: "How to get appointment for emergency cases?",
    answer:
      "Call our emergency helpline or visit our clinic for immediate assistance.",
  },
  {
    id: "5",
    question: "What services do we offer?",
    answer:
      "We provide comprehensive healthcare, including diagnostics, treatments, and wellness programs for all ages.",
  },
];

const FAQs = () => {
  return (
    <div className={style.faq_container}>
      <div className={style.faq_heading}>
        <div className={style.small_heading}>Get Your Answer</div>
        <div className={style.large_heading}>Frequently Asked Questions</div>
      </div>
      <div className={style.item_container}>
        <div className={style.left_section}>
          <div className={style.left_badge}>
            <img src={SmileyIcon} alt="Smiley-face" />
            <div>
              <span>84k+</span>

              <div>Happy Patients</div>
            </div>
          </div>
          <div className={style.right_badge}>
            <img src={HappyHeart} alt="Happy Heart" />
          </div>
          <img src={FAQWall} alt="wallpaper" />
        </div>
        <div className={style.right_section}>
          <Accordion data={accordion_Data} />
        </div>
      </div>
    </div>
  );
};

export default FAQs;

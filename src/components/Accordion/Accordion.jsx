import React, { useState } from "react";
import style from "./Accordion.module.css";
import { IoAddOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
const Accordion = ({ data }) => {
  const [activeAccordionId, setActiveAccordionId] = useState(null);

  const handleOpen = (accId) => {
    setActiveAccordionId(accId);
  };
  const handleClose = () => {
    setActiveAccordionId(null);
  };

  return (
    <div className={style.accordion_container}>
      {data &&
        data.map((item) => {
          return (
            <div className={style.accordion_box} key={item.id}>
              <div className={style.accordion_question_container}>
                <div className={style.question_title}>{item.question}</div>
                {activeAccordionId == item.id ? (
                  <IoCloseOutline
                    size={30}
                    color="rgba(42, 167, 255, 1)"
                    onClick={() => handleClose()}
                  />
                ) : (
                  <IoAddOutline
                    size={30}
                    color="rgba(42, 167, 255, 1)"
                    onClick={() => handleOpen(item.id)}
                  />
                )}
              </div>
              {activeAccordionId == item.id && (
                <div className={style.accordion_answer}>{item.answer}</div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default Accordion;

import React from "react";
import style from "./Blogs.module.css";

const BlogCard = ({ wall, category, date, title, author, icon }) => {
  return (
    <div className={style.card_box}>
      <img src={wall} alt="wall-image" />

      <div className={style.card_bottom}>
        <div>
          <span>{category}</span>
          <span style={{ color: "rgba(221, 221, 221, 1)" }}> | </span>
          <span>{date}</span>
        </div>

        <p>{title}</p>
        <div>
          <img src={icon} alt="icon-image" />
          <span style={{ color: "rgba(27, 60, 116, 1)" }}>{author}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

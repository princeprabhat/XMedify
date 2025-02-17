import React from "react";
import style from "./Blogs.module.css";
import BlogCard from "./BlogCard";
import DetoxImg from "../../../assets/detox-img.png";
import DrIcon from "../../../assets/dr-Rebecca-Lee.png";
const Blogs = () => {
  return (
    <div className={style.blogs_container}>
      <div className={style.title_text}>Blogs & News</div>
      <div className={style.heading_text}>Read Our Latest News</div>
      <div className={style.card_container}>
        <BlogCard
          wall={DetoxImg}
          title="6 Tips To Protect Your Mental Health When You’re Sick"
          date="March 31, 2022"
          category="Medical"
          author="Rebecca Lee"
          icon={DrIcon}
        />
        <BlogCard
          wall={DetoxImg}
          title="6 Tips To Protect Your Mental Health When You’re Sick"
          date="March 31, 2022"
          category="Medical"
          author="Rebecca Lee"
          icon={DrIcon}
        />
        <BlogCard
          wall={DetoxImg}
          title="6 Tips To Protect Your Mental Health When You’re Sick"
          date="March 31, 2022"
          category="Medical"
          author="Rebecca Lee"
          icon={DrIcon}
        />
      </div>
    </div>
  );
};

export default Blogs;

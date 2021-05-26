import React, { Suspense, lazy, useState, useEffect } from "react";
import styles from "./BlogsPage.module.css";
import globalSectionStyles from "../../CSS/Section.module.css";

import axios from "axios";
import { mediumAPI } from "../../Config/Config";

const Loader = lazy(() => import("../../Components/Loader/Loader"));
const BlogCard = lazy(() => import("../../Components/BlogCard/BlogCard"));
const Footer = lazy(() => import("../../Components/Footer/Footer"));

const BlogsPage = () => {
  let [blogList, setBlogList] = useState(null);

  useEffect(() => {
    axios
      .get(mediumAPI)
      .then((res) => {
        // handle success
        if (res.data.status === "ok") {
          setBlogList(res.data.items);
        } else {
          alert("Internal Server Error!");
        }
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <main className={styles.container}>
      <section className={styles.info_container}>
        <h1
          className={`${globalSectionStyles.heading} ${globalSectionStyles.heading_light}`}
        >
          Blog
        </h1>
        <p
          className={`${styles.intro_para} ${globalSectionStyles.para} ${globalSectionStyles.para_light}`}
        >
          One thing that I absolutely enjoy doing, apart from programming, is
          sharing my knowledge with others. It feels great to learn something
          and pass on the learning to others who are in need. This lead me to
          start writing articles, documenting my learning. Below are the
          articles that I have written over last few years.
        </p>
      </section>

      {blogList === null ? (
        <Loader />
      ) : (
        <section className={styles.blog_card_container}>
          {blogList.map((item, index) => (
            <BlogCard
              key={index}
              title={item.title}
              pubDate={item.pubDate}
              link={item.link}
              thumbnail={item.thumbnail}
            />
          ))}
        </section>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default BlogsPage;

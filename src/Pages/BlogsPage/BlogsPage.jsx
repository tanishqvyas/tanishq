import React, { Suspense, lazy, useState } from "react";
import styles from "./BlogsPage.module.css";
import globalSectionStyles from "../../CSS/Section.module.css";

const Loader = lazy(() => import("../../Components/Loader/Loader"));
const BlogCard = lazy(() => import("../../Components/BlogCard/BlogCard"));
const Footer = lazy(() => import("../../Components/Footer/Footer"));

const BlogsPage = () => {
  let [blogList, setBlogList] = useState(null);

  return (
    <main className={styles.container}>
      <section className={styles.info_container}>
        <h1
          className={`${globalSectionStyles.heading} ${globalSectionStyles.heading_light}`}
        >
          Blog
        </h1>
        <p
          className={`${globalSectionStyles.para} ${globalSectionStyles.para_light}`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit animi
          similique architecto eos officiis suscipit nisi aliquam, officia modi
          doloremque!
        </p>
      </section>

      {blogList === null ? (
        <Loader />
      ) : (
        <section className={styles.blog_card_container}>
          {blogList.map((item, index) => (
            <BlogCard key={index} {...item} />
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

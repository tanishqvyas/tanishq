import React from "react";
import styles from "./BlogCard.module.css";
import styled, { css } from "styled-components";

import { BsBoxArrowUpRight } from "react-icons/bs";

import { formatDate } from "../../Helpers/datetimeHelpers";

const ImageContainer = styled.div`
  background-image: ${(props) => `url(${props.src})`};
  width: 100%;
  height: 350px;
  background-position: center;
  background-size: cover;
  border-radius: 13px 13px 0px 0px;
  transition: all 0.7s ease-in-out;

  ${(props) =>
    props.animated &&
    css`
      &:hover {
        transform: scale(1.1);
        opacity: 0.7;
      }
    `}

  @media screen and (max-width: 900px) {
    box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.05);
    height: 250px;
  }
`;

// const blogStatsAPI = "https://medium-stats-api.herokuapp.com/api/stats?story_url=THE_URL_OF_THE_MEDIUM_STORY"
const blogStatsAPI =
  "https://medium-stats-api.herokuapp.com/api/stats?story_url=THE_URL_OF_THE_MEDIUM_STORY";

const BlogCard = ({ title, pubDate, link, thumbnail }) => {
  return (
    <div className={`${styles.container} ${"no-underline"}`}>
      <div className={styles.thumbnail_wrapper}>
        <ImageContainer animated src={thumbnail} />
      </div>
      <div className={styles.info_wrapper}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.card_footer}>
          <div>{formatDate(pubDate)}</div>
          <a
            href={link}
            target="_blank"
            rel="external"
            className={`${styles.authorName} ${"no-underline"}`}
          >
            {" "}
            <BsBoxArrowUpRight className={styles.read_icon} /> Read
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

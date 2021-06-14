import React from "react";
import mastercraft from "../images/logo-mastercraft.svg";
import bookmark from "../images/icon-bookmark.svg";
import { useGeneralContext } from "../context/context";
const Intro = () => {
  const { openModal } = useGeneralContext();
  return (
    <section className="intro">
      <img src={mastercraft} alt="mastercraft" className="intro-logo" />
      <h2>Mastercraft Bamboo Monitor Riser</h2>
      <p>
        A beautiful handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="btn-container">
        <button className="project-btn primary-btn" onClick={openModal}>
          Back this project
        </button>
        <button className="bookmark-btn">
          <img src={bookmark} alt="bookmark" />
          <span> Bookmark</span>
        </button>
      </div>
    </section>
  );
};

export default Intro;

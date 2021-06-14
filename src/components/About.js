import React from "react";
import { useGeneralContext } from "../context/context";

const About = () => {
  const { pledge, openModal } = useGeneralContext();
  return (
    <section className="about">
      <h3>About this project</h3>
      <p>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand. <br />
        <br /> Featuring artisan craftsmanship, the simplicity of design creates
        extra desk space below your computer to allow notepads, pens, and USB
        sticks to be stored under the stand.
      </p>
      {pledge.map((item) => {
        const { title, pledge, info, number, btn, id } = item;
        return (
          <article
            key={id}
            className={number === 0 ? "inactive pledge-info" : "pledge-info"}
          >
            <header>
              <h4>{title}</h4>
              <p className="pledge">{pledge}</p>
            </header>
            <p>{info}</p>
            <footer>
              <h3>
                {number} <span>left</span>
              </h3>
              {number === 0 ? (
                <button className="inactive-btn">Out of stock</button>
              ) : (
                <button className="primary-btn" onClick={openModal}>
                  {btn}
                </button>
              )}
            </footer>
          </article>
        );
      })}
    </section>
  );
};

export default About;

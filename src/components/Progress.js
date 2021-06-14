import React from "react";
import { useGeneralContext } from "../context/context";

const Progress = () => {
  const { target, people } = useGeneralContext();
  let value = target.toString();
  if (value.length === 5) {
  }
  return (
    <section className="progress">
      <div className="record">
        <div className="progress-info">
          <h2> ${value}</h2>
          <p>of $100,000 backed</p>
        </div>
        <div className="progress-info">
          <h2>{people} </h2>
          <p>total backers</p>
        </div>
        <div className="progress-info">
          <h2> 56 </h2>
          <p> days left</p>
        </div>
      </div>
    </section>
  );
};

export default Progress;

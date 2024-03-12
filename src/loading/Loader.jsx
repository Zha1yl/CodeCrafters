import React from "react";
import "./../loading/loader.css";

const Loader = () => {
  const spanCount = 20;

  return (
    <div>
      <section className="loader__section">
        <div className="loader">
          {[...Array(spanCount)].map((_, index) => (
            <span
              key={index}
              className="loader_span"
              style={{ "--1": index + 1 }}
            ></span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Loader;

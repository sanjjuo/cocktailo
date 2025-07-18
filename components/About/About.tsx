import React from "react";
import HeadingAndRatings from "./HeadingAndRatings";
import GridImages from "./GridImages";

const About = () => {
  return (
    <div className="app-width px-5 py-10 lg:py-20 lg:px-0 space-y-10">
      <HeadingAndRatings />
      <GridImages />
    </div>
  );
};

export default About;

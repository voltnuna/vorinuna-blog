import React from "react";
import PageMeta from "./pageMeta";
import { StaticImage } from "gatsby-plugin-image";

export const Head = () => <PageMeta title="About Me" />;

const aboutMe = () => {
  return (
    <>
      <div>DOEUN</div>
      <StaticImage
        src="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
        alt=""
      />
    </>
  );
};

export default aboutMe;

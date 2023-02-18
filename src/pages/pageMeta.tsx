import React from "react";

interface PageMetaProps {
  title: string;
  description?: string;
}

const PageMeta = ({ title, description = "Hello World" }: PageMetaProps) => {
  return (
    <>
      <title>Volt&Bori Nuna | {title}</title>

      <meta name="description" content={description} />
    </>
  );
};

export default PageMeta;

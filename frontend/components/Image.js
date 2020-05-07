import * as React from "react";

export const Image = ({ imageData }) => {
  const API_URL = process.env.API_URL || "http://localhost:1337";

  return (
    <img
      alt={imageData.alternativeText}
      src={`${imageData.formats.medium.url}`}
    />
  );
};

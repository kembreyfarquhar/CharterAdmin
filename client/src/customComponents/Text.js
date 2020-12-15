import { createElement } from "react";

// Styling
import StyleGuide from "../theme/StyleGuide";

// Element map for Types
const map = {
  title1: "h1",
  title2: "h2",
  title3: "h3",
  headline: "h4",
  subheadline: "h5",
  body: "p",
  caption: "p",
  buttonText: "p",
};

// EXPORTED TEXT COMPONENT
const Text = ({ type, style, children }) => {
  const styleObj = style
    ? { ...StyleGuide.typeography[type], ...style }
    : StyleGuide.typeography[type];
  return createElement(map[type], { style: styleObj }, children);
};

export default Text;

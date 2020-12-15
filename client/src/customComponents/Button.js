// Hooks
import { useState, useEffect } from "react";

// Styling
import StyleGuide from "../theme/StyleGuide";

// Button Text Style
const labelStyle = {
  color: StyleGuide.colors.neutral.white,
  textAlign: "center",
  ...StyleGuide.typeography.buttonText,
};

// Shadow Styles
const mediumShadow =
  "0px 2px 4px rgba(0, 0, 0, 0.15), 2px 0px 4px rgba(0, 0, 0, 0.1)";
const smallShadow =
  "0px 1px 4px rgba(0, 0, 0, 0.15), 2px 0px 4px rgba(0, 0, 0, 0.1)";

const borderRadius = "4px";

// Button Size Styles
const sizes = {
  small: {
    width: "60px",
    height: "28px",
    padding: "4px 8px",
  },
  medium: {
    width: "75px",
    height: "36px",
    padding: "8px 16px",
  },
  large: {
    width: "132px",
    height: "40px",
    padding: "8px 16px",
  },
};

// Button Color Maps for States
const primaryColors = {
  rest: StyleGuide.colors.brand[150],
  hover: StyleGuide.colors.brand[200],
  active: StyleGuide.colors.brand[250],
  focus: StyleGuide.colors.brand[150],
};
const secondaryColors = {
  rest: StyleGuide.colors.teal[200],
  hover: StyleGuide.colors.teal[250],
  active: StyleGuide.colors.teal[300],
  focus: StyleGuide.colors.teal[200],
};

// Button State Types
const stateTypes = {
  rest: "rest",
  hover: "hover",
  active: "active",
  focus: "focus",
};

// EXPORTED BUTTON COMPONENT
const Button = ({ label, type, size, onClick }) => {
  const [state, setState] = useState(stateTypes.rest);
  const [buttonStyle, setButtonStyle] = useState();

  useEffect(() => {
    setButtonStyle({ ...staticStyles, ...states[state] });
  }, [state]);

  const buttonType = type ? type : "primary";
  const buttonSize = size ? size : "medium";

  const sizeObj = sizes[buttonSize];

  const staticStyles = {
    ...sizeObj,
    ...labelStyle,
    borderRadius,
  };

  const setRest = () => setState(stateTypes.rest);

  const setHover = () => setState(stateTypes.hover);

  const setActive = () => setState(stateTypes.active);

  const setFocus = () => setState(stateTypes.focus);

  const states = {
    rest: {
      background:
        buttonType === "primary" ? primaryColors.rest : secondaryColors.rest,
      boxShadow: mediumShadow,
    },
    hover: {
      background:
        buttonType === "primary" ? primaryColors.hover : secondaryColors.hover,
      boxShadow: smallShadow,
    },
    active: {
      background:
        buttonType === "primary"
          ? primaryColors.active
          : secondaryColors.active,
    },
    focus: {
      background:
        buttonType === "primary" ? primaryColors.focus : secondaryColors.focus,
      boxShadow: mediumShadow,
      border: "1px solid #FFFFFF",
    },
  };

  return (
    <button
      style={buttonStyle}
      onMouseOver={setHover}
      onMouseOut={setRest}
      onMouseDown={setActive}
      onMouseUp={setRest}
      onFocus={setFocus}
      onBlur={setRest}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;

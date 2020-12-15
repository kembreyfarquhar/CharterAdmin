// Custom Components
import Text from "./Text";
import StyleGuide from "../theme/StyleGuide";

// EXPORTED CARD COMPONENT
const Card = ({ header, style, children }) => {
  return (
    <div
      style={{
        margin: "40px",
        paddingBottom: "10px",
        borderRadius: "4px",
        boxShadow: "1px 2px 6px rgba(0, 0, 0, 0.3)",
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      <div
        style={{
          paddingTop: "10px",
          borderBottom: `2px solid ${StyleGuide.colors.neutral[150]}`,
          marginBottom: "10px",
        }}
      >
        <Text
          type="subheadline"
          style={{
            marginLeft: "24px",
            marginBottom: "8px",
            color: StyleGuide.colors.neutral[300],
          }}
        >
          {header}
        </Text>
      </div>

      {children}
    </div>
  );
};

export default Card;

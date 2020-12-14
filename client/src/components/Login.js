import { useState } from "react";
import StyleGuide from "../theme/StyleGuide";

const credentials = {
  email: "hireme@gmail.com",
  password: "verysecurepassword",
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="full-size"
      style={{
        background: StyleGuide.colors.brand[150],
        boxShadow: "inset 8px 8px 80px #400095",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: "75%",
          width: "75%",
          background: StyleGuide.colors.neutral.white,
          boxShadow: "0px 8px 20px 10px rgba(0, 0, 0, 0.25)",
        }}
      ></div>
    </div>
  );
};

export default Login;

import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useViewport } from "../context/viewport";
import Button from "../customComponents/Button";
import StyleGuide from "../theme/StyleGuide";

const credentials = {
  email: "hireme@gmail.com",
  password: "verysecurepassword",
};

const Login = () => {
  const history = useHistory();
  const { width } = useViewport();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const breakpoint = 800;

  const handleLogin = (e) => {
    e.preventDefault();
    //validate email and password
    history.push("/dashboard");
  };

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
      {width < breakpoint ? (
        <MobileView handleLogin={handleLogin} />
      ) : (
        <DesktopView handleLogin={handleLogin} />
      )}
    </div>
  );
};

const MobileView = ({ handleLogin }) => {
  return (
    <div
      style={{
        height: "75%",
        width: "75%",
        background: StyleGuide.colors.neutral.white,
        boxShadow: "0px 8px 20px 10px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div
        style={{
          height: "170px",
          width: "100%",
          background: StyleGuide.colors.neutral[400],
        }}
      ></div>
    </div>
  );
};

const DesktopView = ({ handleLogin }) => {
  return (
    <div
      style={{
        height: "75%",
        width: "75%",
        background: StyleGuide.colors.neutral.white,
        boxShadow: "0px 8px 20px 10px rgba(0, 0, 0, 0.25)",
        display: "flex",
      }}
    >
      <div
        style={{
          height: "100%",
          flex: 1,
          background: StyleGuide.colors.neutral[400],
        }}
      ></div>
      <div style={{ height: "100%", flex: 2 }}>
        <Button label="Login" onClick={handleLogin} />
      </div>
    </div>
  );
};

export default Login;

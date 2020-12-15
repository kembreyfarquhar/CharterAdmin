// Hooks
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useViewport } from "../context/viewport";

// Custom Components
import Button from "../customComponents/Button";
import Text from "../customComponents/Text";

// Styling
import StyleGuide from "../theme/StyleGuide";

// Assets
import logo from "../assets/logo-light.png";

// Constants
const DARK_GREY = StyleGuide.colors.neutral[400];
const WHITE = StyleGuide.colors.neutral.white;
const ERROR_COLOR = StyleGuide.colors.red[150];
const APP_NAME = "CharterAdmin";
const APP_TYPE = "Admin Access Portal";
const APP_DETAIL =
  "Your personal entry point into viewing and editing crucial information about your store.";
const LOGIN_HEADER = "Login to CharterAdmin";

const credentials = {
  email: "hireme@gmail.com",
  password: "verysecurepassword",
};

const inputBorderColors = {
  rest: StyleGuide.colors.neutral[200],
  active: StyleGuide.colors.brand[150],
  error: ERROR_COLOR,
};

// MAIN LOGIN COMPONENT, HOLDS PAGE STATE
const Login = () => {
  const history = useHistory();
  const { width } = useViewport();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [emailFocus, setEmailFocus] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [passwordError, setPasswordError] = useState(null);
  const breakpoint = 800;

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateCredentials()) history.push("/dashboard");
  };

  function validateCredentials() {
    if (!email) setEmailError("Please provide an email");
    if (!password) setPasswordError("Please provide a password");
    if (email && email !== credentials.email)
      setEmailError("We don't recognize that email");
    if (password && password !== credentials.password)
      setPasswordError(
        'Password doesn\'t match, try again or click "Forgot password"'
      );
    if (email === credentials.email && password === credentials.password)
      return true;
  }

  const props = {
    handleLogin,
    setEmail,
    email,
    setPassword,
    password,
    emailError,
    passwordError,
    setEmailError,
    setPasswordError,
    emailFocus,
    passwordFocus,
    setEmailFocus,
    setPasswordFocus,
  };

  return (
    <div className="full-size" style={styles.screenBackground}>
      {width < breakpoint ? (
        <MobileView {...props} />
      ) : (
        <DesktopView {...props} />
      )}
    </div>
  );
};

// Spacer Component
const Spacer = ({ space }) => <div style={{ marginTop: space }} />;

// Custom Alert
const Alert = ({ setAlert, setEmail, setPassword }) => (
  <div style={styles.alertStyle}>
    <p>Hi there! Need the credentials?</p>
    <p>Email: {credentials.email}</p>
    <p>Password: {credentials.password}</p>
    <Spacer space="20px" />
    <Button
      label="Add them!"
      type="secondary"
      size="large"
      onClick={() => {
        setEmail(credentials.email);
        setPassword(credentials.password);
        setAlert(false);
      }}
    />
  </div>
);

// Mobile View Component
const MobileView = () => {
  return (
    <div style={styles.contentContainer}>
      <div style={styles.topPanel}>
        <Text type="title3" style={{ color: WHITE, textAlign: "center" }}>
          Mobile view coming soon!
        </Text>
      </div>
    </div>
  );
};

// Destop View Component
const DesktopView = (props) => {
  const {
    handleLogin,
    email,
    password,
    setEmail,
    setPassword,
    emailError,
    passwordError,
    setEmailError,
    setPasswordError,
    emailFocus,
    setEmailFocus,
    passwordFocus,
    setPasswordFocus,
  } = props;
  const [alert, setAlert] = useState(false);

  function emailFocusHandler() {
    setEmailError(null);
    setEmailFocus(true);
  }

  function passwordFocusHandler() {
    setPasswordError(null);
    setPasswordFocus(true);
  }

  function sendAlert() {
    setAlert(true);
  }

  return (
    <div style={styles.contentContainer}>
      {alert && (
        <Alert
          setAlert={setAlert}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      )}
      <div style={styles.leftPanel}>
        <div style={styles.companyContent}>
          <img
            src={logo}
            alt="circular logo with bar chart"
            style={{ height: "116px", width: "116px" }}
          />
          <Spacer space="20px" />
          <Text type="title1" style={{ color: WHITE }}>
            {APP_NAME}
          </Text>
          <Text type="body" style={{ color: WHITE }}>
            {APP_TYPE}
          </Text>
          <Spacer space="40px" />
          <Text
            type="body"
            style={{
              color: WHITE,
              textAlign: "center",
            }}
          >
            {APP_DETAIL}
          </Text>
        </div>
      </div>
      <div style={styles.loginContent}>
        <Text type="title1" style={{ color: DARK_GREY }}>
          {LOGIN_HEADER}
        </Text>
        <Spacer space="40px" />
        <form style={{ display: "flex", flexDirection: "column" }}>
          <Text type="body" style={{ color: DARK_GREY }}>
            Email
          </Text>
          <input
            style={{
              ...styles.inputStyle,
              background:
                emailFocus || email ? WHITE : StyleGuide.colors.neutral[100],
              border: emailError
                ? `1px solid ${inputBorderColors.error}`
                : emailFocus
                ? `1px solid ${inputBorderColors.active}`
                : `1px solid ${inputBorderColors.rest}`,
            }}
            onFocus={emailFocusHandler}
            onClick={emailFocusHandler}
            onBlur={() => setEmailFocus(false)}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && (
            <Text type="caption" style={{ color: inputBorderColors.error }}>
              {emailError}
            </Text>
          )}
          <Spacer space="30px" />
          <div style={styles.passwordTextContainer}>
            <Text type="body" style={{ color: DARK_GREY }}>
              Password
            </Text>
            <p
              className="link"
              onClick={sendAlert}
              style={styles.forgotPassword}
            >
              Forgot your password?
            </p>
          </div>
          <input
            style={{
              ...styles.inputStyle,
              background:
                passwordFocus || password
                  ? WHITE
                  : StyleGuide.colors.neutral[100],
              border: passwordError
                ? `1px solid ${inputBorderColors.error}`
                : passwordFocus
                ? `1px solid ${inputBorderColors.active}`
                : `1px solid ${inputBorderColors.rest}`,
            }}
            onFocus={passwordFocusHandler}
            onBlur={() => setPasswordFocus(false)}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && (
            <Text type="caption" style={{ color: inputBorderColors.error }}>
              {passwordError}
            </Text>
          )}
          <Spacer space="30px" />
          <Button label="Login" size="large" onClick={handleLogin} />
        </form>
      </div>
    </div>
  );
};

export default Login;

// Styles
const styles = {
  screenBackground: {
    background: StyleGuide.colors.brand[150],
    boxShadow: "inset 8px 8px 80px #400095",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  alertStyle: {
    background: StyleGuide.colors.teal[100],
    position: "fixed",
    right: 0,
    marginTop: "40px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    height: "75%",
    width: "75%",
    background: WHITE,
    boxShadow: "0px 8px 20px 10px rgba(0, 0, 0, 0.25)",
    display: "flex",
  },
  leftPanel: {
    height: "100%",
    width: "312px",
    background: DARK_GREY,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  topPanel: {
    height: "170px",
    width: "100%",
    background: DARK_GREY,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  companyContent: {
    height: "300px",
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  loginContent: {
    height: "100%",
    flex: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: "80px",
  },
  inputStyle: {
    height: "35px",
    width: "300px",
    borderRadius: "4px",
    paddingLeft: "8px",
  },
  passwordTextContainer: {
    display: "flex",
    width: "300px",
    justifyContent: "space-between",
  },
  forgotPassword: {
    fontSize: "14px",
    textDecoration: "underline",
  },
};

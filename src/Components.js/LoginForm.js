import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [toggleState, setToggleState] = useState("");
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="form-container">
      <div className="tabs-block">
        <div
          className={toggleState === "Login" ? "tab tab-active" : "tab"}
          onClick={() => toggleTab("Login")}
        >
          Login
        </div>
        <div
          className={toggleState === "Sign up" ? "tab tab-active" : "tab"}
          onClick={() => toggleTab("Sign up")}
        >
          Sign up
        </div>
      </div>
      <div
        className={
          toggleState === "Login"
            ? "tab-content tab-content-active"
            : "tab-content"
        }
      >
        <form className="form">
          <h2>Login</h2>
          <div className="input-box">
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Username" />
            <div className="ïnput-box flex-row">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <Link>Forgot password</Link>
            </div>
          </div>
          <div className="input-box">
            <input type="button" className="button" value="Login" />
            <label>
              Don't have an account<Link path="#">Sign up</Link>
            </label>
          </div>
        </form>
      </div>
      <div
        className={
          toggleState === "Sign up"
            ? "tab-content tab-content-active"
            : "tab-content"
        }
      >
        <form className="form">
          <h2>Sign up</h2>
          <div className="input-box">
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Username" />
            <div className="ïnput-box flex-row">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <Link>Forgot password</Link>
            </div>
          </div>
          <div className="input-box">
            <input type="button" className="button" value="Login" />
            <label>
              Don't have an account<Link path="#">Sign up</Link>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

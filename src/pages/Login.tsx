import { useState } from "react";
import "./Login.css";
import loginImage from "../assets/feature/AI.jpeg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main className="login-page">
      <section className="login-shell">
        <div className="login-visual" aria-hidden="true">
          <img src={loginImage} alt="" className="login-image" />
          <div className="login-visual-overlay" />

          <div className="login-visual-badge login-visual-badge-top">
            <span>Secure Access</span>
            <strong>AI Workspace</strong>
          </div>

          <div className="login-visual-badge login-visual-badge-bottom">
            <span>Built for teams</span>
            <strong>Fast onboarding</strong>
          </div>
        </div>

        <div className="login-panel">
          <div className="login-card">
            <p className="login-kicker">Welcome back</p>
            <h1>Sign in to AIGETAI</h1>
            <p className="login-subtext">
              Access your dashboard, learning tools, and team spaces from one secure place.
            </p>

            <div className="login-social-row">
              <button className="google-btn" type="button">Google</button>
              <button className="apple-btn" type="button">Apple</button>
              <button className="enterprise-btn" type="button">Enterprise</button>
            </div>

            <div className="login-divider">
              <span>or continue with email</span>
            </div>

            <form className="login-form" onSubmit={handleSubmit}>
              <label>
                Email Address
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label>
                Password
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </label>

              <div className="login-form-meta">
                <label className="login-remember">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <button type="button" className="login-forgot">
                  Forgot password?
                </button>
              </div>

              <button className="normal-login-btn" type="submit">
                Sign in now
              </button>
            </form>

            <small>
              By continuing, you agree to our Terms of Service and Privacy Policy.
            </small>
          </div>
        </div>
      </section>
    </main>
  );
}
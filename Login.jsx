import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="form-page">

      <div className="form-card">

        <div className="form-heading">
          <p className="eyebrow">WELCOME BACK</p>

          <h1>Login to RailSync</h1>

          <p>
            Login to continue your railway journey.
          </p>
        </div>

        <form>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="primary-btn">
            Login
          </button>

        </form>

        <p className="form-footer">
          Don't have an account?{" "}
          <Link to="/register">Register</Link>
        </p>

      </div>

    </div>
  );
}

export default Login;

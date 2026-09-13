import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Button from "../components/Button";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(event) {

    event.preventDefault();

    if (
      !name ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    setSuccess(true);
  }

  if (success) {
    return (
      <>
        <Navbar />

        <main className="form-page">

          <div className="success-card">

            <div className="success-icon">
              ✓
            </div>

            <h1>
              Registration Successful
            </h1>

            <p>
              Your account has been created.
            </p>

            <Button
              onClick={() => navigate("/login")}
            >
              Go to Login
            </Button>

          </div>

        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="form-page">

        <div className="form-card">

          <div className="form-heading">

            <p className="eyebrow">
              JOIN RAILSYNC
            </p>

            <h1>Create an Account</h1>

          </div>

          <form onSubmit={handleSubmit}>

            <Input
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
            />

            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />

            <Input
              label="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone number"
            />

            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />

            <Input
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              placeholder="Confirm password"
            />

            {error && (
              <p className="error">{error}</p>
            )}

            <Button type="submit">
              Register
            </Button>

          </form>

        </div>

      </main>
    </>
  );
}

export default Register;

import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const features = [
    {
      icon: "🎫",
      title: "Easy Booking",
      text: "Book your train journey easily."
    },
    {
      icon: "💺",
      title: "Seat Availability",
      text: "Choose your preferred available seat."
    },
    {
      icon: "🔒",
      title: "Secure Payment",
      text: "Simple payment interface."
    },
    {
      icon: "📱",
      title: "Digital Ticket",
      text: "Get instant booking confirmation."
    }
  ];

  return (
    <>
      <Navbar />

      <section className="hero">

        <div className="hero-content">

          <p className="eyebrow">
            WELCOME TO RAILSYNC
          </p>

          <h1>
            Your Journey <span>Starts Here</span>
          </h1>

          <p>
            Fast, Secure & Smart Railway Booking
          </p>

          <Button
            onClick={() => navigate("/search")}
          >
            Find Your Train
          </Button>

        </div>

        <div className="hero-visual">
          🚆
        </div>

      </section>

      <section className="section">

        <div className="section-heading">
          <p className="eyebrow">WHY RAILSYNC?</p>
          <h2>Everything you need for your journey</h2>
        </div>

        <div className="feature-grid">

          {features.map((feature) => (
            <div
              className="feature-card"
              key={feature.title}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>
            </div>
          ))}

        </div>

      </section>
    </>
  );
}

export default Home;

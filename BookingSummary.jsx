import {
  useLocation,
  useNavigate
} from "react-router-dom";

import Navbar from "../components/Navbar";
import Button from "../components/Button";
import trains from "../data/trains";

function BookingSummary() {

  const location = useLocation();
  const navigate = useNavigate();

  const train =
    location.state?.train || trains[0];

  const selectedSeat =
    location.state?.selectedSeat || "A2";

  const passenger =
    location.state?.passenger || {
      name: "Demo Passenger",
      age: 20,
      gender: "Female"
    };

  const serviceCharge = 50;
  const total = train.fare + serviceCharge;

  return (
    <>
      <Navbar />

      <main className="page">

        <div className="page-heading">

          <p className="eyebrow">
            FINAL REVIEW
          </p>

          <h1>Booking Summary</h1>

        </div>

        <div className="summary-card">

          <h2>Train</h2>

          <p>
            <strong>{train.name}</strong>
          </p>

          <p>
            {train.from} → {train.to}
          </p>

          <p>
            Journey Date: 20 September 2026
          </p>

          <hr />

          <h2>Passenger</h2>

          <p>Name: {passenger.name}</p>
          <p>Age: {passenger.age}</p>
          <p>Gender: {passenger.gender}</p>

          <hr />

          <h2>Seat</h2>

          <p>
            Selected Seat: {selectedSeat}
          </p>

          <hr />

          <h2>Fare</h2>

          <div className="summary-row">
            <span>Ticket Fare</span>
            <strong>₹{train.fare}</strong>
          </div>

          <div className="summary-row">
            <span>Service Charge</span>
            <strong>₹50</strong>
          </div>

          <div className="total-row">
            <span>Total</span>
            <strong>₹{total}</strong>
          </div>

          <Button
            onClick={() =>
              navigate("/payment", {
                state: {
                  train,
                  selectedSeat,
                  passenger,
                  total
                }
              })
            }
          >
            Proceed to Payment
          </Button>

        </div>

      </main>
    </>
  );
}

export default BookingSummary;

import {
  useLocation,
  useNavigate
} from "react-router-dom";

import Navbar from "../components/Navbar";
import Button from "../components/Button";
import trains from "../data/trains";

function TrainDetails() {

  const location = useLocation();
  const navigate = useNavigate();

  const train =
    location.state?.train || trains[0];

  return (
    <>
      <Navbar />

      <main className="page">

        <div className="details-card">

          <p className="eyebrow">
            TRAIN DETAILS
          </p>

          <h1>{train.name}</h1>

          <p>
            Train No. {train.number}
          </p>

          <div className="large-route">

            <div>
              <span>Departure</span>
              <strong>{train.departure}</strong>
              <span>{train.from}</span>
            </div>

            <div className="route-line">
              →
            </div>

            <div>
              <span>Arrival</span>
              <strong>{train.arrival}</strong>
              <span>{train.to}</span>
            </div>

          </div>

          <div className="info-grid">

            <div>
              <span>Fare</span>
              <strong>₹{train.fare}</strong>
            </div>

            <div>
              <span>Available Seats</span>
              <strong>{train.seats}</strong>
            </div>

            <div>
              <span>Class</span>
              <strong>AC</strong>
            </div>

          </div>

          <Button
            onClick={() =>
              navigate("/seat-selection", {
                state: { train }
              })
            }
          >
            Book Train
          </Button>

        </div>

      </main>
    </>
  );
}

export default TrainDetails;

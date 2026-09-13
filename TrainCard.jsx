import { useNavigate } from "react-router-dom";
import Button from "./Button";

function TrainCard({ train }) {
  const navigate = useNavigate();

  function viewDetails() {
    navigate("/train-details", {
      state: { train: train }
    });
  }

  return (
    <div className="train-card">

      <div className="train-card-top">
        <div>
          <h2>{train.name}</h2>
          <p>Train No. {train.number}</p>
        </div>

        <span className="seat-badge">
          {train.seats} seats
        </span>
      </div>

      <div className="route-row">

        <div>
          <strong>{train.departure}</strong>
          <span>{train.from}</span>
        </div>

        <div className="route-line">→</div>

        <div>
          <strong>{train.arrival}</strong>
          <span>{train.to}</span>
        </div>

      </div>

      <div className="train-card-bottom">

        <div>
          <span>Fare</span>
          <strong>₹{train.fare}</strong>
        </div>

        <Button onClick={viewDetails}>
          View Details
        </Button>

      </div>

    </div>
  );
}

export default TrainCard;

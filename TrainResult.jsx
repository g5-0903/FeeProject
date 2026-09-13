import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import TrainCard from "../components/TrainCard";
import trains from "../data/trains";

function TrainResults() {

  const location = useLocation();

  const search = location.state || {
    from: "Ludhiana",
    to: "New Delhi",
    date: "2026-09-20",
    trainClass: "AC"
  };

  return (
    <>
      <Navbar />

      <main className="page">

        <div className="results-top">

          <div>

            <p className="eyebrow">
              AVAILABLE TRAINS
            </p>

            <h1>
              {search.from} → {search.to}
            </h1>

            <p>
              {search.date} · {search.trainClass}
            </p>

          </div>

          <Link
            to="/search"
            className="outline-btn"
          >
            Modify Search
          </Link>

        </div>

        <div className="results-list">

          {trains.map((train) => (
            <TrainCard
              key={train.id}
              train={train}
            />
          ))}

        </div>

      </main>
    </>
  );
}

export default TrainResults;

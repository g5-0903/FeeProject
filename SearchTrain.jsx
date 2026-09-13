import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Button from "../components/Button";

function SearchTrain() {

  const [from, setFrom] = useState("Ludhiana");
  const [to, setTo] = useState("New Delhi");
  const [date, setDate] = useState("2026-09-20");
  const [trainClass, setTrainClass] = useState("AC");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {

    event.preventDefault();

    if (!from || !to || !date || !trainClass) {
      setError("Please fill in all fields.");
      return;
    }

    navigate("/trains", {
      state: {
        from,
        to,
        date,
        trainClass
      }
    });
  }

  return (
    <>
      <Navbar />

      <main className="page">

        <div className="page-heading">

          <p className="eyebrow">
            PLAN YOUR JOURNEY
          </p>

          <h1>Find Your Train</h1>

          <p>
            Enter your journey details.
          </p>

        </div>

        <div className="search-card">

          <form onSubmit={handleSubmit}>

            <div className="search-grid">

              <Input
                label="From"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="Departure"
              />

              <Input
                label="To"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Destination"
              />

              <Input
                label="Journey Date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />

              <div className="form-group">

                <label>Class</label>

                <select
                  value={trainClass}
                  onChange={(e) =>
                    setTrainClass(e.target.value)
                  }
                >
                  <option>AC</option>
                  <option>Sleeper</option>
                  <option>Chair Car</option>
                </select>

              </div>

            </div>

            {error && (
              <p className="error">{error}</p>
            )}

            <Button type="submit">
              Search Train
            </Button>

          </form>

        </div>

      </main>
    </>
  );
}

export default SearchTrain;

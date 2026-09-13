from pathlib import Path

code = r'''import React, { useState } from "react";
import "./SeatSelection.css";

function SeatSelection() {
  const [selectedSeat, setSelectedSeat] = useState(null);

  // false = available, true = booked
  const seats = [
    { no: 1, booked: false }, { no: 2, booked: true },
    { no: 3, booked: false }, { no: 4, booked: false },
    { no: 5, booked: true }, { no: 6, booked: false },
    { no: 7, booked: false }, { no: 8, booked: true },
    { no: 9, booked: false }, { no: 10, booked: false },
    { no: 11, booked: false }, { no: 12, booked: true },
    { no: 13, booked: false }, { no: 14, booked: false },
    { no: 15, booked: true }, { no: 16, booked: false },
    { no: 17, booked: false }, { no: 18, booked: false },
    { no: 19, booked: true }, { no: 20, booked: false }
  ];

  function selectSeat(seat) {
    if (!seat.booked) {
      setSelectedSeat(seat.no);
    }
  }

  return (
    <div className="seat-page">
      <nav className="navbar">
        <h2>🚆 RailSync</h2>
        <div>
          <span>Home</span>
          <span>Find Train</span>
          <span>Login</span>
          <span>Register</span>
        </div>
      </nav>

      <div className="seat-container">
        <div className="heading">
          <p>SEAT SELECTION</p>
          <h1>Choose Your Seat</h1>
          <small>Shatabdi Express • Train No. 12001</small>
        </div>

        <div className="coach-card">
          <div className="coach-top">
            <h3>Coach C1</h3>
            <select>
              <option>Coach C1</option>
              <option>Coach C2</option>
              <option>Coach C3</option>
            </select>
          </div>

          <div className="legend">
            <span><i className="available"></i> Available</span>
            <span><i className="selected"></i> Selected</span>
            <span><i className="booked"></i> Booked</span>
          </div>

          <div className="seat-layout">
            {seats.map((seat) => (
              <button
                key={seat.no}
                className={
                  seat.booked
                    ? "seat booked-seat"
                    : selectedSeat === seat.no
                    ? "seat selected-seat"
                    : "seat available-seat"
                }
                onClick={() => selectSeat(seat)}
                disabled={seat.booked}
              >
                {seat.no}
              </button>
            ))}
          </div>

          <div className="summary">
            <div>
              <span>Selected Seat</span>
              <strong>{selectedSeat ? `Seat ${selectedSeat}` : "None"}</strong>
            </div>
            <div>
              <span>Fare</span>
              <strong>₹850</strong>
            </div>
            <button className="continue-btn" disabled={!selectedSeat}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeatSelection;
'''

css = r'''.seat-page {
  min-height: 100vh;
  background: #f2f7ff;
  font-family: Arial, sans-serif;
  color: #18324d;
}

.navbar {
  height: 65px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 9%;
  box-shadow: 0 2px 8px rgba(0,0,0,.06);
}

.navbar h2 {
  color: #2467d1;
  margin: 0;
}

.navbar span {
  margin-left: 25px;
  font-size: 13px;
  color: #536273;
}

.seat-container {
  width: 90%;
  max-width: 950px;
  margin: 35px auto;
}

.heading p {
  color: #3578dc;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 7px;
}

.heading h1 {
  margin: 0 0 7px;
  font-size: 28px;
}

.heading small {
  color: #718096;
}

.coach-card {
  background: white;
  margin-top: 25px;
  border-radius: 14px;
  padding: 25px;
  box-shadow: 0 5px 20px rgba(40, 80, 130, .10);
}

.coach-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.coach-top h3 {
  margin: 0;
}

select {
  padding: 9px 15px;
  border: 1px solid #d5e0ef;
  border-radius: 7px;
  background: white;
}

.legend {
  display: flex;
  gap: 25px;
  margin: 25px 0;
  font-size: 13px;
}

.legend span {
  display: flex;
  align-items: center;
  gap: 7px;
}

.legend i {
  width: 17px;
  height: 17px;
  border-radius: 4px;
  display: inline-block;
}

.available { background: #e9f2ff; border: 1px solid #4d8bea; }
.selected { background: #2875df; }
.booked { background: #c9cdd3; }

.seat-layout {
  background: #f5f9ff;
  border: 1px solid #e1eaf5;
  border-radius: 12px;
  padding: 25px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.seat {
  height: 48px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}

.available-seat {
  background: #e9f2ff;
  color: #2467d1;
  border: 1px solid #73a5e9;
}

.selected-seat {
  background: #2875df;
  color: white;
  border: 1px solid #2875df;
}

.booked-seat {
  background: #c9cdd3;
  color: #747980;
  border: 1px solid #b8bdc4;
  cursor: not-allowed;
}

.summary {
  margin-top: 25px;
  display: flex;
  align-items: center;
  gap: 40px;
  padding-top: 20px;
  border-top: 1px solid #e6edf6;
}

.summary div {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.summary span {
  font-size: 12px;
  color: #77869a;
}

.summary strong {
  font-size: 16px;
}

.continue-btn {
  margin-left: auto;
  padding: 12px 25px;
  border: none;
  border-radius: 7px;
  background: #2875df;
  color: white;
  font-weight: bold;
}

.continue-btn:disabled {
  background: #a9c2e7;
}

@media (max-width: 600px) {
  .navbar { padding: 0 5%; }
  .navbar span { margin-left: 8px; font-size: 10px; }
  .seat-container { width: 92%; }
  .seat-layout { grid-template-columns: repeat(2, 1fr); }
  .summary { gap: 15px; flex-wrap: wrap; }
  .continue-btn { margin-left: 0; }
}
'''

Path("/mnt/data/SeatSelection.jsx").write_text(code)
Path("/mnt/data/SeatSelection.css").write_text(css)

print("Created:")
print("/mnt/data/SeatSelection.jsx")
print("/mnt/data/SeatSelection.css")

function Seat({
  seatNumber,
  booked,
  selected,
  onClick
}) {
  let className = "seat";

  if (booked) {
    className += " booked";
  }

  if (selected) {
    className += " selected";
  }

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={booked}
    >
      {seatNumber}
    </button>
  );
}

export default Seat;

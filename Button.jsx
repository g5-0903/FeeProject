function Button({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="primary-btn"
    >
      {children}
    </button>
  );
}

export default Button;

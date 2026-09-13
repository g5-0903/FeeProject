import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Search from "./pages/Search";
import TrainResult from "./pages/TrainResult";
import TrainDetails from "./pages/TrainDetails";
import SeatSelection from "./pages/SeatSelection";
import PassengerDetails from "./pages/PassengerDetails";
import BookingSummary from "./pages/BookingSummary";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/search" element={<Search />} />
      <Route path="/trains" element={<TrainResult />} />
      <Route path="/train-details" element={<TrainDetails />} />
      <Route path="/seat-selection" element={<SeatSelection />} />
      <Route path="/passenger-details" element={<PassengerDetails />} />
      <Route path="/booking-summary" element={<BookingSummary />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/payment-success" element={<PaymentSuccess />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;

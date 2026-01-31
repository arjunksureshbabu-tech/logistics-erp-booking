import "./App.css";
import { Toaster } from "react-hot-toast";
import { BookingForm } from "./pages/BookingForm/BookingForm";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <BookingForm />
    </>
  );
}

export default App;

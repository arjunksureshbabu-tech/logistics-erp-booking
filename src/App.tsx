import { useState } from "react";
import "./App.css";
import { BookingForm } from "./components/BookingForm/BookingForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BookingForm />
    </>
  );
}

export default App;

import { useState, useEffect } from "react";

function Clock() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();

      setDate(now.toLocaleDateString());
      setTime(now.toLocaleTimeString());
    };

    update(); // initial call
    const timer = setInterval(update, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className=" border-2 border-gray-500">
      <div>{date}</div>
      <div>{time}</div>
    </div>
  );
}

export default Clock;

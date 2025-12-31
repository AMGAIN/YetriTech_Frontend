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
    <div>
      <div className="text-white">{date}</div>
      <div className="text-white">{time}</div>
    </div>
  );
}

export default Clock;

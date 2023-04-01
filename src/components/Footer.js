import React,{useState} from "react";

function Footer() {
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);
  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  setInterval(updateTime, 1000)
  const year = new Date().getFullYear();
  return (
    <footer>
      <p className="text-info">Copyright ⓒ {year} {time}</p>
    </footer>
  );
}

export default Footer;

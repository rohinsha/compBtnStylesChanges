import "./styles.css";
import { useState } from "react";
export default function App() {
  const [sty, setSty] = useState({});
  const [isEnable, setIsEnable] = useState(false);
  const hello = () => {
    setIsEnable(!isEnable);
    isEnable
      ? setSty({ ...sty, backgroundColor: "red" })
      : setSty({ ...sty, backgroundColor: "blue" });
  };
  return (
    <div className="App">
      <button onClick={hello} style={sty} className="btn">
        click me djfhdjf
      </button>
    </div>
  );
}

import React, { useEffect, useState } from "react";
// import React  from "react";

const StpWatch = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [timer, setTimer] = useState(0);
  const [control, setControl] = useState("stop");

  useEffect(() => {
    if (control === "running")
      setTimeout(() => {
        setTimer(timer + 1);
      }, 1000);
  }, [timer, control]);

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <div>
      <div className="buttons">
        {timer}
        <button className="Start"
          onClick={() => {
            setControl("running");
          }}
        >
          {" "}
          start
        </button>
        <button className="Stop"
        onClick={() => {
            setControl("running");
        }}
        >
        {" "}
        stop        
        </button>
      </div>
      </div>      
    </div>
  );
};

export default StpWatch;

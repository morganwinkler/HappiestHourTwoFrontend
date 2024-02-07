import axios from "axios";
import { useState, useEffect } from "react";
import { BarsIndex } from "./BarsIndex";

export function Content() {
  const [bars, setBars] = useState([]);

  const handleIndexBars = () => {
    console.log("handleIndexBars");
    axios.get("http://localhost:5188/bars").then((response) => {
      console.log(response.data);
      setBars(response.data);
    });
  };

  useEffect(handleIndexBars, []);

  return (
    <div>
      <BarsIndex bars={bars} />
    </div>
  );
}

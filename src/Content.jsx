import axios from "axios";
import { useState, useEffect } from "react";
import { BarsIndex } from "./BarsIndex";
import { BarNew } from "./BarNew";

export function Content() {
  const [bars, setBars] = useState([]);

  const handleIndexBars = () => {
    console.log("handleIndexBars");
    axios.get("http://localhost:5188/bars").then((response) => {
      console.log(response.data);
      setBars(response.data);
    });
  };

  const handleCreateBar = (item) => {
    console.log(`add item: ${JSON.stringify(item)}`);

    axios
      .post(
        "http://localhost:5188/bar",
        {
          name: item.name,
          specials: item.specials,
          location: item.location,
          imageUrl: item.imageUrl,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setBars([...bars, response.data]);
      });
  };

  useEffect(handleIndexBars, []);

  return (
    <div>
      <BarNew onCreate={handleCreateBar} />
      <BarsIndex bars={bars} />
    </div>
  );
}

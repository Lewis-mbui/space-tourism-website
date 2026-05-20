import { useState } from "react";
import data from "../data/data.json";
import type SpaceData from "../types/SpaceData";

const CrewPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const spaceData: SpaceData = data;

  const crew = spaceData.crew;
  const crewMember = crew[selectedIndex];

  return (
    <div>
      <div className="dot-indicators flex">
        {crew.map((c, index) => (
          <button
            aria-selected={selectedIndex === index ? "true" : "false"}
            onClick={() => setSelectedIndex(index)}
            className=""
            key={c.name}
          >
            <span className="sr-only">{c.name}</span>
          </button>
        ))}
      </div>
      <div>{crewMember.name}</div>
    </div>
  );
};

export default CrewPage;

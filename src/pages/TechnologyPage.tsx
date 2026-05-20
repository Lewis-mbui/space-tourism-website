import { useState } from "react";
import data from "../data/data.json";
import type SpaceData from "../types/SpaceData";

const TechnologyPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const spaceData: SpaceData = data;

  const technologies = spaceData.technology;
  const technology = technologies[selectedIndex];

  return (
    <div>
      <div className="number-indicators | flex">
        {technologies.map((t, index) => (
          <button
            aria-selected={selectedIndex === index ? "true" : "false"}
            onClick={() => setSelectedIndex(index)}
            className="fs-600 text-color text-white bg-dark"
            key={t.name}
          >
            {index + 1}
            <span className="sr-only">{t.name}</span>
          </button>
        ))}
      </div>
      <div>{technology.name}</div>
    </div>
  );
};

export default TechnologyPage;

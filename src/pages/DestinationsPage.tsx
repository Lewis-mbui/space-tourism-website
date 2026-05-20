import { useState } from "react";
import data from "../data/data.json";
import type SpaceData from "../types/SpaceData";

const DestinationsPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const spaceData: SpaceData = data;

  const destinations = spaceData.destinations;
  const destination = destinations[selectedIndex];

  return (
    <div>
      <div className="tab-list | underline-indicators flex">
        {destinations.map((d, index) => (
          <button
            aria-selected={selectedIndex === index ? "true" : "false"}
            onClick={() => setSelectedIndex(index)}
            className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2"
            key={d.name}
          >
            {d.name}
          </button>
        ))}
      </div>
      {destination.name}
    </div>
  );
};

export default DestinationsPage;

import { useState } from "react";
import data from "../data/data.json";
import type SpaceData from "../types/SpaceData";

const DestinationPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const spaceData: SpaceData = data;

  const destinations = spaceData.destinations;
  const destination = destinations[selectedIndex];

  return (
    <div className="grid-container grid-container--destination flow">
      <h1 className="numbered-title">
        <span aria-hidden={true}>01</span> Pick your destination
      </h1>
      <img src={destination.images.png} alt={destination.name} />
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
      <article className="destination-info">
        <h2 className="fs-800 uppercase ff-serif">{destination.name}</h2>
        <p>{destination.description}</p>
        <div className="destination-meta | flex">
          <div>
            <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
            <p className="ff-serif uppercase">{destination.distance}</p>
          </div>
          <div>
            <h3 className="text-accent fs-200 uppercase">Est. travel time </h3>
            <p className="ff-serif uppercase">{destination.travel}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default DestinationPage;

import { useState } from "react";
import data from "../data/data.json";
import type SpaceData from "../types/SpaceData";

const CrewPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const spaceData: SpaceData = data;

  const crew = spaceData.crew;
  const crewMember = crew[selectedIndex];

  return (
    <div className="grid-container grid-container--crew flow">
      <h1 className="numbered-title">
        <span aria-hidden={true}>02</span> Meet your crew
      </h1>
      <div
        className="dot-indicators flex"
        role="tablist"
        aria-label="Crew member list"
      >
        {crew.map((c, index) => (
          <button
            onClick={() => setSelectedIndex(index)}
            aria-selected={selectedIndex === index ? "true" : "false"}
            role="tab"
            aria-controls={`${crewMember.role}-tab`}
            key={c.name}
          >
            <span className="sr-only">{c.name}</span>
          </button>
        ))}
      </div>
      <article
        className="crew-details flow"
        role="tabpanel"
        id={`${crewMember.role}-tab`}
        tab-index={0}
      >
        <header className="flow flow--small">
          <h2 className="fs-600 ff-serif uppercase">{crewMember.role}</h2>
          <p className="fs-700 uppercase ff-serif">{crewMember.name}</p>
        </header>
        <p>{crewMember.bio}</p>
      </article>
      <picture>
        <source type="image/webp" srcSet={crewMember.images.webp} />
        <img src={crewMember.images.png} alt={crewMember.name} />
      </picture>
    </div>
  );
};

export default CrewPage;

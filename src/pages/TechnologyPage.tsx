import { useState } from "react";
import data from "../data/data.json";
import type SpaceData from "../types/SpaceData";

const TechnologyPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const spaceData: SpaceData = data;

  const technologies = spaceData.technology;
  const technology = technologies[selectedIndex];

  return (
    <div className="grid-container--tech | grid-container flow">
      <h1 className="numbered-title">
        <span>03</span> Space launch 101
      </h1>
      <div className="technology-content | grid">
        <div
          role="tablist"
          aria-label="Technology list"
          className="number-indicators | flex"
        >
          {technologies.map((t, index) => (
            <button
              onClick={() => setSelectedIndex(index)}
              className="fs-600 text-color text-white bg-dark"
              aria-selected={selectedIndex === index ? "true" : "false"}
              role="tab"
              aria-controls={`${t.name}-tab`}
              key={t.name}
            >
              {index + 1}
              <span className="sr-only">{t.name}</span>
            </button>
          ))}
        </div>
        <article
          id={`${technology.name}-tab`}
          role="tabpanel"
          className="technology-article | flow"
        >
          <header className="flow">
            <h2 className="fs-600 ff-serif uppercase text">
              The terminology...
            </h2>
            <p className="fs-700 uppercase ff-serif">{technology.name}</p>
          </header>
          <p>{technology.description}</p>
        </article>
      </div>

      <picture>
        <source media="(width >= 60em)" srcSet={technology.images.portrait} />
        <source media="(width >= 35em)" srcSet={technology.images.landscape} />
        <img src={technology.images.portrait} alt={technology.name} />
      </picture>
    </div>
  );
};

export default TechnologyPage;

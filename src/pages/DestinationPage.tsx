import { useRef, useState } from "react";
import data from "../data/data.json";
import type SpaceData from "../types/SpaceData";

const DestinationPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);
  let tabFocus = selectedIndex;

  const spaceData: SpaceData = data;

  const destinations = spaceData.destinations;
  const destination = destinations[selectedIndex];

  const changeTabFocus = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const rightKey = "ArrowRight";
    const leftKey = "ArrowLeft";

    if (!tabsRef.current) return;

    const tabsList = tabsRef.current.querySelectorAll('[role="tab"]');

    if (e.key === rightKey || e.key === leftKey) {
      tabsList[tabFocus].setAttribute("tabindex", "-1");

      if (e.key === rightKey) {
        tabFocus++;
        if (tabFocus >= tabsList.length) tabFocus = 0;
      } else if (e.key === leftKey) {
        tabFocus--;
        if (tabFocus < 0) tabFocus = tabsList.length - 1;
      }

      const nextTab = tabsList[tabFocus] as HTMLButtonElement;
      nextTab.tabIndex = 0;
      nextTab.focus();
    }
  };

  return (
    <div className="grid-container grid-container--destination flow">
      <h1 className="numbered-title">
        <span aria-hidden={true}>01</span> Pick your destination
      </h1>
      <picture>
        <source type="image/webp" srcSet={destination.images.webp} />
        <img src={destination.images.png} alt={destination.name} />
      </picture>
      <div
        onKeyDown={changeTabFocus}
        className="tab-list | underline-indicators flex"
        role="tablist"
        aria-label="destinations list"
        ref={tabsRef}
      >
        {destinations.map((d, index) => (
          <button
            onClick={() => setSelectedIndex(index)}
            aria-selected={selectedIndex === index ? "true" : "false"}
            aria-controls={`${d.name}-tab`}
            role="tab"
            className="uppercase ff-sans-cond text-accent letter-spacing-2"
            key={d.name}
            tabIndex={selectedIndex === index ? 0 : -1}
          >
            {d.name}
          </button>
        ))}
      </div>
      <article
        className="destination-info | flow"
        id={`${destination.name}-tab`}
        role="tabpanel"
        tab-index="0"
      >
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

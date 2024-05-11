import React, { useState, useEffect } from 'react';
import './SwitchInfo.scss';

const SwitchInfo = ({ entries }) => {
  const [currentEntryIndex, setCurrentEntryIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEntryIndex((prevIndex) => (prevIndex + 1) % entries.length);
    }, 7000); // 7 seconds

    return () => clearInterval(interval);
  }, [entries.length]);

  return (
    <>
      {entries.map((entry, index) => (
        <div
          key={index}
          className={`entry ${index === currentEntryIndex ? 'active' : ''}`}
        >
          <h2>{entry.title}</h2>
          <h3> {entry.head}</h3>
          {/* {entry.subtitles.map((subtitle, subtitleIndex) => (
            <h4 key={subtitleIndex}>{subtitle}</h4>
          ))} */}
        </div>
      ))}
    </>
  );
};

export default SwitchInfo;
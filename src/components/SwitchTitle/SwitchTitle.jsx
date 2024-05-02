import React, { useState, useEffect } from 'react';
import './SwitchTitle.scss';
import {motion} from 'framer-motion';

const SwitchTitle = ({ entries, className }) => {
  const [currentEntryIndex, setCurrentEntryIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEntryIndex((prevIndex) => (prevIndex + 1) % entries.length);
    }, 7000); // 7 seconds

    return () => clearInterval(interval);
  }, [entries.length]);

  return (
    <div className={className}>
      {entries.map((entry, index) => (       
            <motion.h1 key={index} className={`entryTitle ${index === currentEntryIndex ? 'active' : ''}`}>
              {entry}
            </motion.h1>
      ))}
    </div>
  );
      }

export default SwitchTitle;
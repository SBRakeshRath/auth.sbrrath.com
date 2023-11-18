import { motion } from "framer-motion";
import  { memo } from 'react'
import "./variant1.scss";
import { useLayoutEffect, useRef, useState } from "react";

const BackgroundAnimationVAriant = () => {
  const stringCount = 1; // Number of strings
  const stringDuration = 6; // Animation duration in seconds

  const [style, setStyle] = useState({ x: 0, y: 0 });
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (container == null || container.current == null) return;

    const cont = container.current;

    const height = cont.offsetHeight;
    // const width = cont.offsetWidth;
    // const x =

    setStyle({
      // x: Math.floor(Math.random() * (width - 0 + 1)) + 0,
      x: height - 1,
      y: Math.floor(Math.random() * (height - 0 + 1)) + 0,
    });
  }, []);
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const generateRandomPosition = () => {
    const x = Math.floor(Math.random() * style.x); // Random x position
    const y = Math.floor(Math.random() * style.y); // Random y position
    const color = getRandomColor();
    return { x, y, color };
  };

  return (
    <div className="backgroundAnimationVAriant1">
      <div className="random-string-animation">
        <motion.div
          className="random-string"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          ref={container}
        >
          {[...Array(stringCount)].map((_, index) => (
            <motion.span
              key={index}
              initial={{
                y: "100%",
                x: generateRandomPosition().x,
                backgroundColor: generateRandomPosition().color,
              }}
              animate={{
                y: "-100%",
                x: generateRandomPosition().x,
                backgroundColor: generateRandomPosition().color,
                transition: {
                  repeat: Infinity,
                  duration: stringDuration,
                  delay: Math.random() * stringDuration,
                },
              }}
              // style={generateRandomPosition()}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const BackgroundAnimationVAriant1 = memo(BackgroundAnimationVAriant)

export default BackgroundAnimationVAriant1;

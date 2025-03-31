import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useWindowTheme } from "../hooks/useTheme";
import BrushTexture4 from "./Textures/Texture4";
import BrushTexture2 from "./Textures/Texture2";

const Window = () => {
  const windowTheme = useWindowTheme(); // Get day/night theme based on SA time
  const sparklesRef = useRef<HTMLSpanElement[]>([]);
  const waveGroupRefs = useRef<SVGGElement[]>([]);
  const oceanRef = useRef<HTMLDivElement | null>(null);

  sparklesRef.current = [];

  useEffect(() => {
    if (sparklesRef.current.length) {
      gsap.set(sparklesRef.current, { opacity: 1 });

      gsap.to(sparklesRef.current, {
        opacity: 0,
        duration: 0.7,
        stagger: {
          each: 0.5,
          repeat: -1,
          yoyo: true,
        },
      });
    }

    waveGroupRefs.current.forEach((waveGroup, i) => {
      gsap.to(waveGroup, {
        x: "-50%",
        duration: 10 + i,
        repeat: -1,
        ease: "linear",
      });

      gsap.to(waveGroup, {
        y: 10, 
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  const sparkles = Array.from({
    length: windowTheme === "night" ? 50 : 15,
  }).map((_, i) => (
    <span
      key={i}
      ref={(el) => {
        if (el && !sparklesRef.current.includes(el)) {
          sparklesRef.current.push(el);
        }
      }}
      className="absolute rounded-xs"
      style={{
        width: "3px",
        height: "3px",
        backgroundColor: "white",
        opacity: windowTheme === "night" ? Math.random() : 0.1,
        top: `${Math.random() * 30}%`,
        left: `${Math.random() * 100}%`,
        zIndex: 10,
      }}
    />
  ));

  return (
    <div className="relative h-60 w-80 overflow-hidden">
      <div
        className={`absolute top-0 w-full h-1/3 transition-colors duration-700 ${
          windowTheme === "day"
            ? "bg-gradient-to-br from-sky-700 to-sky-200"
            : "bg-gradient-to-br from-blue-900 to-purple-700"
        }`}
      >
        <BrushTexture4 color="white" blendMode="screen" opacity={0.1} />
      </div>

      <div
        ref={oceanRef}
        className={`absolute bottom-0 w-full h-2/3 overflow-hidden transition-colors duration-700 ${
          windowTheme === "day"
            ? "bg-gradient-to-b from-sky-800 to-teal-500"
            : "bg-gradient-to-b from-blue-900 to-teal-800"
        }`}
      >
        <BrushTexture2
          color={windowTheme === "night" ? "#2E6F8E" : "#4EE7C3"}
          blendMode="soft-light"
          opacity={0.2}
        />
        <BrushTexture4
          color={windowTheme === "night" ? "#2C5783" : "#48FFC5"}
          blendMode="screen"
          opacity={0.05}
        />

        {sparkles}

        {[0, 1, 2].map((index) => (
          <svg
            key={index}
            className="absolute bottom-0 left-0 w-[200%] h-1/3"
            viewBox="0 0 1100 100"
            fill="none"
            style={{
              bottom: `${index * 25}px`,
              opacity: 0.3 - index * 0.1,
              transform: `translateX(${index * 5}px)`,
            }}
          >
            <g
              ref={(el) => {
                if (el && !waveGroupRefs.current.includes(el)) {
                  waveGroupRefs.current.push(el);
                }
              }}
            >
              <path
                d={`M${
                  index * -7
                },30 Q50,10 100,30 T200,30 T300,30 T400,30 T500,30 T600,30 T700,30 T800,30 T900,30 T1000,30
                   M1000,30 Q1050,10 1100,30 T1200,30 T1300,30 T1400,30 T1500,30 T1600,30`}
                stroke="white"
                strokeWidth="6"
                fill="transparent"
                className="absolute"
              />
            </g>
          </svg>
        ))}
      </div>
    </div>
  );
};

export default Window;

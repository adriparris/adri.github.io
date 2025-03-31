import React from "react";

interface BrushTextureProps {
  color?: string; 
  blendMode?: React.CSSProperties["mixBlendMode"];
  opacity?: number;
}

const BrushTexture5: React.FC<BrushTextureProps> = ({
  color = "#000000",
  blendMode = "multiply",
  opacity = 0.5,
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        inset: 0,
        // pointerEvents: "none",
      }}
    >
      <svg
        width="100%"
        height="100%"
        fill={color}
        viewBox="0 0 1302.32 909.62"
        preserveAspectRatio="none"
        style={{
          mixBlendMode: blendMode,
          opacity: opacity,
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        
      </svg>
    </div>
  );
};

export default BrushTexture5;

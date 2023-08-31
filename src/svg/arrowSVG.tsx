import React from "react";

export const ArrowSvg = ({  height = "6",
width = "11",
color = "#333333",
...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg width={width} height={height} viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.5 5.42949C5.386 5.43003 5.2766 5.38461 5.19649 5.30351L0.615271 0.722283C0.457586 0.553058 0.462238 0.289352 0.625795 0.125795C0.789352 -0.0377616 1.05306 -0.0424144 1.22228 0.115271L5.5 4.39299L9.77772 0.115271C9.94694 -0.0424144 10.2106 -0.0377616 10.3742 0.125795C10.5378 0.289352 10.5424 0.553058 10.3847 0.722283L5.80351 5.30351C5.7234 5.38461 5.614 5.43003 5.5 5.42949Z" fill={color}/>
  </svg>
  
  );
import React from "react";
import "./style.css";

import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

function Container() {
  return (
    <div className="flex">
      <div className="w-5/6 2xl:ml-80 md:ml-32 sm:ml-28 h-screen">
        <Canvas
          shadows
          camera={{
            fov: 55,
            near: 0.1,
            far: 200,
            position: [10, -2, 0],
            rotation: [0, 0, 45],
          }}
        >
          <Experience />
        </Canvas>
      </div>
    </div>
  );
}

export default Container;

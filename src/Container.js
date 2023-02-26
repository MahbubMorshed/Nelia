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
          camera={{ fov: 45, near: 0.1, far: 200, position: [2.5, 4, 6] }}
        >
          <Experience />
        </Canvas>
      </div>
    </div>
  );
}

export default Container;
// style={{ width: "100vw", height: "100vh" }}

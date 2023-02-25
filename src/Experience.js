import { OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
import Model from "./Model";

function Experience() {
  return (
    <>
      <color args={["#252771"]} attach="background" />

      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-normalBias={0.04}
      />

      <OrbitControls makeDefault />

      <Suspense>
        <Model />
      </Suspense>
    </>
  );
}

export default Experience;

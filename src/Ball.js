/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: creatureFab (https://sketchfab.com/3dCoast)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/baseball-ball-59f76178483b46aeac938ed9d4d2d9f2
title: baseball ball
*/

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

function Ball(props) {
  const ref = useRef();
  const { nodes, materials } = useGLTF("./baseball_ball.glb");
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8;
    ref.current.rotation.y = Math.sin(t / 4) / 8;
    ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20;
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });
  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.ball_Mat_ball_0.geometry}
              material={materials.Mat_ball}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={95.99}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.seam_Mat_ball_0.geometry}
              material={materials.Mat_ball}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

export default Ball;

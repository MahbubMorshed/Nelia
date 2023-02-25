import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

function Model(props) {
  const { nodes, materials } = useGLTF("./cube.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
      />
    </group>
  );
}

useGLTF.preload("./cube.glb");
export default Model;

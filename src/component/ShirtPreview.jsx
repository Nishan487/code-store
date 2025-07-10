import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Text } from "@react-three/drei";

function ShirtModel({ color, frontText, backText, textColor }) {
  const { scene } = useGLTF("/models/shirt.glb");
  const meshRef = useRef();

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.color.set(color);
    }
  });

  return (
    <group>
      <primitive object={scene} ref={meshRef} scale={10.5} />
      {frontText && (
        <Text
          position={[1.6, 1, 0]}
          rotation={[0, 1.5, 0]}
          fontSize={0.2}
          color={textColor}
          anchorX="center"
          anchorY="middle"
          curveRadius={-4}
        >
          {frontText}
        </Text>
      )}
      {backText && (
        <Text
          position={[-1.5, 2.5, -0.1]}
          rotation={[0, 4.73, 0]}
          fontSize={0.4}
          color={textColor}
          anchorX="center"
          anchorY="middle"
          curveRadius={-7}
        >
          {backText}
        </Text>
      )}
    </group>
  );
}

export default function ShirtPreview({ color, frontText, backText, textColor }) {
  return (
    <div style={{ width: "200px", height: "200px", margin: "10px auto" }}>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={2} />
        <directionalLight position={[3, 5, 2]} />
        <ShirtModel
          color={color}
          frontText={frontText}
          backText={backText}
          textColor={textColor}
        />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}


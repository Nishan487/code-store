import React, { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function PantModel({ color }) {
  const { scene } = useGLTF("/models/pants.glb");
  const meshRef = useRef();

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.color.set(color);
    }
  });

  return <primitive object={scene} ref={meshRef} scale={10.5} />;
}

export default function PantPreview({ color = "#1e90ff" }) {
  return (
    <div style={{ width: 200, height: 200 }}>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={2} />
        <directionalLight position={[3, 5, 2]} />
        <Suspense fallback={null}>
          <PantModel color={color} />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

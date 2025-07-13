import React, { useRef, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Pant({ color }) {
  const { scene } = useGLTF("/models/pants.glb");
  const meshRef = useRef();

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.color.set(color);
    }
  });

  return <primitive object={scene} ref={meshRef} scale={10.5} />;
}

export default function Pants() {
  const [pantColor, setPantColor] = useState("#1e90ff");
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    const newPant = {
      id: Date.now(),
      type: "pant",
      pantColor,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(newPant);
    localStorage.setItem("cart", JSON.stringify(existingCart));

    setAdded(true);
    alert("Pant added to cart!");
  };

  return (
    <div className="all">
      <div className="container">
        <h1>👖 Pant Customizer</h1>
        <form className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-4 w-full max-w-md">
          <div>
            <label
              htmlFor="pantsColorPicker"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Pants Color:
            </label>
            <div className="color-options">
  {[
    { name: 'Red', value: '#ff0000' },
    { name: 'Crimson', value: '#dc143c' },
    { name: 'Yellow', value: '#ffff00' },
    { name: 'Orange', value: '#ffa500' },
    { name: 'Green', value: '#008000' },
    { name: 'Blue', value: '#0000ff' },
  ].map((colorOption) => (
    <button
      type="button" // ✅ prevent form refresh
      key={colorOption.value}
      className={`color-swatch ${pantColor === colorOption.value ? 'selected' : ''}`}
      style={{ backgroundColor: colorOption.value }}
      onClick={() => setPantColor(colorOption.value)}
      aria-label={colorOption.name}
    />
  ))}
</div>

          </div>
        </form>
      </div>

      <div className="threed">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={20} />
          <directionalLight position={[50, 5, 1]} />
          <Suspense fallback={null}>
            <Pant color={pantColor} />
          </Suspense>
          <OrbitControls enableZoom={true} />
        </Canvas>

      </div>
    </div>
  );
}

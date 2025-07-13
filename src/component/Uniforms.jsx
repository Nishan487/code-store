
import React, { useRef, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF,Text } from "@react-three/drei";
import './Uniforms.css'
import Pants from "./pants";
import { useEffect } from "react";

function Shirt({ color,customText1,customText2,customTextColor}) {
  const { scene } = useGLTF("/models/shirt.glb");
   
  const meshRef = useRef();

  // Set material colorP
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.color.set(color);
    }
  });
 

  return (
  
    <group> {/* Use a group to hold the shirt and the text */}
  <primitive object={scene} ref={meshRef} scale={10.5} />
  {customText1&&(
    <Text
     position={[1.6, 1, 0]} // X, Y, Z coordinates (adjust these!)
          rotation={[0, 1.5, 0]}    // X, Y, Z rotation (adjust these for curving)
          fontSize={0.2}          // Size of the text
          color={customTextColor}           // Color of the text
          anchorX="center"        // Center the text horizontally
          anchorY="middle" // Center the text vertically
          curveRadius={-4}
    >{customText1}</Text>
   
  )}
    {customText2&&(
    <Text
     position={[-1.5, 2.5, -0.1]} // X, Y, Z coordinates (adjust these!)
          rotation={[0,4.73, -0]}    // X, Y, Z rotation (adjust these for curving)
          fontSize={0.4}          // Size of the text
          color={customTextColor}           // Color of the text
          anchorX="center"        // Center the text horizontally
          anchorY="middle" // Center the text vertically
          curveRadius={-7}
    >{customText2}</Text>
    )}
   </group>
    
   
  );
}

export default function uniforms() {
  const [shirtColor, setShirtColor] = useState("#e6ebf0ff");
  const [shirtFrontText, setShirtFrontText]=useState('')
    const [shirtBackText, setShirtBackText]=useState('school chaun mavi')
  const [shirtTextColor, setShirtTextColor]=useState("#1e90ff");
  const [pantColor, setPantColor] = useState("#ff691eff");
    // New state for the simulated cart
  const [cartItems, setCartItems] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false); // State to control modal visibility
   const [currentPage, setCurrentPage] = useState('customizer');
  const [addedOnce, setAddedOnce] = useState(false);
 useEffect(() => {
  alert(
    "🎨 Welcome! Customize your uniform and add it to the cart.\n\n" +
    "We apologize for the limited 3D uniform options currently available. " +
    "Due to time constraints, the developer couldn't make it perfect yet.\n\n" +
    "Also, the colors might not look exactly as you pick because of the 3D model's real texture, " +
    "but we tried our best to make it work a little bit. Thank you for your understanding!,"+
    "Please select both shirt and pant colors before adding to cart."
  );
}, []);


  useEffect(() => {
    // Check localStorage on mount to see if uniform was added before
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const uniformExists = cart.some(item => item.type === "uniform");
    if (uniformExists) {
      setAddedOnce(true);
    }
  }, []);
const handleAddToCart = () => {
   if (addedOnce) return;
  const newUniform = {
    id: Date.now(),      // unique id on every add
    type: "uniform",
    shirtColor,
    shirtFrontText,
    shirtBackText,
    shirtTextColor,
    pantColor,
  };

  const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
  existingCart.push(newUniform); // add new uniform item each time
  localStorage.setItem("cart", JSON.stringify(existingCart));
  setAddedOnce(true);
  alert("Uniform added to cart!");
};



  const handleRemoveFromCart = (id) => {
  setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
};

   const goToCustomizer = () => {
    setCurrentPage('customizer');
  };

  // Conditional rendering based on the currentPage state

  return (
    <div className="all">
    <div className="container">
      <h1 >👕 Uniform Customizer</h1>
         <form className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-4 w-full max-w-md">
        {/* Shirt Color Picker */}
        <div>
  <label className="block text-lg font-semibold text-gray-700 mb-2">
    Shirt Color:
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
      type="button"
        key={colorOption.value}
        className={`color-swatch ${shirtColor === colorOption.value ? 'selected' : ''}`}
        style={{ backgroundColor: colorOption.value }}
        onClick={() => setShirtColor(colorOption.value)}
        aria-label={colorOption.name}
      />
    ))}
  </div>
</div>
         <div>
          <label htmlFor="textColorPicker" className="block text-lg font-semibold text-gray-700 mb-2">
            Text Color:
          </label>
       <input
        type="color"
        value={shirtTextColor}
        onChange={(e) => setShirtTextColor(e.target.value)}
        className="colorpicker"
      />
      </div>
      {/* Text input */}
       <div>
          <label htmlFor="shirtTextInput" className="block text-lg font-semibold text-gray-700 mb-2">
            Custom Front Text:
          </label>
      <input 
      type="text"
      value={shirtFrontText}
      onChange={(e)=>setShirtFrontText(e.target.value)}
      maxLength={14}
      placeholder="Enter the text for shirt"
      className="my-input"

      />
      <h7>*Please insert only 14 elemennt</h7>
      </div>
      <div>
          <label htmlFor="shirtTextInput" className="block text-lg font-semibold text-gray-700 mb-2">
            Custom Back Text:
          </label>
      <input 
      type="text"
      value={shirtBackText}
      onChange={(e)=>setShirtBackText(e.target.value)}
      maxLength={22}
      placeholder="Enter the text for shirt"
      className="my-input"
      />
      <h7>*Please insert only 20 element</h7>
      </div>
      </form>

      {/* 🧩 3D Viewer */}
  
    </div>
        <div className="threed">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={150} />
          <directionalLight position={[50, 5, 1]} />
        <Suspense fallback={null}>
            <Shirt color={shirtColor}  customText1={shirtFrontText} customText2={shirtBackText}  customTextColor={shirtTextColor}/>
          </Suspense>
          <OrbitControls enableZoom={true} />
        

        </Canvas>
          {/* <button
            type="button" // Important: use type="button" to prevent form submission
            onClick={handleAddToCart}
            className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-bold text-lg
                       hover:bg-blue-700 transition-colors duration-300 shadow-md
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Add to Cart ({cartItems.length})
          </button> */}
          <div className="btn">
           <button
        onClick={handleAddToCart}
        disabled={addedOnce}
        style={{
          backgroundColor: addedOnce ? "gray" : "#1e90ff",
          color: "white",
          cursor: addedOnce ? "not-allowed" : "pointer",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          marginTop: "20px",
        }}
      >
        {addedOnce ? "You will get only one chance to buy" : "Add to Cart"}
      </button>
      <p className="onechance">*you have only one chance</p>
      </div>
         
      </div>
      <div className="hehe">
        <Pants className="pant"/>
      </div>
    </div>
  );
}

import React from "react";
import './About.css'
export default function About() {
  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto", padding: "1rem", fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}>
      <h1>About CodeStore University Uniform & ID Customizer</h1>
      <p>
        Welcome to CodeStore! This platform is designed to help students
        easily customize and order their school uniforms and student ID cards
        online.
      </p>
      <p>
        Using our 3D uniform customizer, you can pick shirt and pant colors,
        add custom text, and preview your uniform in real-time before adding it
        to your cart.
      </p>
      <p>
        For ID cards, you can enter your personal details, upload your photo,
        and design your card effortlessly.
      </p>
      <p>
        We are continuously working on improving the 3D models and user
        experience, so stay tuned for more exciting updates!
      </p>
      <p>
        Thank you for choosing CodeStore — your one-stop shop for school
        essentials made easy.
      </p>
      <b> Meet our developer team:
      </b>
      <a href="https://www.facebook.com/nishan.baskota.90"><img src="10464408.png" className="png"></img></a>
      <a href="https://github.com/Nishan487"><img src="github.jpg" className="jpg"></img></a>
      <hr />
      <p style={{ fontSize: "0.9rem", color: "#555" }}>
        © 2025 CodeStore University. All rights reserved.
      </p>
    </div>
  );
}

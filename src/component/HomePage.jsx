import React from 'react';
import './HomePage.css'; // Import the CSS file
  import { FaPenFancy } from "react-icons/fa";
import { PiShirtFoldedLight } from "react-icons/pi";
import { FaBookOpen } from "react-icons/fa";
import About from './About';
const HomePage = ({ setActiveCategory }) => {
    return (
        <div className='all'>
        <div className="homepage-container">
            <h2 className="homepage-title">Welcome to CodeStore!</h2>
            <p className="homepage-description">
                Your one-stop shop for premium, customizable student essentials.
                Personalize your uniforms, stationery, and ID cards with ease!
            </p>

            <div className="category-grid">
                {/* Uniforms Section */}
                <div className="category-card uniform-card">
                    <PiShirtFoldedLight className='category-icon text-blue-600'/>
                    
                    <h3 className="category-title">Custom Uniforms</h3>
                    <p className="category-description">
                        Design your perfect school uniform with custom colors and styles.
                    </p>
                    <button
                        className="customize-button"
                        onClick={() => setActiveCategory('uniform')}
                    >
                        Customize Now!
                    </button>
                </div>

                {/* Pens & Copies Section */}
                <div className="category-card stationery-card">
                    <div className="twologo">
                    <FaPenFancy className="category-icon text-green-600" />
                   <FaBookOpen className="category-icon text-green-600"/>
                   </div>
                    <h3 className="category-title">Personalized Stationery</h3>
                    <p className="category-description">
                        Add your name or a motivational quote to pens and copies.
                    </p>
                    <button
                        className="customize-button"
                        onClick={() => setActiveCategory('stationery')}
                    >
                        Customize Now!
                    </button>
                </div>

                {/* ID Cards Section */}
                <div className="category-card idcard-card">
                    <div className="category-icon text-purple-600">
                        {/* Simple ID Card SVG Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
                            <path d="M16 3h-8a2 2 0 00-2 2v2h12V5a2 2 0 00-2-2z" />
                            <circle cx="12" cy="12" r="3" />
                            <path d="M6 18h12" />
                        </svg>
                    </div>
                    <h3 className="category-title">Custom ID Cards</h3>
                    <p className="category-description">
                        Enter your details and preview your official student ID card.
                    </p>
                    <button
                        className="customize-button"
                        onClick={() => setActiveCategory('idcard')}
                    >
                        Customize Now!
                    </button>
                </div>
            </div> 

        </div>
        <div className='about'>
        <About/>
        </div>
    </div>
    );
};

export default HomePage;
import React, { useState } from 'react'; // Import useState
import './BookStyleStationeryPage.css'; // Import the CSS for this page

function BookStyleStationeryPage({ initialHeadline = "My Headline", children }) {
  const [headline, setHeadline] = useState(initialHeadline); // State for the editable headline

  const handleHeadlineChange = (event) => {
    setHeadline(event.target.value);
  };

  // Simple function to generate lines, you can adjust count
  const renderLines = (count) => {
    const lines = [];
    for (let i = 0; i < count; i++) {
      lines.push(<div key={i} className="book-page-line"></div>);
    }
    return lines;
  };

  return (
    <div className="book-page-container">
      <div className="book-page">
        {/* Header section with an editable input for the headline */}
        <div className="book-page-header">
          <input
            type="text"
            className="book-page-headline-input"
            value={headline}
            onChange={handleHeadlineChange}
            placeholder="Type your headline here..."
            aria-label="Page Headline"
          />
          {/* Optional: Display current date */}
          <p className="book-page-date">
            {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="book-page-content">
          {/* Render lines */}
          {renderLines(20)} {/* Adjust the number of lines */}

          {/* Any static content you pass as children will appear here */}
          {children}

          {/* Optional: Placeholder for the main note area if no children are provided */}
          {!children && (
            <p className="placeholder-text-body">
              This area is for your notes or static content.
            </p>
          )}
        </div>

        {/* Optional: Footer section for page numbers or subtle branding */}
        <div className="book-page-footer">
          {/* <p className="page-number">- 1 -</p> */}
        </div>
      </div>
    </div>
  );
}

export default BookStyleStationeryPage;
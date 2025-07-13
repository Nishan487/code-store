import React, { useState } from 'react'

const BookStyleStationeryPage = () => {
  const [customText , setCustomText]=useState('enter your name');
  const [stationeryColor, setStationeryColor] = useState('#BD10E0');
   const stationeryColors = ['#BD10E0', '#F8E71C', '#9013FE', '#417505', '#000000', '#FFFFFF'];
  return (
    <div> 
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      <section className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-2xl font-bold text-indigo-600 mb-6">Pens & Copies</h2>
          <div className="w-full max-w-xs mb-6">
            <div
              className="w-full h-1000 rounded-lg shadow-inner flex flex-col items-center justify-center p-4 transition-all duration-300 ease-in-out relative overflow-hidden"
              style={{ backgroundColor: stationeryColor }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-10 rounded-lg"></div>
              <p
                className="text-white text-xl font-bold text-center break-words px-2 relative z-10"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
              >
                {customText}
              </p>
            </div>
            <p className="text-center text-sm text-gray-500 mt-2">Preview of your personalized item</p>
          </div>

          <div className="w-full mb-4">
            <label htmlFor="customText" className="block text-sm font-medium text-gray-700 mb-2">
              Add your custom text:
            </label>
            <input
              type="text"
              id="customText"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              maxLength="50"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
              placeholder="e.g., 'Dream Big', 'My Name'"
            />
            <p className="text-xs text-gray-500 mt-1 text-right">{customText.length}/50 characters</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {stationeryColors.map((color) => (
              <button
                key={color}
                onClick={() => setStationeryColor(color)}
                className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-indigo-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                style={{ backgroundColor: color, borderColor: stationeryColor === color ? '#4F46E5' : '#D1D5DB' }}
                aria-label={`Select stationery color ${color}`}
              />
            ))}
          </div>
          <p className="text-sm text-gray-600">Choose your item color:</p>
        </section>
        </main>
        </div>
  )
}

export default BookStyleStationeryPage
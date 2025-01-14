import React from "react";

const About = () => (
  <div className="bg-gradient-to-r from-green-400 to-blue-500 min-h-screen text-white">
    {/* Hero Section */}
    <div
      className="flex items-center justify-center h-96 bg-cover bg-center"
      style={{ backgroundImage: 'url("https://via.placeholder.com/1600x900")' }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
        <h1 className="text-5xl font-extrabold leading-tight mb-4">
          Welcome to Marcelo's About Us Page!
        </h1>
      </div>
    </div>

    {/* Mission Section */}
    <div className="py-16 bg-white text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-10">
        About sa akong self{" "}
      </h2>
      <div className="max-w-3xl mx-auto text-center px-6">
        <p className="text-lg leading-relaxed mb-6">
          Im Happy to see you at my page! Collab me
        </p>
        <p className="text-lg leading-relaxed">
          I believe that through collaboration, determination, and a positive
          mindset, anything is possible. Our approach is customer-centric and
          aims at creating long-lasting relationships
        </p>
      </div>
    </div>

    {/* Footer Section */}
    <footer className="bg-black text-white py-6 mt-16 text-center">
      <p className="text-lg font-medium">
        Thank you for learning more about us! We're here to make a difference.
        🌟
      </p>
    </footer>
  </div>
);

export default About;

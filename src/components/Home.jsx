import React from "react";

const Home = () => (
  <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen text-white">
    {/* Hero Section */}
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("https://via.placeholder.com/1600x900")' }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
        <h1 className="text-5xl font-extrabold leading-tight mb-4">
          Welcome to Marcelo's Amazing Home Page!
        </h1>
        <p className="text-xl mb-6">
          Explore a world of creativity and innovation. Check out what we have
          to offer.
        </p>
      </div>
    </div>

    {/* Fun Animation Section */}
    <div className="py-16 bg-gray-800 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">Let’s Have Fun!</h2>
      <div className="flex justify-center">
        <div className="bg-white p-12 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 ease-in-out">
          <p className="text-3xl font-bold text-gray-800">
            E hover ko bai og gwapo ka ! 🎉
          </p>
        </div>
      </div>
    </div>

    {/* Footer Section */}
    <footer className="bg-black text-white py-6 mt-16 text-center">
      <p className="text-lg font-medium">
        Thanks for visiting Marcelo's Amazing Home Page. See you soon! ✨
      </p>
    </footer>
  </div>
);

export default Home;

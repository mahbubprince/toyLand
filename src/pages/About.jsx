import React from "react";

const About = () => {
  return (
    <div className="bg-linear-to-b from-blue-50 to-blue-100 min-h-screen py-12 px-4">
      {/* Hero Section */}
      <title>ToyLand-About</title>
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          About ToyLand
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          ToyLand is your one-stop online marketplace for kids’ toys. We connect
          families with local toy sellers, helping children explore, create, and play safely.
        </p>
      </div>

      {/* Mission / Features Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition duration-300">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Safe & Tested</h3>
          <p className="text-gray-600">
            Every toy meets strict safety standards and is parent-approved.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition duration-300">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Support Local</h3>
          <p className="text-gray-600">
            Purchases support local toy makers and small businesses in your community.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition duration-300">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Eco Friendly</h3>
          <p className="text-gray-600">
            Our toys use sustainable, non-toxic materials to protect our planet.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Team Member */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
            <img
              src="https://i.pravatar.cc/150?img=1"
              alt="Team member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Alice Johnson</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
            <img
              src="https://i.pravatar.cc/150?img=2"
              alt="Team member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Michael Lee</h3>
            <p className="text-gray-600">Product Manager</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
            <img
              src="https://i.pravatar.cc/150?img=3"
              alt="Team member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Sophia Davis</h3>
            <p className="text-gray-600">Marketing Lead</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-3xl mx-auto text-center mt-16">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">
          Join ToyLand Today!
        </h2>
        <p className="text-gray-700 mb-6">
          Discover amazing toys, support local sellers, and make playtime magical.
        </p>
        <a
          href="/register"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-md"
        >
          Create Your Account
        </a>
      </div>
    </div>
  );
};

export default About;

import React from "react";

const AllToy = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition duration-300">
  <img
    src="https://cdn.pixabay.com/photo/2016/03/31/20/11/lego-1297582_1280.png"
    alt="toy"
    className="w-full h-40 object-cover rounded-md mb-3"
  />
  <h3 className="text-lg font-semibold text-gray-800">Lego Classic Bricks</h3>
  <p className="text-blue-600 font-medium mt-1">$49.99</p>
  <p className="text-yellow-500 mt-1">⭐ 4.7</p>
  <p className="text-gray-600 text-sm mt-1">Quantity: 75</p>
  <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
    View More
  </button>
</div>

  );
};

export default AllToy;

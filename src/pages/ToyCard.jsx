import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";
import { Link } from "react-router";

const ToyCard = ({ toy }) => {
  const { thumbnail, toyName, rating, availableQuantity, price } = toy;
console.log(toy)
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={thumbnail}
          alt={toyName}
          className="w-full h-56 object-cover"
        />
        <span className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-lg shadow">
          ⭐ {rating}
        </span>
      </div>

      {/* Card content */}
      <div className="p-5 flex flex-col justify-between h-44">
        <h3 className="text-lg font-bold text-gray-800 line-clamp-2 mb-1">
          {toyName}
        </h3>

        <p className="text-sm text-gray-500 mb-2">
          Available:{" "}
          <span className="font-semibold text-gray-700">
            {availableQuantity}
          </span>
        </p>

        <div className="flex items-center justify-between mt-auto">
          <p className="text-xl font-bold text-blue-600">${price}</p>

          <div>
            <Link
              to={`/toydetailes/${toy.id}`}
              className="flex items-center gap-2 bg-linear-to-r from-blue-500 to-indigo-600 text-white font-semibold px-4 py-2 rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <ShoppingCart size={18} />
              Buy now
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ToyCard;

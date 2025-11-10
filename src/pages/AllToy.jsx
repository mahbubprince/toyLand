import { Link, useLoaderData } from "react-router";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { AuthContext } from "../Context/AuthContext";

const AllToy = () => {
  const popularToys = useLoaderData(); // Loaded from PopularToys.json
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section className="w-11/12 mx-auto px-4 py-10">
      {/* Animated heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        // className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-md"
      >
        {/* All toys */}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {popularToys.map((toy, i) => (
          <motion.div
            key={toy.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            {/* Animated image zoom on hover */}
            <div className="relative h-56 w-full overflow-hidden group">
              <motion.img
                src={toy.pictureURL}
                alt={toy.toyName}
                className="w-full h-full object-cover rounded-t-2xl"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              <span className="absolute top-3 left-3 bg-yellow-400 text-black px-2 py-1 rounded-md font-semibold flex items-center gap-1">
                <Star size={14} /> {toy.rating}
              </span>
            </div>

            <div className="p-5 flex flex-col justify-between flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {toy.toyName}
              </h3>
              <p className="text-[16px] text-gray-600 mb-3">
                {toy.description}
              </p>

              <p className="text-sm text-gray-600 mb-1">
                Available:{" "}
                <span className="font-semibold text-gray-800">
                  {toy.availableQuantity}
                </span>
              </p>

              <p className="text-lg font-bold text-blue-600 mb-3">
                ${toy.price}
              </p>
           
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                
              >
                <div className="bg-linear-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-xl font-semibold shadow-md hover:shadow-lg transition-transform duration-200">
                  <Link to={`/toydetailes/${toy.toyId}`}>View More</Link>
                </div>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AllToy;

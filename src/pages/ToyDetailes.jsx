import { useLoaderData, useParams } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const ToyDetails = () => {
  const toy = useLoaderData();
  const { toyId } = useParams();
  const [toyDet, setToyDet] = useState(null);

  useEffect(() => {
    if (toy && toyId) {
      const foundToy = toy.find((singleToy) => singleToy.toyId == toyId);
      setToyDet(foundToy);
    }
  }, [toy, toyId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("🎉 Thank you! We'll contact you soon.");
  };

  if (!toyDet) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-60"></div>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      {/* Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-linear-to-br from-white via-blue-50 to-indigo-50 rounded-3xl shadow-2xl overflow-hidden mb-12 border border-gray-100 flex flex-col md:flex-row"
      >
        {/* Image */}
        <div className="md:w-1/2 relative group">
          <img
            src={toyDet.pictureURL}
            alt={toyDet.toyName}
            className="w-full h-full object-cover md:h-[500px] transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow">
            <Star size={14} /> {toyDet.rating}
          </span>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col justify-between md:w-1/2">
          <div>
            <h2 className="text-4xl font-bold text-indigo-700 mb-3">
              {toyDet.toyName}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {toyDet.description}
            </p>

            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <p>
                <strong>Seller:</strong> {toyDet.sellerName}
              </p>
              <p>
                <strong>Email:</strong> {toyDet.sellerEmail}
              </p>
              <p>
                <strong>Category:</strong> {toyDet.subCategory}
              </p>
              <p>
                <strong>Available:</strong> {toyDet.availableQuantity}
              </p>
            </div>

            <p className="text-3xl font-extrabold text-blue-600 mt-5">
              ${toyDet.price}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Try Now Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-xl p-8 text-white max-w-xl mx-auto"
      >
        <h3 className="text-3xl font-semibold text-center mb-6">
          🚀 Try This Toy Now!
        </h3>
        <form
          onSubmit={handleSubmit}
          className="space-y-5 flex flex-col justify-center"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-white outline-none transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-white outline-none transition-all"
          />
          <button
            type="submit"
            className="w-full bg-white text-indigo-700 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            Try Now
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ToyDetails;

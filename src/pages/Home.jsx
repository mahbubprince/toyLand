import { Link, useLoaderData } from "react-router";
import Slider from "../others/Slider";
import ToyCard from "./ToyCard";

const Home = () => {
  const data = useLoaderData();
//   console.log(data);

  return (
    <>
      <div className="container mx-auto">
        <Slider></Slider>
      </div>

      <section className="w-11/12 mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mt-12 mb-16 bg-linear-to-r from-orange-500 via-yellow-300 to-red-500 bg-clip-text text-transparent drop-shadow-md tracking-tight">
          🌟 Popular Toys
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((toy) => (
            <ToyCard key={toy.id} toy={toy} />
          ))}
        </div>
      </section>
      <button className="m-16 flex justify-center mx-auto mt-8 px-6 py-3 bg-linear-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
        <Link to="/allToy">Show More</Link>{" "}
      </button>
    </>
  );
};

export default Home;

import { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";
// import { useLocation } from "react-router";

const Myprofile = () => {
    // const location =useLocation()
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = async () => {
    // e.preventDefault();

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });

      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("❌ Failed to update profile: " + error.message);
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center mb-8 bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        My Profile
      </h2>

      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
        <img
          src={photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
          alt="User"
          className="w-40 h-40 rounded-full object-cover border-4 border-indigo-500 shadow-md"
        />

        <div className="flex-1 space-y-3">
          <p className="text-lg">
            <strong>Name:</strong> {user?.displayName || "N/A"}
          </p>
          <p className="text-lg">
            <strong>Email:</strong> {user?.email || "N/A"}
          </p>
        </div>
      </div>

      <form
        onSubmit={handleUpdate}
        className="bg-linear-to-r from-blue-50 to-indigo-50 mt-8 rounded-2xl shadow-md p-6 max-w-lg mx-auto space-y-4"
      >
        <h3 className="text-2xl font-semibold text-center text-indigo-700 mb-2">
          Edit Profile
        </h3>

        <input
          type="text"
          placeholder="Update Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
        />

        <input
          type="text"
          placeholder="Update Photo URL"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
        />

        <button
          type="submit"
          className="w-full bg-linear-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-md"
        >
          Save Changes
        </button>
      </form>
    </section>
  );
};

export default Myprofile;

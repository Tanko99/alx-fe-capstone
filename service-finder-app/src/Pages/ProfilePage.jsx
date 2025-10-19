import { useState } from "react";
import useServiceStore from "../components/serviceStore";
import { UserCircle, Edit, Save, X } from "lucide-react";

function ProfilePage() {
  const { currentUser, users, set, registerUser } = useServiceStore();
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState(currentUser || {});
  const [imagePreview, setImagePreview] = useState(
    currentUser?.profileImage || null
  );

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // Handle profile image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      setProfile({ ...profile, profileImage: file });
    }
  };

  // Save updated info
  const handleSave = () => {
    const updatedUsers = users.map((user) =>
      user.email === currentUser.email ? profile : user
    );

    // Persist updates
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify(profile));

    setEditMode(false);
    alert("Profile updated successfully!");
  };

  if (!currentUser)
    return (
      <div className="min-h-screen flex justify-center items-center bg-black text-gray-300">
        <p>Please log in to view your profile.</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-black text-gray-100 px-6 py-12 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-gray-900 rounded-2xl shadow-lg p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="relative">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-green-500"
              />
            ) : (
              <UserCircle className="w-32 h-32 text-gray-500" />
            )}

            {editMode && (
              <label className="absolute bottom-2 right-2 bg-green-600 hover:bg-green-700 text-white p-2 rounded-full cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <Edit size={18} />
              </label>
            )}
          </div>

          {/* Info Section */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-1 text-green-400">
              {profile.name}
            </h2>
            <p className="text-gray-400 mb-4">{profile.email}</p>

            {!editMode ? (
              <>
                <p>
                  <span className="font-semibold text-gray-300">Role:</span>{" "}
                  {profile.role}
                </p>
                <p>
                  <span className="font-semibold text-gray-300">Service:</span>{" "}
                  {profile.serviceType || "—"}
                </p>
                <p>
                  <span className="font-semibold text-gray-300">Location:</span>{" "}
                  {profile.location || "—"}
                </p>
                <p>
                  <span className="font-semibold text-gray-300">Contact:</span>{" "}
                  {profile.contact || "—"}
                </p>
              </>
            ) : (
              <form className="space-y-3">
                <input
                  type="text"
                  name="name"
                  value={profile.name || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 rounded-md p-2 text-white"
                  placeholder="Full Name"
                />
                <input
                  type="text"
                  name="serviceType"
                  value={profile.serviceType || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 rounded-md p-2 text-white"
                  placeholder="Service Type"
                />
                <input
                  type="text"
                  name="location"
                  value={profile.location || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 rounded-md p-2 text-white"
                  placeholder="Location"
                />
                <input
                  type="text"
                  name="contact"
                  value={profile.contact || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 rounded-md p-2 text-white"
                  placeholder="Contact Info"
                />
              </form>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end gap-4">
          {!editMode ? (
            <button
              onClick={() => setEditMode(true)}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md font-semibold"
            >
              <Edit size={18} /> Edit Profile
            </button>
          ) : (
            <>
              <button
                onClick={handleSave}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md font-semibold"
              >
                <Save size={18} /> Save
              </button>
              <button
                onClick={() => {
                  setProfile(currentUser);
                  setEditMode(false);
                }}
                className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-md font-semibold"
              >
                <X size={18} /> Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

// src/components/Navbar.jsx
import { signOut } from "firebase/auth"; // Firebase signOut
import { auth } from "../firebaseConfig"; // Firebase config
import { useAuthState } from "react-firebase-hooks/auth"; // Hook to track authentication state
import { useNavigate } from "react-router-dom"; // Navigation for redirect

export default function Navbar() {
  const [user] = useAuthState(auth); // Get the current user if logged in
  const navigate = useNavigate(); // For navigation

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth); // Firebase signOut method
      navigate("/login"); // Redirect to login page after sign-out
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="bg-indigo-600 p-4">
      <div className="flex justify-between items-center">
        <span className="text-white font-bold text-lg">Your App</span>

        {user && ( // If the user is logged in, show only the logout button
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

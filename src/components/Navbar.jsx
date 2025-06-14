import React, { useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/features/auth/AuthSlice";
import { setSearchTerm } from "../redux/features/products/ProductSlice";
function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const AuthValid =
    location.pathname === "/login" || location.pathname === "/register";

  const logoutuser = () => {
    dispatch(logout());
    toast.success("Logged out successfully");
    navigate("/");
  };

  const [showModal, setShowModal] = useState(false);

  const user = useSelector((state) => state.auth.user);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 10px 20px 10px ",
        backgroundColor: "rgb(1, 119, 251)",
        borderBottom: "1px solid #dee2e6",
        height: "80px",
      
       
      

      }}
    >
      <div
        onClick={() => navigate("/")}
        style={{ fontSize: "24px", fontWeight: "bold", cursor: "pointer" }}
      >
        Mybilder
      </div>

      {!AuthValid && (
        <>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            style={{
              padding: "6px 12px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "14px",
            }}
          />

          <div style={{ display: "flex", gap: "15px", alignItems: "center",fontSize: "18px" }}>
            <Link
              to="/admindashboard"
              style={{ textDecoration: "none", color: "#333" }}
            >
              <span> admin</span>
            </Link>
            <Link to="/blogs" style={{ textDecoration: "none", color: "#333" }}>
              blogs
            </Link>
            <Link
              to="/allusers"
              style={{ textDecoration: "none", color: "#333" }}
            >
              {/* cicd(test) */}
            </Link>
            {/* <Link to="/cart" style={{ textDecoration: "none", color: "#333" }}>
              Cart
            </Link> */}
            <button
              onClick={() => navigate("/dashboard")}
              style={{
                background: "none",
                border: "none",
                color: "#333",
                cursor: "pointer",
              }}
            >
              Profile
            </button>
            {/* {showModal && (
          <div
            style={{
              position: "absolute",
              top: "60px",
              right: "20px",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h4>Profile Modal</h4>
            <p>User details go here.</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        )} */}
            <button
              onClick={logoutuser}
              style={{
                backgroundColor: "#dc3545",
                color: "#fff",
                borderRadius: "5px",
                padding: "5px 10px",
              }}
            >
              Logout
            </button>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;

import React from "react";
import { FaUtensils } from "react-icons/fa";

const SignInPage = () => {
  const handleSignIn = () => {
    // Add your sign-in logic here
    console.log("Signing in...");
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        color: "black",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "300px", textAlign: "center" }}>
        <h1>
          <FaUtensils size={40} style={{ marginBottom: "10px" }} />
          Recipe Central
        </h1>
        <form>
          <input
            type="email"
            placeholder="Email"
            style={{ marginBottom: "10px", padding: "8px" }}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            style={{ marginBottom: "20px", padding: "8px" }}
          />
          <br />
          <button
            type="submit"
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;

import React from "react";
import { ReactNavbar } from "react-responsive-animate-navbar";
import HomePage from './pages/HomePage.js';

function App() {
  return (
    <div>
      <ReactNavbar
        color="rgb(25, 25, 25)"
        logo="logo192.png"
        menu={[
          { name: "HOME", to: "/" },
          { name: "ARTICLES", to: "/articles" },
          { name: "ABOUT ME", to: "/about" },
          { name: "CONTACT", to: "/contact" },
        ]}
        social={[
          {
            name: "Linkedin",
            url: "https://www.google.com",
            icon: ["fab", "linkedin-in"],
          },
          {
            name: "Facebook",
            url: "https://www.google.com",
            icon: ["fab", "facebook-f"],
          },
          {
            name: "Instagram",
            url: "https://www.google.com",
            icon: ["fab", "instagram"],
          },
          {
            name: "Twitter",
            url: "https://www.google.com",
            icon: ["fab", "twitter"],
          },
        ]}
      />

      <HomePage />
    </div>
  );
}

export default App;

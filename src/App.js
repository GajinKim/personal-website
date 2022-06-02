import React from "react";
import { ReactNavbar } from "react-responsive-animate-navbar";
import HomePage from './pages/HomePage.js';

function App() {
  return (
    <div>
      <ReactNavbar
        color="rgb(25, 25, 25)"
        logo="https://cdn.vox-cdn.com/thumbor/z9OFvvaKHpR642zqr6rC_qoBqOY=/1400x1050/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/22010347/Screen_Shot_2020_11_03_at_2.08.39_PM.png"
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

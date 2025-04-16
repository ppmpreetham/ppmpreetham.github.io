import React from "react";
import WorkPage from "@/components/WorkPage";

const Renders = () => {
  return (
    <div className="w-screen">
      <div className="text-6xl w-full p-4 font-murmure">Renders</div>
      <div>
        <p className="text-2xl w-full p-4 font-helvetica">
          I am a 3D artist and I love to create 3D models and animations. I have
          been working with Blender for over 6 years.
        </p>
      </div>
      <div className="h-[25vh]"></div>
      <WorkPage
        images={[
          {
            src: "https://github.com/ppmpreetham/ppmpreetham.github.io/raw/refs/heads/main/portfolio/public/images/renders/batmobile.mp4",
            scale: 4,
            type: "vid",
            muted: false,
          },
          {
            src: "https://raw.githubusercontent.com/ppmpreetham/ppmpreetham.github.io/refs/heads/main/portfolio/public/images/renders/logo.jpg",
            scale: 4,
            position: {
              top: "65vh",
              left: "30vw",
              width: "30vw",
              height: "25vh",
            },
            type: "img",
          },
          {
            src: "https://github.com/ppmpreetham/ppmpreetham.github.io/raw/refs/heads/main/portfolio/public/images/renders/cooking.mp4",
            scale: 5,
            position: {
              top: "58vh",
              left: "9vw",
              width: "20vw",
              height: "25vh",
            },
            type: "vid",
          },
          {
            src: "https://raw.githubusercontent.com/ppmpreetham/ppmpreetham.github.io/refs/heads/main/portfolio/public/images/renders/MEGAMEGACITY.jpg",
            scale: 5,
            position: {
              top: "50vh",
              left: "65vw",
              width: "20vw",
              height: "45vh",
            },
            type: "img",
          },
          {
            src: "https://raw.githubusercontent.com/ppmpreetham/ppmpreetham.github.io/refs/heads/main/portfolio/public/images/renders/bigbuildings.jpg",
            scale: 6,
            position: {
              top: "2vh",
              left: "65vw",
              width: "20vw",
              height: "45vh",
            },
            type: "img",
          },
          {
            src: "https://github.com/ppmpreetham/ppmpreetham.github.io/raw/refs/heads/main/portfolio/public/images/renders/astronaut.mp4",
            scale: 7,
            position: {
              top: "2vh",
              left: "16vw",
              width: "20vw",
              height: "55vh",
            },
            type: "vid",
          },
          {
            src: "https://github.com/ppmpreetham/ppmpreetham.github.io/raw/refs/heads/main/portfolio/public/images/renders/edit_party.mp4",
            scale: 10,
            position: {
              top: "13vh",
              left: "40vw",
              width: "22vw",
              height: "22vh",
            },
            type: "vid",
          },
        ]}
      />
      <div className="h-screen">
        <h2 className="text-7xl">MY WORK</h2>
      </div>
    </div>
  );
};

export default Renders;

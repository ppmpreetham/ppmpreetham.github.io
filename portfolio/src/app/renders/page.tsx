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
      {/* <div className="h-[25vh]"></div> */}
      <WorkPage
        images={[
          {
            src: "https://github.com/ppmpreetham/ppmpreetham.github.io/raw/refs/heads/main/portfolio/public/images/renders/batmobile.mp4",
            scale: 4,
            type: "vid",
            muted: false,
            encoding: "mp4",
          },
          {
            src: "https://github.com/ppmpreetham/ppmpreetham.github.io/raw/refs/heads/main/portfolio/public/images/renders/edit_party.mp4",
            scale: 7,
            position: {
              top: "13vh",
              left: "40vw",
              width: "22vw",
              height: "22vh",
            },
            type: "vid",
            encoding: "mp4",
          },
          {
            src: "https://raw.githubusercontent.com/ppmpreetham/ppmpreetham.github.io/refs/heads/main/portfolio/public/images/renders/bigship.webm",
            scale: 2,
            position: {
              top: "50vh",
              left: "77vw",
              width: "15vw",
              height: "45vh",
            },
            type: "vid",
            encoding: "webm",
          },
          {
            src: "https://github.com/ppmpreetham/ppmpreetham.github.io/raw/refs/heads/main/portfolio/public/images/renders/flow_up.webm",
            scale: 4,
            position: {
              top: "65vh",
              left: "55vw",
              width: "20vw",
              height: "19vh",
            },
            type: "vid",
            encoding: "webm",
          },
          {
            src: "https://github.com/ppmpreetham/ppmpreetham.github.io/raw/refs/heads/main/portfolio/public/images/renders/cooking.webm",
            scale: 6,
            position: {
              top: "50vh",
              left: "15vw",
              width: "20vw",
              height: "25vh",
            },
            type: "vid",
            encoding: "webm",
          },
          {
            src: "https://github.com/ppmpreetham/ppmpreetham.github.io/raw/refs/heads/main/portfolio/public/images/renders/spaceattack.webm",
            scale: 5,
            position: {
              top: "5vh",
              left: "65vw",
              width: "15vw",
              height: "40vh",
            },
            type: "vid",
            encoding: "webm",
          },
          {
            src: "https://github.com/ppmpreetham/ppmpreetham.github.io/raw/refs/heads/main/portfolio/public/images/renders/astronaut.webm",
            scale: 7,
            position: {
              top: "5vh",
              left: "20vw",
              width: "15vw",
              height: "40vh",
            },
            type: "vid",
            encoding: "webm",
          },
          {
            src: "https://github.com/ppmpreetham/ppmpreetham.github.io/raw/refs/heads/main/portfolio/public/images/renders/buildings.webm",
            scale: 9,
            position: {
              top: "65vh",
              left: "37vw",
              width: "16vw",
              height: "16vw",
            },
            type: "vid",
            encoding: "webm",
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

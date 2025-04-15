"use client";
import React from "react";
import WorkPage from "../components/WorkPage";
import Full3DView from "@/components/Full3DView";

export default function Home() {
  return (
    <div>
      <Full3DView />
      <WorkPage
        images={[
          {
            src: "https://github.com/ppmpreetham/ppmpreetham.github.io/raw/refs/heads/main/portfolio/public/images/renders/batmobile.mp4",
            scale: 4,
            type: "vid",
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
            src: "https://raw.githubusercontent.com/ppmpreetham/ppmpreetham.github.io/refs/heads/main/portfolio/public/images/renders/MEGAMEGACITY.png",
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
    </div>
  );
}

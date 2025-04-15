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
            src: "https://m.media-amazon.com/images/I/61R-GKU5sBL.jpg",
            scale: 4,
          },
          {
            src: "https://raw.githubusercontent.com/ppmpreetham/ppmpreetham.github.io/refs/heads/main/portfolio/public/images/renders/MEGAMEGACITY.png",
            scale: 5,
            position: {
              top: "65vh",
              left: "60vw",
              width: "35vw",
              height: "30vh",
            },
          },
          {
            src: "https://raw.githubusercontent.com/ppmpreetham/ppmpreetham.github.io/refs/heads/main/portfolio/public/images/renders/bigbuildings.jpg",
            scale: 6,
            position: {
              top: "10vh",
              left: "65vw",
              width: "20vw",
              height: "45vh",
            },
          },
          {
            src: "https://t3.ftcdn.net/jpg/02/14/87/96/360_F_214879686_R3HFJlk6WLr1kcdvy6Q9rtNASKN0BZBS.jpg",
            scale: 7,
            position: {
              top: "0vh",
              left: "27.5vw",
              width: "25vw",
              height: "25vh",
            },
          },
          {
            src: "https://static.vecteezy.com/system/resources/thumbnails/008/612/703/small/html-code-on-computer-monitor-software-web-developer-programming-code-photo.jpg",
            scale: 5,
            position: {
              top: "27.5vh",
              left: "5vw",
              width: "20vw",
              height: "25vh",
            },
          },
          {
            src: "https://t3.ftcdn.net/jpg/02/14/87/96/360_F_214879686_R3HFJlk6WLr1kcdvy6Q9rtNASKN0BZBS.jpg",
            scale: 4,
            position: {
              top: "27.5vh",
              left: "-22.5vw",
              width: "30vw",
              height: "25vh",
            },
          },
          {
            src: "https://static.vecteezy.com/system/resources/thumbnails/008/612/703/small/html-code-on-computer-monitor-software-web-developer-programming-code-photo.jpg",
            scale: 3,
            position: {
              top: "22.5vh",
              left: "25vw",
              width: "15vw",
              height: "15vh",
            },
          },
        ]}
      />
    </div>
  );
}

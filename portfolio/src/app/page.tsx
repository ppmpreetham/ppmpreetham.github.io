"use client";
import React from "react";
import WorkPage from "../components/WorkPage";

export default function Home() {
  return (
    <div>
      <WorkPage
        images={[
          {
            src: "https://static.vecteezy.com/system/resources/thumbnails/008/612/703/small/html-code-on-computer-monitor-software-web-developer-programming-code-photo.jpg",
            scale: 4,
          },
          {
            src: "https://t3.ftcdn.net/jpg/02/14/87/96/360_F_214879686_R3HFJlk6WLr1kcdvy6Q9rtNASKN0BZBS.jpg",
            scale: 5,
          },
          {
            src: "https://static.vecteezy.com/system/resources/thumbnails/008/612/703/small/html-code-on-computer-monitor-software-web-developer-programming-code-photo.jpg",
            scale: 6,
          },
          {
            src: "https://t3.ftcdn.net/jpg/02/14/87/96/360_F_214879686_R3HFJlk6WLr1kcdvy6Q9rtNASKN0BZBS.jpg",
            scale: 7,
          },
        ]}
      />
    </div>
  );
}

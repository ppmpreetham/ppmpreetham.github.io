import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WorkPage = () => {
  const containerRef = useRef(null);
  const imageContainerRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        pin: false,
        markers: false,
      },
    });

    tl.fromTo(
      imageContainerRef.current,
      { scale: 1 },
      {
        scale: 4,
        ease: "none",
      },
      0
    );
  }, []);

  return (
    <div ref={containerRef} className="h-[300vh] relative my-[100vh]">
      <div className="sticky top-0 h-[100vh] bg-orange-400">
        <div className="w-full h-full absolute top-0 flex items-center justify-center">
          <div
            ref={imageContainerRef}
            className="w-[25vw] h-[25vh] relative origin-center"
          >
            <img
              src="https://assets.awwwards.com/awards/gallery/2023/03/hzl-interior-image06.jpg"
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;

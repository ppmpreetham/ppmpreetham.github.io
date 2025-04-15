import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ImageProps {
  src: string;
  scale: number;
  position?: {
    top?: string;
    left?: string;
    width?: string;
    height?: string;
  };
  alt?: string;
  type?: "img" | "vid";
}

interface WorkPageProps {
  images: ImageProps[];
}

const WorkPage: React.FC<WorkPageProps> = ({ images = [] }) => {
  const containerRef = useRef(null);
  const imageContainerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    imageContainerRefs.current = Array(images.length).fill(null);
  }, [images.length]);

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

    imageContainerRefs.current.forEach((ref, index) => {
      if (ref) {
        tl.fromTo(
          ref,
          { scale: 1 },
          {
            scale: images[index].scale * 1,
            ease: "none",
          },
          0
        );
      }
    });
  }, [images]);

  return (
    <div ref={containerRef} className="h-[300vh] relative">
      <div className="sticky top-0 h-[100vh] bg-black overflow-hidden">
        {images.map((image, index) => (
          <div
            ref={(el) => {
              imageContainerRefs.current[index] = el;
            }}
            key={index}
            className="w-full h-full absolute top-0 flex items-center justify-center"
          >
            <div
              className="absolute origin-center"
              style={{
                width: image.position?.width || "25vw",
                height: image.position?.height || "25vh",
                top: image.position?.top || "auto",
                left: image.position?.left || "auto",
              }}
            >
              {image.type === "img" ? (
                <img
                  src={image.src}
                  alt=""
                  className="object-cover w-full h-full"
                />
              ) : (
                <video
                  className="object-cover w-full h-full"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                  autoPlay
                  loop
                  muted
                >
                  <source src={image.src} type="video/mp4" />
                </video>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkPage;

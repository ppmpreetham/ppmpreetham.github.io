"use client";
import React, { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);

interface CharacterProximityWeightProps {
  text: string;
  minWeight?: number;
  maxWeight?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CharacterProximityWeight: React.FC<CharacterProximityWeightProps> = ({
  text,
  minWeight = 100,
  maxWeight = 900,
  className = "",
  style = {},
}) => {
  const [fontSize, setFontSize] = useState(0);
  const [fontWeight, setFontWeight] = useState(0);

  const divRef = useRef<HTMLDivElement>(null);
  const bigRef = useRef<HTMLDivElement>(null);

  const t1 = gsap.timeline();
  const weightChange = (icon: any) => {
    icon.style.fontVariationSettings = `"wght" ${minWeight}, "GRAD" 300`;
  };

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: bigRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        markers: true,
      },
    });

    timeline
      .to(divRef.current, {
        duration: 0.5,
        fontVariationSettings: `'wght' 1000, 'GRAD' 300`,
        fontSize: "10rem",
      })
      .to(divRef.current, {
        top: 0,
        left: 0,
        translateX: "52%",
        translateY: "50%",
        duration: 0.5,
      });
  });
  return (
    <div ref={bigRef} className="w-full h-[300vh]">
      <div className="sticky top-0 h-[100vh] overflow-hidden flex items-center justify-center">
        <div
          ref={divRef}
          className="absolute font-heptaSlab text-[0px] top-[50vh] left-[50vw] transform translate-x-[-50%] translate-y-[-50%]"
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default CharacterProximityWeight;

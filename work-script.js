import { projectData } from "./project-data.js";

document.addEventListener("DOMContentLoaded", function() {
    const cursor = document.querySelector(".cursor");
    const gallery = document.querySelector(".gallery");
    const noofitems = projectData.length;
    const radius = 1100;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const angleIncrement = Math.PI*2 / noofitems;


    for (let i = 0; i < noofitems; i++) {
        const item = document.createElement("div");
        item.className = "item";
        const p = document.createElement("p");
        const count = document.createElement("span");

        p.textContent = projectData[i].name;
        count.textContent = `(${Math.floor(Math.random() * 50)+1})`;
        item.appendChild(p);
        p.appendChild(count);
        gallery.appendChild(item);

        const angle = i*angleIncrement;
        const x = centerX+radius*Math.cos(angle);
        const y = centerY+radius*Math.sin(angle);
        const rotation = (angle * 180 / Math.PI);

        gsap.set(item, {
            x: x+"px",
            y: y+"px",
            rotation: rotation,
        });
    }
});
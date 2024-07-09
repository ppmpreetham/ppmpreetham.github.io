document.addEventListener("DOMContentLoaded", function () {
  let lottiecontainer = document.querySelector(".animation");

  if (lottiecontainer) {
    LottieScrollTrigger({
      trigger: ".animation",
      start: "top center",
      endTrigger: ".lottie-end",
      end: `bottom center+=${
        document.querySelector(".animation").offsetHeight
      }`,
      renderer: "svg",
      target: ".animation",
      path: "./public/media/mographlottielong.json",
      scrub: 2,
    });
  }
});

function LottieScrollTrigger(vars) {
  let playhead = { frame: 0 },
    target = gsap.utils.toArray(vars.target)[0],
    speeds = { slow: "+=2000", medium: "+=1000", fast: "+=500" },
    st = {
      trigger: ".trigger",
      end: speeds[vars.speed] || "+=1000",
      scrub: 1,
      markers: false,
    },
    ctx = gsap.context && gsap.context(),
    animation = lottie.loadAnimation({
      container: target,
      renderer: vars.renderer || "svg",
      loop: false,
      autoplay: false,
      path: vars.path,
      rendererSettings: vars.rendererSettings || {
        preserveAspectRatio: "xMidYMid slice",
      },
    });

  for (let p in vars) {
    st[p] = vars[p];
  }

  animation.addEventListener("DOMLoaded", function () {
    let createTween = function () {
      animation.frameTween = gsap.to(playhead, {
        frame: animation.totalFrames - 1,
        ease: "none",
        onUpdate: () => animation.goToAndStop(playhead.frame, true),
        scrollTrigger: st,
      });
      return () => animation.destroy && animation.destroy();
    };
    ctx && ctx.add ? ctx.add(createTween) : createTween();
  });

  return animation;
}

const paras = gsap.utils.toArray(".content-para p");
paras.forEach((para) => {
  gsap.to(para, {
    x: 25,
    scrollTrigger: {
      trigger: para,
      start: "top 50%",
      end: "top 30%",
      scrub:true,
      toggleActions: "play none none reverse",
      toggleClass: "element-on-focus",
      scrub: 1,
    },
  });
});

// Horizantal Scroll
const races = document.querySelector(".workScroll");
let racesWidth = races.offsetWidth;
let amountToScroll = racesWidth - window.innerWidth;


function getScrollAmount(){
  let racesWidth=races.scrollWidth;
  return -(racesWidth-window.innerWidth);
}

const tween = gsap.to(races,{
  x: getScrollAmount,
  duration: 3,
  ease: "none",
});

ScrollTrigger.create({
  trigger:".horizantalScroll",
  start: "top 20%",
  end: () => `+=${-1*getScrollAmount()}`,
  pin: true,
  animation : tween,
  scrub: 1,
  invalidateOnRefresh: true,
  markers:true,
});
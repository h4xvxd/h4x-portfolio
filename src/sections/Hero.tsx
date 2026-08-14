import gsap from "gsap";
import { useRef } from "react";
import Button from "../components/Button";
import { words } from "../constants";
import { useGSAP } from '@gsap/react'
import AnimatedCounter from "../components/AnimatedCounter";
import HeroExperince from "../components/HeroModels/HeroExperince";
import LiquidEther from "../components/LiquidEther/LiquidEther";
import "../styles/hero-reveal.css";

// Matches --color-white-50 in index.css — keeps the fluid bg on-palette
// instead of importing a foreign accent color.
const HERO_LIQUID_COLORS = ["#d9ecff"];

const Hero = () => {
  const portraitRef = useRef(null);
  const strokeRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.hero-text h1',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'power2.inOut' }
    );

    // Portrait reveal — ported from elfekky's #hero-img animation
    // (scale 0.8 -> 1, y 50% -> 0, autoAlpha 0 -> 1), timed to land just
    // after the heading stagger finishes.
    gsap.fromTo(portraitRef.current,
      { autoAlpha: 0, y: "50%", scale: 0.8 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 1, ease: 'sine.out', delay: 0.6 }
    );
    gsap.fromTo(strokeRef.current,
      { autoAlpha: 0, scale: 0.7 },
      { autoAlpha: 1, scale: 1, duration: 1, ease: 'power2.out', delay: 0.8 }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        <div id="hero-bg-fluid">
          <LiquidEther
            colors={HERO_LIQUID_COLORS}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>

        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={`${word.text}-${index}`}
                        className="flex items-center md:gap-3 dap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        {word.text}
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Result</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I'm H4X — a 15-year-old self-taught developer teaching myself software from scratch. I build full-stack web apps and I'm currently deep in a custom x86 operating system in Assembly and C. Still learning. Still building — one commit at a time.
            </p>

            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See my Work"
              onClick={() => {}}
            />
          </div>
        </header>

        <figure>
          <div className="hero-3d-layout cursor-grab" style={{ touchAction: 'pan-y' }}>
            <div className="md:block hidden w-full h-full">
              <HeroExperince />
            </div>
            <div className="md:hidden w-full h-full flex items-center mt-20 justify-center">
              <img src="/images/3dmodle.svg" alt="3D Model" className="w-7/8 h-auto object-contain rounded-md" />
            </div>
          </div>
        </figure>

        <div id="hero-portrait" ref={portraitRef}>
          <img src="/images/portrait.png" alt="" draggable="false" />
        </div>
        <div id="hero-portrait-stroke" ref={strokeRef}></div>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;

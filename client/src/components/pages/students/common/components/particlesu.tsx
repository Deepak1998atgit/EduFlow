import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";

import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.



const ParticlesComponent = (props :any) => {

  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);


  const options : any= useMemo(
  () => ({
    background: {
        color: {
            value: "#385864",
        },
    },
    fpsLimit: 10,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity:30,
            },
            repulse: {
                distance: 100,
                duration: 6,
            },
        },
    },
    particles: {
        color: {
            value: "#fefeff",
        },
        links: {
            color: "#db81d5",
            distance: 150,
            enable: true,
            opacity: 0.8,
            width: 2,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed:3,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.1,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min:3, max:6},
        },
    },
    detectRetina: true,
}),
  [],
);
    return <Particles id={ props.id }   options = { options } /> as any
};

export default ParticlesComponent;
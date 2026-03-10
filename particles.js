particlesJS("particles-js", {
  particles: {
    number: { value: 100 },
    color: { value: "#153c3c" },
    shape: { type: "hexagon" },
    opacity: { value: 1.8 },
    size: { value: 8 },

    line_linked: {
      enable: true,
      distance: 190,
      color: "#000304",
      opacity: 1.0,
      width: 2.5
    },

    move: {
      enable: true,
      speed: 5
    }
  },

  interactivity: {
    detect_on: "canvas",

    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },

      onclick: {
        enable: true,
        mode: "push"
      }
    },

    modes: {
      repulse: {
        distance: 150,
        duration: 0.4
      },

      push: {
        particles_nb: 4
      }
    }
  },

  retina_detect: true
});
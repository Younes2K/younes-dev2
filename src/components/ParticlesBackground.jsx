import { useEffect } from 'react'

const ParticlesBackground = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js'
    script.async = true
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: { value: ['#6b21a8', '#a855f7', '#db2777', '#9333ea', '#f472b6'] }, 
            shape: { type: 'circle' },
            opacity: { value: 0.6 },
            size: {
              value: 3,
              random: true
            },
            line_linked: {
              enable: true,
              distance: 140,
              color: '#a855f7',
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              direction: 'none',
              random: false,
              out_mode: 'bounce',
              straight: false
            }
          },
          interactivity: {
            detect_on: 'window',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse'
              },
              onclick: {
                enable: false 
              },
              resize: true
            },
            modes: {
              repulse: {
                distance: 80,
                duration: 0.3
              }
            }
          },
          retina_detect: true
        })
      }
    }
    document.body.appendChild(script)
  }, [])

  return null
}

export default ParticlesBackground

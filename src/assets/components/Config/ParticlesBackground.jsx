import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import particlesConfig from './particles-config'

const ParticlesBackground = () => {

    const particlesInit = useCallback ((engine) => {
        loadFull(engine)
    }, [])

  return (
      <Particles 
      id="particles-js"
      options={particlesConfig}
      style={{
          width: "100vw",
          height: "100vh"
      }}
      init={particlesInit}
      />
  )
}

export default ParticlesBackground;

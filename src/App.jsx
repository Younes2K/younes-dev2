import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'

import Loader from './components/Loader'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Formation from './components/Formation'
import Contact from './components/Contact'
import ParticlesBackground from './components/ParticlesBackground'
import ScrollToTopButton from './components/ScrollToTopButton'
import MesProjets from './pages/MesProjets'
import CustomCursor from './components/CustomCursor'

const App = () => {
  const [loadingFinished, setLoadingFinished] = useState(false)

  return (
    <Box position="relative" overflow="hidden">
      {!loadingFinished && <Loader onFinish={() => setLoadingFinished(true)} />}

      {loadingFinished && (
        <>
          <CustomCursor />
          <div
            id="particles-js"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 1,
              pointerEvents: 'auto'
            }}
          />
          <ParticlesBackground />
          <Box position="relative" zIndex={2}>
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Formation />
                    <Contact />
                    <ScrollToTopButton />
                  </>
                }
              />
              <Route path="/mes-projets" element={<MesProjets />} />
            </Routes>
          </Box>
        </>
      )}
    </Box>
  )
}

export default App

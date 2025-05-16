import React, { useRef, useEffect, useState } from 'react'
import {
  Box,
  Heading,
  Text,
  VStack
} from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'

const MotionHeading = motion(Heading)
const MotionText = motion(Text)

const About = () => {
  const ref = useRef()
  const isInView = useInView(ref, { once: true })
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    if (isInView) {
      setShowText(true)
    }
  }, [isInView])

  return (
    <Box
      id="about"
      py={20}
      px={6}
      bg="#8c4fe9"
      mt={10}
      mx="auto"
      maxW="100%"
    >
      <VStack spacing={8} maxW="800px" mx="auto" textAlign="center" ref={ref}>
        <MotionHeading
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight="bold"
          color="white"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 }
            }
          }}
          position="relative"
          _after={{
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '3px',
            bg: 'whiteAlpha.800',
            bottom: '-8px',
            left: 0,
            transform: isInView ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'left',
            transition: 'transform 0.6s ease-out'
          }}
        >
          Faisons connaissance
        </MotionHeading>

        {showText && (
          <>
            <MotionText
              fontSize="lg"
              color="whiteAlpha.900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Je suis étudiant à l’EPSI Montpellier en 2ᵉ année. Passionné par le développement web,
              j’ai déjà réalisé plusieurs projets concrets en React, Symfony, Python et Flutter.
              J’ai 19 ans, je suis curieux, autonome et toujours à la recherche de nouveaux défis techniques
              pour repousser mes limites.
            </MotionText>

            <MotionText
              fontSize="lg"
              color="whiteAlpha.900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              Mes objectifs ? Maîtriser les outils modernes, créer des interfaces immersives et décrocher une
              alternance pour continuer à progresser dans un environnement stimulant.
            </MotionText>
          </>
        )}
      </VStack>
    </Box>
  )
}

export default About

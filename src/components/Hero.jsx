import React, { useState } from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Button,
  Image
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaGithub, FaRocket, FaFileAlt } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import profilePic from '../assets/photo.png'

const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionBox = motion(Box)

const Hero = () => {
  const [colorIndex, setColorIndex] = useState(0)

  const colors = ['#7c3aed', '#db2777', '#9333ea', '#e11d48']
  const currentColor = colors[colorIndex]

  const handleClick = () => {
    setColorIndex((prev) => (prev + 1) % colors.length)
  }

  const scrollToContact = () => {
    const section = document.getElementById('contact')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Box pt="100px" pb="60px" minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" gap={12}>
        
        <Box position="relative" onClick={handleClick} cursor="pointer">
          <MotionBox
            position="absolute"
            top="-20px"
            left="-20px"
            right="-20px"
            bottom="-20px"
            borderRadius="full"
            bgGradient={`radial(${currentColor}, transparent)`}
            filter="blur(50px)"
            zIndex="0"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <MotionBox
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            zIndex="1"
            position="relative"
          >
            <Image
              src={profilePic}
              alt="Younes Marmize"
              borderRadius="full"
              boxSize="250px"
              border="5px solid white"
              shadow="2xl"
            />
          </MotionBox>
        </Box>

        {/* TEXTE */}
        <VStack align="start" spacing={6} maxW="600px">
          <MotionHeading
            fontSize={{ base: '3xl', md: '5xl' }}
            bgGradient="linear(to-r, brand.500, purple.500)"
            bgClip="text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Younes Marmize
          </MotionHeading>

          <MotionText
            fontSize="lg"
            color="gray.600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Développeur web passionné. Créateur d’expériences modernes et immersives.
          </MotionText>

          <Flex gap={4} wrap="wrap">
            <Button
              as={RouterLink}
              to="/mes-projets"
              colorScheme="purple"
              leftIcon={<FaRocket />}
              size="lg"
            >
              Découvrir mes projets
            </Button>

            <Button
              as="a"
              href="https://github.com/Younes2k"
              target="_blank"
              variant="outline"
              colorScheme="purple"
              leftIcon={<FaGithub />}
              size="lg"
            >
              Check mon GitHub
            </Button>

            <Button
              onClick={scrollToContact}
              variant="solid"
              colorScheme="purple"
              leftIcon={<FaFileAlt />}
              size="lg"
            >
              Mon CV
            </Button>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  )
}

export default Hero

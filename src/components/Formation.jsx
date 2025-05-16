import React from 'react'
import {
  Box,
  VStack,
  Heading,
  Text,
  Flex,
  Circle
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)

const formations = [
  {
    title: "Lycée Général",
    subtitle: "Spécialité Mathématiques et Physique-Chimie"
  },
  {
    title: "EPSI Montpellier",
    subtitle: "Actuellement en deuxième année chez Epsi Montpellier – React, Symfony, MySQL, Python..."
  },
  {
    title: "Stage chez Free Iliad",
    subtitle: "Générateur de formulaires dynamiques React (avec JSON)"
  },
  {
    title: "2e stage chez Free Iliad",
    subtitle: "Dashboard interne React + Chakra UI, gestion d’authentification Keycloak"
  },
  {
    title: "Aujourd'hui - Recherche Alternance",
    subtitle: "Recherche une alternance pour début septembre 2025"
  },
]

const Formation = () => {
  return (
    <Box id="formation" bg="gray.100" py={24} px={6}>
      <Heading textAlign="center" fontSize={{ base: '3xl', md: '4xl' }} mb={16} color="purple.600">
        Formation
      </Heading>

      <VStack spacing={12} align="stretch" maxW="1000px" mx="auto" position="relative">
        
        <Box
          position="absolute"
          left="50%"
          top="0"
          bottom="110px"
          width="4px"
          bg="purple.300"
          transform="translateX(-50%)"
        />

        {formations
          .slice()
          .reverse()
          .map((item, index, arr) => {
            const originalIndex = arr.length - 1 - index
            return (
              <MotionFlex
                key={originalIndex}
                align="center"
                justify={originalIndex % 2 === 0 ? "flex-end" : "flex-start"}
                w="100%"
                position="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: originalIndex * 0.15 }}
                viewport={{ once: true }}
              >
                <MotionBox
                  bg="white"
                  p={6}
                  rounded="md"
                  shadow="lg"
                  maxW="400px"
                  w="full"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(124,58,237,0.3)' }}
                  transition={{ duration: 0.3 }}
                  zIndex="1"
                >
                  <Heading fontSize="lg" mb={1}>{item.title}</Heading>
                  <Text fontSize="sm" color="gray.600">{item.subtitle}</Text>
                </MotionBox>

                <Circle
                  size="16px"
                  bg="purple.500"
                  position="absolute"
                  left="50%"
                  transform="translateX(-50%)"
                  zIndex="2"
                />
              </MotionFlex>
            )
          })}

      
        <MotionFlex
          justify="center"
          mt={4}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Circle
            size="90px"
            bg="yellow.400"
            color="white"
            fontWeight="bold"
            fontSize="sm"
            textAlign="center"
            shadow="lg"
            position="relative"
            zIndex="1"
          >
            Début<br />de mon<br />parcours
          </Circle>
        </MotionFlex>
      </VStack>
    </Box>
  )
}

export default Formation

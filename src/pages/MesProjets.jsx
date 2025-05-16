import React from 'react'
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  VStack
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import {
  FaReact,
  FaPhp,
  FaMobileAlt,
  FaCode,
  FaUniversity,
  FaDatabase,
  FaListAlt
} from 'react-icons/fa'

const MotionBox = motion(Box)

const projets = [
  {
    titre: 'Dashboard React + Chakra',
    description: 'Dashboard interne moderne pour Free, responsive avec authentification Keycloak.',
    icon: FaReact
  },
  {
    titre: 'Formulaire React JSON Schema',
    description: 'Générateur de formulaires dynamiques pour Free à partir de JSON Schema.',
    icon: FaListAlt
  },
  {
    titre: 'Application Pizza (Flutter)',
    description: 'App mobile avec page détail, panier, animations et structure scalable.',
    icon: FaMobileAlt
  },
  {
    titre: 'Médiathèque PHP/MySQL',
    description: 'Site complet avec gestion des livres, prêts, adhérents, interface admin.',
    icon: FaPhp
  },
  {
    titre: 'Projet Scraping Crypto',
    description: 'Script Python qui scrape les données de marché pour prise de décision auto.',
    icon: FaCode
  },
  {
    titre: 'Projet Parcoursup (Django)',
    description: 'Plateforme web avec gestion des candidatures, rôles utilisateurs, BDD élèves.',
    icon: FaUniversity
  },
  {
    titre: 'Bot de Trading Crypto',
    description: 'Bot de trading en temps réel avec stratégie de réinjection et suivi des tendances.',
    icon: FaDatabase
  }
]

const MesProjets = () => {
  return (
    <Box pt="120px" px={8} minH="100vh">
      <MotionBox
        textAlign="center"
        mb={12}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Heading
          fontSize={{ base: '3xl', md: '5xl' }}
          bgGradient="linear(to-r, brand.500, purple.500)"
          bgClip="text"
          fontWeight="extrabold"
        >
          Mes Projets
        </Heading>
        <Text fontSize="lg" color="gray.600" mt={4}>
          Une sélection de projets réalisés en entreprise, à l’école ou pour moi-même.
        </Text>
      </MotionBox>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {projets.map((projet, i) => {
          const Icon = projet.icon
          return (
            <MotionBox
              key={i}
              p={6}
              bg="white"
              borderRadius="lg"
              boxShadow="xl"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <VStack spacing={4} align="start">
                <Box as={Icon} boxSize={12} color="brand.500" />
                <Heading fontSize="xl">{projet.titre}</Heading>
                <Text color="gray.600">{projet.description}</Text>
              </VStack>
            </MotionBox>
          )
        })}
      </SimpleGrid>
    </Box>
  )
}

export default MesProjets

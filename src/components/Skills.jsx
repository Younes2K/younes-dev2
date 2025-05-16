import React, { useState } from 'react'
import {
  Box,
  Heading,
  Text,
  Button,
  SimpleGrid,
  VStack,
  Icon
} from '@chakra-ui/react'
import {
  FaReact,
  FaPython,
  FaDatabase,
  FaCode,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaNodeJs
} from 'react-icons/fa'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const skills = [
  { icon: FaReact, title: 'React', desc: 'Interfaces dynamiques et composants réutilisables.' },
  { icon: FaPython, title: 'Python', desc: 'Automatisation, backend, scraping et IA.' },
  { icon: FaPhp, title: 'PHP / Symfony', desc: 'Back-end structuré avec MVC.' },
  { icon: FaDatabase, title: 'SQL / MySQL', desc: 'Bases de données relationnelles solides.' },
  { icon: FaHtml5, title: 'HTML5', desc: 'Structure sémantique des pages web.' },
  { icon: FaCss3Alt, title: 'CSS3 / Chakra UI', desc: 'Stylisation responsive & animations UI.' },
  { icon: FaJsSquare, title: 'JavaScript', desc: 'Logique front-end moderne et dynamique.' },
  { icon: FaGitAlt, title: 'Git / GitHub', desc: 'Gestion de version et collaboration propre.' },
  { icon: FaNodeJs, title: 'Node.js', desc: 'Serveurs et API performants côté back.' },
  { icon: FaCode, title: 'Django', desc: 'Framework Python robuste et rapide.' }
]

const Skills = () => {
  const [show, setShow] = useState(false)

  return (
    <Box id="skills" bg="gray.50" py={20} px={6}>
      <VStack spacing={6} textAlign="center">
        <Heading
          fontSize={{ base: '2xl', md: '4xl' }}
          bgGradient="linear(to-r, brand.500, purple.500)"
          bgClip="text"
        >
          Mes compétences t'intéressent ?
        </Heading>

        <Text fontSize="md" color="gray.600">
          Clique ci-dessous pour découvrir ce que je maîtrise.
        </Text>

        {!show && (
          <Button
            colorScheme="purple"
            size="lg"
            onClick={() => setShow(true)}
            _hover={{ transform: 'scale(1.05)' }}
          >
            Voir mes compétences
          </Button>
        )}

        {show && (
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6} pt={10}>
            {skills.map((skill, i) => (
              <MotionBox
                key={i}
                bg="white"
                p={6}
                rounded="lg"
                shadow="md"
                position="relative"
                overflow="hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 8px 20px rgba(124, 58, 237, 0.3)'
                }}
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: '-20%',
                  left: '-20%',
                  width: '140%',
                  height: '140%',
                  bg: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                  zIndex: 0,
                  opacity: 0,
                  transition: 'opacity 0.2s ease-in-out'
                }}
                _hover={{
                  _before: {
                    opacity: 1
                  }
                }}
                transition="all 0.2s ease-out"
              >
                <VStack spacing={3} position="relative" zIndex={1}>
                  <Icon as={skill.icon} boxSize={10} color="purple.500" />
                  <Heading fontSize="lg">{skill.title}</Heading>
                  <Text fontSize="sm" color="gray.600">
                    {skill.desc}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        )}
      </VStack>
    </Box>
  )
}

export default Skills

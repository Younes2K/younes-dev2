
import React from 'react'
import { Box, Heading, SimpleGrid, VStack, Text } from '@chakra-ui/react'
import { FaGem, FaEye, FaHeart, FaLaptopCode } from 'react-icons/fa'

const skills = [
  { icon: FaGem, title: 'Frameworks', desc: 'React, Symfony, Flask, etc.' },
  { icon: FaEye, title: 'Veille techno', desc: 'Toujours à l’affût des dernières tendances' },
  { icon: FaLaptopCode, title: 'Ergonomie', desc: 'Pensée UX / UI sur tous mes projets' },
  { icon: FaHeart, title: 'Passion', desc: 'Je code avec le ❤️ depuis mes débuts' },
]

const Competences = () => {
  return (
    <Box py={20} px={8} textAlign="center" bg="white" color="gray.800">
      <Heading mb={10}>À votre service !</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} maxW="1200px" mx="auto">
        {skills.map((skill, idx) => (
          <VStack key={idx} spacing={4}>
            <Box as={skill.icon} boxSize={12} color="orange.500" />
            <Text fontWeight="bold">{skill.title}</Text>
            <Text fontSize="sm" maxW="200px">{skill.desc}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Competences

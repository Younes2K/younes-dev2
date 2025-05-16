import React from 'react'
import {
  Box,
  Button,
  VStack,
  Heading
} from '@chakra-ui/react'
import { FaFolderOpen } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'

const Projects = () => {
  return (
    <Box
      id="projects"
      py={24}
      px={6}
      bg="#8c4fe9" 
      textAlign="center"
    >
      <VStack spacing={8}>
        <Heading
          fontSize={{ base: '3xl', md: '4xl' }}
          color="white"
          fontWeight="extrabold"
        >
          Mes projets
        </Heading>

        <Button
          as={RouterLink}
          to="/mes-projets"
          size="lg"
          variant="outline"
          px={8}
          py={6}
          fontSize="xl"
          leftIcon={<FaFolderOpen />}
          color="white"
          borderColor="white"
          _hover={{
            bg: 'white',
            color: '#8c4fe9',
            transform: 'scale(1.05)'
          }}
          transition="all 0.2s ease"
        >
          Voir mes projets
        </Button>
      </VStack>
    </Box>
  )
}

export default Projects

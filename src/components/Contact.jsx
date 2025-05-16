import React, { useState } from 'react'
import {
  Box,
  Heading,
  Text,
  Link,
  VStack,
  Icon,
  Button,
  Collapse,
  Image
} from '@chakra-ui/react'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'
import cvImage from '../assets/cv.png'

const MotionBox = motion(Box)

const Contact = () => {
  const [showCV, setShowCV] = useState(false)

  return (
    <Box id="contact" py={20} px={6} bg="gray.50">
      <VStack spacing={6} textAlign="center">
        <Heading fontSize={{ base: '2xl', md: '4xl' }} color="purple.600">
          Contact
        </Heading>

        <Text fontSize="md" color="gray.600">
          Disponible pour une alternance en développement web à partir de septembre 2025,
          sur Montpellier ou en remote.
        </Text>

        <VStack spacing={2}>
          <Link href="mailto:younesmar264@gmail.com" color="purple.500" isExternal>
            <Icon as={FaEnvelope} mr={2} />
            younesmar264@gmail.com
          </Link>

          <Link href="https://linkedin.com/in/younes-marmize3434" color="purple.500" isExternal>
            <Icon as={FaLinkedin} mr={2} />
            www.linkedin.com/in/younes-marmize3434
          </Link>
        </VStack>

        <Button
          onClick={() => setShowCV(!showCV)}
          colorScheme="purple"
          size="lg"
          variant="solid"
          _hover={{ transform: 'scale(1.05)' }}
        >
          {showCV ? 'Masquer mon CV' : 'Voir mon CV'}
        </Button>

       
        <Collapse in={showCV} animateOpacity style={{ width: '100%' }}>
          <MotionBox
            mt={10}
            p={6}
            maxW="800px"
            mx="auto"
            borderRadius="xl"
            position="relative"
            bg="white"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            _before={{
              content: '""',
              position: 'absolute',
              top: '-15px',
              left: '-15px',
              right: '-15px',
              bottom: '-15px',
              borderRadius: 'xl',
              bgGradient: 'radial(#7c3aed40, transparent)',
              zIndex: 0,
              filter: 'blur(50px)'
            }}
            boxShadow="0 0 30px rgba(124, 58, 237, 0.3)"
            zIndex={1}
          >
            <Image
              src={cvImage}
              alt="CV de Younes Marmize"
              borderRadius="md"
              objectFit="contain"
              w="100%"
              shadow="lg"
              transition="all 0.4s ease"
              _hover={{ transform: 'scale(1.01)', shadow: '2xl' }}
              zIndex={1}
              position="relative"
            />
          </MotionBox>
        </Collapse>
      </VStack>
    </Box>
  )
}

export default Contact

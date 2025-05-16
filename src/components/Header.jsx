import React from 'react'
import { Box, Flex, Link, Text, Button } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Global } from '@emotion/react'

const MotionText = motion(Text)

const Header = () => {
  return (
    <>
      <Box
        as="header"
        position="fixed"
        top="0"
        width="100%"
        bg="rgba(255, 255, 255, 0.9)"
        backdropFilter="blur(10px)"
        zIndex="999"
        boxShadow="lg"
        py={4}
        px={8}
      >
        <Flex
          maxW="1200px"
          mx="auto"
          align="center"
          justify="space-between"
        >
          
          <MotionText
            fontSize={{ base: '2xl', md: '3xl' }}
            fontWeight="bold"
            fontFamily="'Poppins', sans-serif"
            bgGradient="linear(to-r, #7c3aed, #db2777)"
            bgClip="text"
            cursor="default"
            whileHover={{ scale: 1.05, rotate: -1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Younes Marmize
          </MotionText>

          
          <Box
            flex="1"
            textAlign="center"
            display={{ base: 'none', md: 'block' }}
            position="relative"
          >
            <Text fontSize="sm" color="gray.600" fontWeight="medium">
              Site en construction – <strong>75%</strong>
            </Text>

            
            <Box
              mt={1}
              h="6px"
              w="150px"
              mx="auto"
              borderRadius="full"
              overflow="hidden"
              bg="gray.200"
              position="relative"
            >
              <Box
                position="absolute"
                top="0"
                left="0"
                h="100%"
                w="75%"
                bgGradient="linear(to-r, #7c3aed, #db2777)"
                animation="waveMove 2s linear infinite"
              />
            </Box>
          </Box>

          
          <Flex gap={4} align="center">
            
            <Link
              href="https://github.com/Younes2k"
              isExternal
              fontSize="2xl"
              color="gray.700"
              _hover={{ color: 'brand.500' }}
            >
              <FaGithub />
            </Link>

            {/* Accueil */}
            <Button
              as={RouterLink}
              to="/"
              variant="ghost"
              size="md"
              _hover={{ bg: 'gray.100', transform: 'scale(1.05)' }}
            >
              Accueil
            </Button>

            
            <Button
              as={RouterLink}
              to="/mes-projets"
              colorScheme="purple"
              variant="solid"
              size="md"
              _hover={{ transform: 'scale(1.05)' }}
            >
              Mes Projets
            </Button>
          </Flex>
        </Flex>
      </Box>

      
      <Global
        styles={`
          @keyframes waveMove {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      />
    </>
  )
}

export default Header

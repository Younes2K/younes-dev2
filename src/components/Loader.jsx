import React, { useEffect, useState } from 'react'
import { Box, Text, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)
const MotionText = motion(Text)

const Loader = ({ onFinish }) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false)
      onFinish()
    }, 2000) 

    return () => clearTimeout(timeout)
  }, [onFinish])

  if (!visible) return null

  return (
    <MotionBox
      position="fixed"
      top="0"
      left="0"
      w="100vw"
      h="100vh"
      bg="purple.900"
      zIndex="9999"
      display="flex"
      alignItems="center"
      justifyContent="center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Flex direction="column" align="center">
        {/* Barre du haut */}
        <MotionBox
          h="2px"
          w="100px"
          bg="white"
          mb={6}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
        {/* Initiales YM avec effet glow */}
        <MotionText
          fontSize="6xl"
          fontWeight="extrabold"
          color="white"
          textShadow="0 0 20px rgba(255, 255, 255, 0.8)"
          letterSpacing="widest"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          YM
        </MotionText>
        {/* Barre du bas */}
        <MotionBox
          h="2px"
          w="100px"
          bg="white"
          mt={6}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.2 }}
        />
      </Flex>
    </MotionBox>
  )
}

export default Loader

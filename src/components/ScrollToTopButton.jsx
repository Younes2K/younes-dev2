import React, { useEffect, useState } from 'react'
import { IconButton } from '@chakra-ui/react'
import { ChevronUpIcon } from '@chakra-ui/icons'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return isVisible ? (
    <IconButton
      icon={<ChevronUpIcon />}
      position="fixed"
      bottom="30px"
      right="30px"
      size="lg"
      colorScheme="purple"
      borderRadius="full"
      onClick={scrollToTop}
      zIndex="1000"
      shadow="md"
      _hover={{ transform: 'scale(1.1)' }}
    />
  ) : null
}

export default ScrollToTopButton

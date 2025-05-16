
import React from 'react'
import { Icon } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const ScrollDownIcon = () => {
  return (
    <Icon
      as={ChevronDownIcon}
      boxSize={10}
      color="orange.400"
      mt={10}
      animation="bounce 2s infinite"
    />
  )
}

export default ScrollDownIcon

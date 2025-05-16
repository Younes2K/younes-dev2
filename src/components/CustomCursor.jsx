import React, { useEffect, useRef } from 'react'
import { Box } from '@chakra-ui/react'

const CustomCursor = () => {
  const cursorRef = useRef(null)

  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX
      const y = e.clientY
      cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }

    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <>
    
      <Box
        ref={cursorRef}
        position="fixed"
        top={0}
        left={0}
        width="24px"
        height="24px"
        transform="translate(-50%, -50%) rotate(45deg)"
        bgGradient="linear(to-br, #7c3aed, #4f46e5)" 
        filter="drop-shadow(0 0 8px #7c3aed88) drop-shadow(0 0 14px #4f46e588)"
        transition="transform 0.07s ease-out"
        zIndex="9999"
        pointerEvents="none"
        borderRadius="6px" 
      />

      
      <style>{`* { cursor: none !important; }`}</style>
    </>
  )
}

export default CustomCursor

import React, { useEffect, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'

const AnimFeTurbulence = animated('feTurbulence')
const AnimFeDisplacementMap = animated('feDisplacementMap')

function Spring() {
    const [styles, api] = useSpring(() => ({
      from: { x: -50, opacity: 1 },
     
    }))
  
    useEffect(() => {
      
      api({
        x: 50,
        opacity: 1,
        loop: { reverse: true },
      })
    }, [])
  
    return (
      
      <animated.div
           style={{
          width: 80,
          height: 80,
          backgroundColor: '#46e891',
          borderRadius: 16,
          ...styles,
        }}
      />
     
    
    )
  }
export default Spring;


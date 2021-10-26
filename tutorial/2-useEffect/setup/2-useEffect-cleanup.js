import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)
  const [sizeY, setSizeY] = useState(window.innerHeight)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  const checkSizeY = () => {
    setSizeY(window.innerHeight)
  }

   useEffect(() => {
    console.log('I will repeat myself!')
    window.addEventListener('resize', checkSizeY)
 
  }, [])
  useEffect(() => {
    console.log('I will repeat myself!')
    window.addEventListener('resize', checkSize)
    // return () => {
    //   console.log('Clean UP')
    //   window.removeEventListener('resize', checkSize)
    // }
  }, [])
  // not useful with components and disappearing (conditional rendering)

  return <>
    <h1>window</h1>
    <h2>{size} pX</h2>
    <h2>{sizeY} pX</h2>

  </>;
};

export default UseEffectCleanup;

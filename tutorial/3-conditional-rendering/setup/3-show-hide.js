import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false)
  return <>
    <button className="btn" onClick={() => setShow(!show)}>Show/Hide</button>
    {show && <Item />}
  </>;
};


const Item = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checksize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checksize)
    return () => {
      window.removeEventListener('resize', checksize)
    }
  }, [])

  return <div style={{ marginTop: '2rem' }}>
    <h1>window</h1>
    <h3>Size : {size}</h3>
  </div>
}



export default ShowHide;


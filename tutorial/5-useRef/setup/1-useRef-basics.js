import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refrContainer = useRef(null)
  const divContainer = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(refrContainer.current.value);
    console.log(divContainer.current);
  }

  useEffect(() => {
    console.log(refrContainer.current);
    refrContainer.current.focus()
  })

  return <>
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <input type="text" ref={refrContainer} />
        <button type="submit">Submit</button>
      </div>
    </form>
    <div ref={divContainer}>Hellooo</div>
  </>;
};

export default UseRefBasics;

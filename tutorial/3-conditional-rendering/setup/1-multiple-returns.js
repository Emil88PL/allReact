import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setisLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('default user')

  useEffect(() => {
    // setisLoading(true)
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json()
        } else {
          setisLoading(false)
          setIsError(true)
          throw new Error(resp.statusText)
        }
      })
      .then((user) => {
        const { login } = user
        setUser(login)
        setisLoading(false)
      })
      .catch(error => console.log(error))
  }, [])

  if (isLoading) {
    return <div>
      <h6>Loading....</h6 >
    </div>
  }
  if (isError) {
    return <div>
      <h6>Error...</h6 >
    </div>
  }
  return <div>
    <h5>{user}</h5>
  </div>
}

export default MultipleReturns;

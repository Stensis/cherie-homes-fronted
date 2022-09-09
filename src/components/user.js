import React from 'react'
import { useState, useEffect } from 'react'

function User() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/users')
      .then((r) => r.json())
      .then((users) => setUsers(users))
  }, [])

  return (
    <>
      {users.map((val, key) => (
        <div>
          <h3>users:{val.name}</h3>
          <h3>users:{val.contact}</h3>
          <h3>users:{val.email}</h3>
        </div>
      ))}
    </>
  )
}
export default User;
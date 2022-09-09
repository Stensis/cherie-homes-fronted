import React from 'react'
import { useState, useEffect } from 'react'

function Vendor() {

  const [vendors, setVendors] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/vendors')
      .then((r) => r.json())
      .then((games) => setVendors(vendors))
  }, [])

  return (
    <>
      {vendors.map((val, key) => (
        <div>
          <h3>vendor:{val.name}</h3>
          <h3>vendor:{val.phonenumber}</h3>
        </div>
      ))}
    </>
  )
}
  
export default Vendor

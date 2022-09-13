import React, {useEffect, useState}from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import "../App.css"

function Vendor(){
    const [vendor, setVendor] = useState([])
    useEffect(()=> {
        fetch("https://backend-for-cherie-homes.herokuapp.com/vendors")
        .then((res)=>  res.json())
        .then((data)=>{
            console.log(data)
            setVendor(data)
        })
    }, [])
    function deleteVendor(id){
        fetch(`https://backend-for-cherie-homes.herokuapp.com/vendors/${id}`,{
            method: "DELETE",
        })
        .then(r => r.json())
        .then(() => {
            const deleting = vendor.filter((house) => house.id !== id)
                setVendor(deleting)
            })
      }
    return(
        <div>
            {vendor.map((house)=>{
          return(<div>
        <Card className="card" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{house.name}</Card.Title>
            <Card.Text>{house.phone_number}</Card.Text>
            <Card.Text>{house.location}</Card.Text>
          </Card.Body>
          <Button onClick={() => {
                  deleteVendor(vendor.id) }}>Delete</Button>
        </Card>
          </div>
          )
        })}
        </div>
    )
}
export default Vendor

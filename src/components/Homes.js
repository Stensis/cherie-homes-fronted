import React from 'react'
import '../App.css'
import { useState } from 'react'
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button'

function Homes() {
  // USE STATE
  const [house, setHouse] = useState([])
  const [HouseType, setHouseType] = useState('')
  const [Location, setLocation] = useState('')
  const [EstimatedCost, setEstimatedCost] = useState('')
  const [NumberOfRooms, setNumberOfRooms] = useState(0)
  const [FloorNumber, setFloorNumber] = useState(0)

  // GET METHOD
  const houses = () => {
    fetch('https://backend-for-cherie-homes.herokuapp.com/houses')
      .then((data) => console.log('houses:', data))
      .catch((err) => console.log(err))
  }

  //POST METHOD
  const addHome = () => {
    fetch('https://backend-for-cherie-homes.herokuapp.com/houses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        HouseType: HouseType,
        Location: Location,
        EstimatedCost: EstimatedCost,
        NumberOfRooms: NumberOfRooms,
        FloorNumber: FloorNumber,
      }),
    })
      .then((data) => console.log('house:', data))
      .catch((err) => console.log(err))
  }
 
  // Delete
  function deletehouse(id){
    fetch(`https://backend-for-cherie-homes.herokuapp.com/houses/${id}`,{
        method: "DELETE",
    })
    .then(r => r.json())
    .then(() => {
        const deleting = houses.filter((house) => house.id !== id)
            setHouse(deleting)
        })
  }





  return (
    <>
      <form className="new-message" onSubmit={addHome}>
        <div className="homes">
          <div className="homes-info"></div>
          <label>House Type:</label>
          <input
            className="w3-input w3-border w3-round-large"
            type="text"
            onChange={(event) => {
              setHouseType(event.target.value)
            }}
          />
          <label>Location:</label>
          <input
            className="w3-input w3-border w3-round-large"
            type="text"
            onChange={(event) => {
              setLocation(event.target.value)
            }}
          />
          <label>Estimated Cost:</label>
          <input
            className="w3-input w3-border w3-round-large"
            type="text"
            onChange={(event) => {
              setEstimatedCost(event.target.value)
            }}
          />
          <label>Number Of Rooms:</label>
          <input
            className="w3-input w3-border w3-round-large"
            type="number"
            onChange={(event) => {
              setNumberOfRooms(event.target.value)
            }}
          />
          <label>Floor Number:</label>
          <input
            className="w3-input w3-border w3-round-large"
            type="number"
            onChange={(event) => {
              setFloorNumber(event.target.value)
            }}
          />
          <div className="butto">
            <button onClick={addHome()} className="btn btn-outline-primary">
              addHome
            </button>
          </div>
        </div>
      </form>

      <div className="butto">
        <button onClick={addHome()} className="btn btn-outline-primary">
          Delete House
        </button>
      </div>

    </>
  )
}
export default Homes

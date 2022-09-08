import React from 'react'
import '../App.css'
import { useState } from 'react'

function Apartment() {
  const [HouseType, setHouseType] = useState('')
  const [Location, setLocation] = useState('')
  const [EstimatedCost, setEstimatedCost] = useState('')
  const [NumberOfRooms, setNumberOfRooms] = useState(0)
  const [FloorNumber, setFloorNumber] = useState(0)

  const [houses,setHouses] = useState([])

  const addHouse = () => {
    fetch('http://localhost:9292/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        HouseType: HouseType,
        Location: Location,
        EstimatedCost: EstimatedCost,
        NumberOfRooms: NumberOfRooms,
        FloorNumber: FloorNumber,
      })
    })
    .then(() => r.json())
  }

  const getHouse = () => {
    Axios.get('http://localhost:9292/houses').then(response)
      setHouses(response.data)
  }



  // (tested if m.y usestate is working)
  // const displayInfo = () => {
  //   console.log(
  //     HouseType + Location + EstimatedCost + NumberOfRooms + FloorNumber,
  //   )
  // }
  return (
    <div className="apar">
      <div className="apar-info">
        <label>House Type:</label>
        <input
          type="text"
          onChange={(event) => {
            setHouseType(event.target.value)
          }}
        />
        <label>Location:</label>
        <input
          type="text"
          onChange={(event) => {
            setLocation(event.target.value)
          }}
        />
        <label>Estimated Cost:</label>
        <input
          type="text"
          onChange={(event) => {
            setEstimatedCost(event.target.value)
          }}
        />
        <label>Number Of Rooms:</label>
        <input
          type="number"
          onChange={(event) => {
            setNumberOfRooms(event.target.value)
          }}
        />
        <label>Floor Number:</label>
        <input
          type="number"
          onChange={(event) => {
            setFloorNumber(event.target.value)
          }}
        />
        <button onClick={addHouse}>~Add House~</button>
      </div>
      <hr />
      <div className="houses">
      <button onClick={getHouse} class="btn btn-outline-primary">Show House</button>
      {getHouse.map((val,key) => {
        return<div>
          <h3>HouseType:{val.HouseType}</h3>
        </div>
      })}
      </div>
    </div>
  )
}
export default Apartment

import React from 'react'
import '../App.css'
import { useState } from 'react'

function Homes() {
  // USE STATE

  const [HouseType, setHouseType] = useState('')
  const [Location, setLocation] = useState('')
  const [EstimatedCost, setEstimatedCost] = useState('')
  const [NumberOfRooms, setNumberOfRooms] = useState(0)
  const [FloorNumber, setFloorNumber] = useState(0)

  // GET METHOD
  const houses = () => {
    fetch('http://localhost:9292/houses')
      .then((data) => console.log('houses:', data))
      .catch((err) => console.log(err))
  }

  //POST METHOD
  const addHome = () => {
    fetch('http://localhost:9292/create_house', {
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
  const deletehouse = (id) => {
    fetch('http://localhost:9292/houses/'+id)
      .then((data) => console.log('houses:', data))
      .catch((err) => console.log(err))
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

      {/* DISPLAY */}
      {/* <div className="butto">
        <button onClick class="btn btn-outline-primary">
          Show House
        </button>
        {houses.map((key,val) => {
          return (
            <div>
              <h3>key.HouseType:{val.HouseType}</h3>
              <h3>key.PictureLink:{val.PictureLink}</h3>
              <h3>key.Location:{val.HouseType}</h3>
              <h3>key.EstimatedCost:{val.EstimatedCost}</h3>
            </div>
          )
        })}
      </div> */}
    </>
  )
}
export default Homes

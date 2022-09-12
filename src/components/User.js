import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function User(){
  const [apiData, setApiData] = useState([]);
  const [showAddUserForm, setShowAddUserForm] =useState(false);
  const [showUpdateUserForm, setShowUpdateUserForm] =useState(false);

  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState({
    id: "",
    name: "",
    contact: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  useEffect(() => {
      axios.get(`https://backend-for-cherie-homes.herokuapp.com/users`)
          .then((resp) => {
              console.log("data:", resp.data);
              setApiData(resp.data);
          })
  }, [])

  const editUser = (id, name, contact, email) => {
    console.log("new data: ", id, name, contact, email);
    axios.put(`https://backend-for-cherie-homes.herokuapp.com/users/${id}`, { params: { name: name, contact: contact, email: email}}).then((res) => {
          console.log(res.data);
          getData();
        });
    
  }

  const updateData = (Id, Name, Contact, Email) => {
    console.log(Id, Name, Contact, Email);
    setUser({...user, id: Id, name: Name, email: Email, contact: Contact });
    setShowUpdateUserForm(true);
    console.log("newUser: ", user);
  }

  const getData = () => {
    axios.get(`https://backend-for-cherie-homes.herokuapp.com/users`)
      .then((resp) => {
          setApiData(resp.data);
      }
    )
  }

  const onDelete = (id) => {
    axios.delete(`https://backend-for-cherie-homes.herokuapp.com/users/${id}`)
    .then((res) => {
        console.log(`User ID: ${id} Deleted`);
        console.log(res.data);
        getData();
    })
  }

  const addUser = () => {
    setShowAddUserForm(true);
  }

  const saveUser =(name, contact, email) => {
    axios.post(`https://backend-for-cherie-homes.herokuapp.com/create_user?name=${name}&contact=${contact}&&email=${email}&`).then((res) => { 
      console.log("new user: ", res.data);
      getData();
    })
  }


  return(
    
    <>
      
        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="button" onClick={() => addUser()}>Add User</button>
        </div>
      
       <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>id</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Contact</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {apiData.length === 0 ? "Loading..." : apiData.map((value) => (
                            <Table.Row key={value.id}>
                                <Table.Cell>{value.id}</Table.Cell>
                                <Table.Cell>{value.name}</Table.Cell>
                                <Table.Cell>{value.contact}</Table.Cell>
                                <Table.Cell>{value.email}</Table.Cell>
                                <Table.Cell>
                                        <Button
                                            color="green"
                                            onClick={() => updateData(value.id, value.name, value.contact, value.email)}>
                                            Update
                                        </Button>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button color="red" onClick={() => onDelete(value.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        
                    ))}

                </Table.Body>
            </Table>

            <br />

            {/* form for adding user */}
            { showAddUserForm === true ? (
              <div className="d-flex justify-content-center">
                <form>
                  <fieldset>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label mt-4">Name</label>
                        <input type="text" className="form-control" id="name" value={name} onChange={ (event) => setName(event.target.value) }  placeholder="Enter Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact" className="form-label mt-4">Contact</label>
                        <input type="number" className="form-control" id="contact" value={contact} onChange={ (event) => setContact(event.target.value) }  placeholder="Enter Contact" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label mt-4">Email</label>
                        <input type="email" className="form-control" id="email" value={email} onChange={ (event) => setEmail(event.target.value) }  placeholder="Enter Email" />
                    </div>
                  </fieldset>
                  <button type="submit" className="btn btn-primary" onClick={() => saveUser(name, contact, email)}>Submit</button>
                </form>
              </div>
            ) : ( console.log("form_hidden"))}


            {/* form for updating user */}
            { showUpdateUserForm === true ? (
              <div className="d-flex justify-content-center">
                <form>
                  <fieldset>
                    <div className="form-group">
                        <input type="hidden" id="id" value={user.id}  />
                        <label htmlFor="name" className="form-label mt-4">Name</label>
                        <input type="text" className="form-control" id="name" value={user.name} onChange={handleChange}  placeholder="Enter Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact" className="form-label mt-4">Contact</label>
                        <input type="number" className="form-control" id="contact" value={user.contact} onChange={handleChange}  placeholder="Enter Contact" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label mt-4">Email</label>
                        <input type="email" className="form-control" id="email" value={user.email} onChange={handleChange}  placeholder="Enter Email" />
                    </div>
                  </fieldset>
                  <button type="submit" className="btn btn-primary" onClick={() => editUser(userId, user.name, user.contact, user.email)}>Submit</button>
                </form>
              </div>
            ) : ( console.log("update_form_hidden"))}
            
    </>

        
  )
}

export default User;
import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';


function App() {
  const {users,setUsers} = useState([]);
  const API_URL = 'http://localhost:8000/person';

  useEffect (()=>{
    getAllData();
  },[]);

  async function getAllData(){
    
    const response = await axios.get (API_URL)
    setUsers(response.data);
  }
  
  return (
    <div className='wrapper'>
      <div className='header'>
        <h3>Tambah Pengguna</h3>
        <form className='input-box' type='submit'>
          <input type='text' placeholder='Nama' />
          <input type='email' placeholder='Email' />
          <button type='submit'>Simpan</button>
        </form>
      </div>
      <div className='data-pengguna'>
      <h3>Data Pengguna</h3>
          <ul> 
            {
              users.map((user)=>(
             <li>
              <div>
                {user.name} <span className='email'>{user.email}</span>
              </div>
              <div>
                <a href='#' className='edit'>Edit</a> - <a href='#' className='delete'>Delete</a>
              </div>
            </li>
              ))
            }
          
          </ul>
      </div>
     </div>
  )
}

export default App
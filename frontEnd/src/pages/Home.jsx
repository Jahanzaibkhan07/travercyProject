import React from 'react'
import Client from "../components/Client";
import Projects from "../components/Projects";
import AddClientModal from "../components/AddClientModal";
export default function Home() {
  return (
    <div className='m-3'> 
    <div className="d-flex">
      <h3 className='me-3'>Clients Details</h3>
         <AddClientModal />
          {/* <Projects /> */}
        </div>
          <hr/>
         <Client />
          </div>
  )
}

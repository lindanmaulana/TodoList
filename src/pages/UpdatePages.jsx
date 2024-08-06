import React from 'react'
import NavbarComponent from '../components/Navbar/NavbarComponent'
import { Container } from 'react-bootstrap'
import UpdateTable from '../components/Update/UpdateTable'

const UpdatePages = () => {
  return (
    <>
      <NavbarComponent />
      <Container>
        <UpdateTable />
      </Container>
    </>
  )
}

export default UpdatePages

import { Button, Table } from "react-bootstrap"
import { useMutation, useQuery } from "react-query"
import { deleteTodoServices, readTodoServices } from "../../services/todos.services"
import AlertComponent from "../Alert/AlertComponent"
import { useState } from "react"
import ModalsComponent from "../Modals/ModalsComponent"

const UpdateTable = () => {
    const [show, setShow] = useState(false)
    const [title, setTitle] = useState(null)
    const [idUsers, setIdUsers] = useState(null)
    const {data} = useQuery("Update Todo", readTodoServices)
    const {mutate} = useMutation(deleteTodoServices)

    const handleDelete = () => {
        mutate(idUsers)
        setTitle("Delete succes")
        setShow(false)
    }

    const handleShow = (id) => {
        setIdUsers(id)
        setShow(true)
    }

    const handleClose = () => {
        setShow(false)
    }

  return (
    <>
    {/* <AlertComponent title={title} condition={show}/> */}
    <ModalsComponent title={title} show={show} handleShow={handleDelete} handleClose={handleClose} />
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Address</th>
      </tr>
    </thead>
    {data?.map((res, index) => (
      <tbody key={res.id}>
        <tr>
          <td>{index + 1}</td>
          <td>{res.name}</td>
          <td>{res.address}</td>
          <td>
          <Button
            onClick={() => handleShow(res.id)}
            variant="danger"
            style={{ backgroundColor: "red", marginRight: "5px", color: "white" }}
          >
            Delete
          </Button>
          <Button
            onClick={() => handleShow(res.id)}
            variant="danger"
            style={{ backgroundColor: "blue", color: "white" }}
          >
            Update
          </Button>
          </td>
        </tr>
      </tbody>
    ))}
  </Table>
    </>
  )
}

export default UpdateTable

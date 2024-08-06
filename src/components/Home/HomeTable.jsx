import { Button, Table } from "react-bootstrap";
import { useQuery } from "react-query";
import { readTodoServices } from "../../services/todos.services";

const HomeTable = () => {
  const { data, isLoading, error } = useQuery("ReadTodo", readTodoServices);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Address</th>
            <th></th>
          </tr>
        </thead>
        {data?.map((res, index) => (
          <tbody key={res.id}>
            <tr>
              <td>{index + 1}</td>
              <td>{res.name}</td>
              <td>{res.address}</td>
              <td>
                {" "}
                <Button
                  onClick={() => handleDelete(res.id)}
                  variant="danger"
                  style={{ backgroundColor: "blue", color: "white" }}
                >
                  View
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </>
  );
};

export default HomeTable;

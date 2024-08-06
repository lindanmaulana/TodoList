import {  useField } from "formik";
import { Button, Dropdown, DropdownButton, Form } from "react-bootstrap";

const AddFormikView = ({ formik }) => {
  const handleChange = (event) => {
    formik.setFieldValue(event.target.name, event.target.value);
  };

  const [genderField] = useField("gender");

  return (
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Enter username"
          />
          <Form.Text className="text-muted">
            Well never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Address</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="text"
            name="address"
            placeholder="Enter address"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Born</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="text"
            name="born"
            placeholder="Enter born"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Gender</Form.Label>
          <DropdownButton
            title={genderField.value || "Select Gender"}
            onSelect={(eventKey) => {
              formik.setFieldValue("gender", eventKey);
            }}
            id="dropdown-basic-button"
          >
            <Dropdown.Item eventKey="male">Male</Dropdown.Item>
            <Dropdown.Item eventKey="female">Female</Dropdown.Item>
            <Dropdown.Item eventKey="others">Others</Dropdown.Item>
          </DropdownButton>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Telepon</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="text"
            inputMode="numeric"
            name="telepon"
            placeholder="Enter telepon"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
  );
};

export default AddFormikView;

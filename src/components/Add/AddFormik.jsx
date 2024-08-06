import { Formik, useFormik } from "formik";
import AddFormikView from "./AddFormikView";
import { useMutation } from "react-query";
import { postTodosServices } from "../../services/todos.services";
import { useState } from "react";
import { Alert, Button } from "react-bootstrap";

const AddFormik = () => {
  const [show, setShow] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      born: "",
      gender: "",
      telepon: "",
    },
    onSubmit: (values) => {
      mutate();
      console.log({
        status: "Succes",
        data: values,
      });

      setShow(true);
    },
  });

  const { mutate } = useMutation({
    mutationFn: () => {
      postTodosServices(formik.values);
    },
  });

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>Add Users Succes</Alert.Heading>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>
      <Formik>
        <AddFormikView formik={formik} />
      </Formik>
    </>
  );
};

export default AddFormik;

import React, { useEffect, useState } from "react";
import { Alert, Button } from "react-bootstrap";

const AlertComponent = (props) => {
    const {title, condition} = props

    const [show, setShow] = useState(false)
    

    useEffect(() => {
        if(condition) {
            setShow(condition)
        }
    }, [condition])

  return (
    <Alert show={show} variant="success">
      <Alert.Heading>{title}</Alert.Heading>
      <hr />
      <div className="d-flex justify-content-end">
        <Button onClick={() => setShow(false)} variant="outline-success">
          Close me
        </Button>
      </div>
    </Alert>
  );
};

export default AlertComponent;

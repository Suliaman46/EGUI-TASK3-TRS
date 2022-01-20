//IN PROGRESSS

import React, { useEffect } from "react";
import { Form, Field } from "react-final-form";
import { Navigate, useNavigate } from "react-router-dom";
import BootForm from "react-bootstrap/Form";
import useSubCodes from "../hooks/useSubCodes";
import BootSelect from "./helper/BootstrapSelect";
import { useLocation } from "react-router-dom";
import axios from "axios";
const onSubmit = async (values) => {
  console.log(values);
  // var toSend = {};
  // values["date"] = new Date().toISOString().substring(0, 10);
  // toSend["entryDetails"] = values;
  // toSend["userName"] = props.userName;
  // console.log(toSend);
  // const result = await axios.post("http://localhost:3001/addentry", toSend);
  // console.log(result);
  // navigate("/");
};

let formData = {};

const EditEntry = () => {
  const location = useLocation();

  const { entryID, userName, dateString, code, description, time, subCode } =
    location.state;
  const [subCodeList, fetchSubCodeList] = useSubCodes(code);
  const navigate = useNavigate();

  const renderedSubCodes = subCodeList.map((subCode) => {
    return <option key={subCode}>{subCode}</option>;
  });

  const onSubmit = async (values) => {
    // console.log(values);
    var toSend = {};
    values["date"] = dateString;
    values["id"] = entryID;
    toSend["entryDetails"] = values;
    toSend["userName"] = userName;
    console.log(toSend);
    const result = await axios.put("http://localhost:3001/editentry", toSend);
    // console.log(result);
    navigate("/");
  };

  useEffect(() => {}, []);

  return (
    <div className="container w-50 pt-2 border " style={{ marginTop: "10px" }}>
      <Form
        onSubmit={onSubmit}
        initialValues={formData}
        render={({ handleSubmit }) => (
          <BootForm onSubmit={handleSubmit} className="mb-3">
            <BootForm.Group className="mb-3">
              <BootForm.Label className="fw-bold fs-5">Code</BootForm.Label>
              <Field
                name="code"
                component={BootForm.Control}
                initialValue={code}
                placeholder={code}
                disabled={true}
              />
            </BootForm.Group>
            <BootForm.Group className="mb-3">
              <BootForm.Label className="fw-bold fs-5">Sub Code</BootForm.Label>
              <Field
                name="subCode"
                component={BootSelect}
                options={renderedSubCodes}
                initialValue={subCode}
                disabled={subCodeList.length === 0 ? true : false}
              ></Field>
            </BootForm.Group>
            <BootForm.Group className="mb-3">
              <BootForm.Label className="fw-bold fs-5">Time</BootForm.Label>
              <Field name="time" initialValue={time}>
                {(props) => (
                  <BootForm.Control
                    type="number"
                    min={1}
                    // placeholder={time}
                    value={props.input.value}
                    onChange={props.input.onChange}
                  ></BootForm.Control>
                )}
              </Field>
            </BootForm.Group>
            <BootForm.Group className="mb-3">
              <BootForm.Label className="fw-bold fs-5">
                Description
              </BootForm.Label>
              <Field name="description" initialValue={description}>
                {(props) => (
                  <BootForm.Control
                    type="text"
                    value={props.input.value}
                    onChange={props.input.onChange}
                  ></BootForm.Control>
                )}
              </Field>
            </BootForm.Group>
            <div className="col-md-12 text-center">
              <button className="btn-lg btn-primary mx-3" type="submit">
                Submit
              </button>
              <button
                className="btn-lg btn-warning mx-3"
                type="back"
                onClick={() => {
                  navigate("/");
                }}
              >
                Cancel
              </button>
            </div>
          </BootForm>
        )}
      />
    </div>
  );
};

export default EditEntry;

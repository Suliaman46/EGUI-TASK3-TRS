import React, { useEffect } from "react";
import { Form, Field } from "react-final-form";
import { useNavigate } from "react-router-dom";
import BootForm from "react-bootstrap/Form";
import useSubCodes from "../hooks/useSubCodes";
import BootSelect from "./helper/BootstrapSelect";
import { useLocation } from "react-router-dom";
import axios from "axios";

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
    var toSend = {};
    values["date"] = dateString;
    values["id"] = entryID;
    toSend["entryDetails"] = values;
    toSend["userName"] = userName;
    await axios.put("http://localhost:3001/editentry", toSend);
    navigate("/Home");
  };

  useEffect(() => {}, []);

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100 ">
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-dark text-white "
              style={{ borderRadius: "2rem", width: "36rem" }}
            >
              <div className="card-body p-5">
                <Form
                  onSubmit={onSubmit}
                  initialValues={formData}
                  render={({ handleSubmit }) => (
                    <BootForm onSubmit={handleSubmit} className="mb-3">
                      <BootForm.Group className="mb-3">
                        <BootForm.Label className="fw-bold fs-5">
                          Code
                        </BootForm.Label>
                        <Field
                          name="code"
                          component={BootForm.Control}
                          initialValue={code}
                          placeholder={code}
                          disabled={true}
                        />
                      </BootForm.Group>
                      <BootForm.Group className="mb-3">
                        <BootForm.Label className="fw-bold fs-5">
                          Sub Code
                        </BootForm.Label>
                        <Field
                          name="subCode"
                          component={BootSelect}
                          options={renderedSubCodes}
                          initialValue={subCode}
                          disabled={subCodeList.length === 0 ? true : false}
                        ></Field>
                      </BootForm.Group>
                      <BootForm.Group className="mb-3">
                        <BootForm.Label className="fw-bold fs-5">
                          Time
                        </BootForm.Label>
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
                        <button
                          className="btn-lg btn-primary mx-3"
                          type="submit"
                        >
                          Submit
                        </button>
                        <button
                          className="btn-lg btn-warning mx-3"
                          type="button"
                          onClick={() => {
                            navigate("/Home");
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </BootForm>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditEntry;

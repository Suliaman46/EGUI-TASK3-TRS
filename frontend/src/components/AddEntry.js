import { React, useState, useEffect } from "react";
import { Form, Field } from "react-final-form";
import { Navigate, useNavigate } from "react-router-dom";
import BootForm from "react-bootstrap/Form";
import axios from "axios";
import useCodes from "../hooks/useCodes";
import useSubCodes from "../hooks/useSubCodes";
import BootSelect from "./helper/BootstrapSelect";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const AddEntry = () => {
  const userName = JSON.parse(localStorage.getItem("userName"));
  const [codeList, fetchCodeList] = useCodes();
  const [codeSelected, SetCodeSelected] = useState("");
  const [subCodeList, fetchSubCodeList] = useSubCodes(codeSelected);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    var toSend = {};
    values["date"] = new Date().toISOString().substring(0, 10);
    toSend["entryDetails"] = values;
    toSend["userName"] = userName;
    await axios.post("http://localhost:3001/addentry", toSend);
    navigate("/Home");
  };
  const renderedCodes = codeList.map((code) => {
    return <option key={code}>{code}</option>;
  });
  const renderedSubCodes = subCodeList.map((subCode) => {
    return <option key={subCode}>{subCode}</option>;
  });

  useEffect(() => {
    SetCodeSelected(codeList[0]);
  }, [codeList]);

  let formData = {};
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100 ">
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-dark text-white "
              style={{ borderRadius: "2rem", width: "32rem" }}
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
                          component={BootSelect}
                          options={renderedCodes}
                          initialValue={codeList[0]}
                          disabled={false}
                          inputOnChange={(e) => {
                            SetCodeSelected(e.target.value);
                          }}
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
                          initialValue={
                            subCodeList.length > 1 ? subCodeList[0] : ""
                          }
                          disabled={subCodeList.length === 0 ? true : false}
                        ></Field>
                      </BootForm.Group>
                      <BootForm.Group className="mb-3">
                        <BootForm.Label className="fw-bold fs-5">
                          Time
                        </BootForm.Label>
                        <Field name="time" initialValue={1}>
                          {(props) => (
                            <BootForm.Control
                              type="number"
                              min="1"
                              placeholder="1"
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
                        <Field name="description" initialValue={""}>
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
                          className="btn-lg btn-primary  mx-3"
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

export default AddEntry;

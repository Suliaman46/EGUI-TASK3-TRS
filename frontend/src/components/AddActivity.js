import React from "react";
import { Form, Field } from "react-final-form";
import BootForm from "react-bootstrap/Form";
import useCodes from "../hooks/useCodes";
import { useNavigate } from "react-router-dom";

const required = (value) => (value ? undefined : "Required");
const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );
const AddActivity = () => {
  const [codeList, fetchCodeList] = useCodes();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    console.log(values);
  };
  let formData = {};
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-3 h-100 ">
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col-12 col-md-8 col-lg-6 col-xl-6">
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
                        <Field name="code" validate={required}>
                          {(props) => (
                            <div>
                              <BootForm.Control
                                type="text"
                                placeholder=""
                                value={props.input.value}
                                onChange={props.input.onChange}
                              ></BootForm.Control>
                              {props.meta.error && props.meta.touched && (
                                <span className="fw-bold text-danger">
                                  {props.meta.error}
                                </span>
                              )}
                            </div>
                          )}
                        </Field>
                      </BootForm.Group>
                      <BootForm.Group className="mb-3">
                        <BootForm.Label className="fw-bold fs-5">
                          Manager
                        </BootForm.Label>
                        <Field name="manager" validate={required}>
                          {(props) => (
                            <div>
                              <BootForm.Control
                                type="text"
                                value={props.input.value}
                                onChange={props.input.onChange}
                              ></BootForm.Control>
                              {props.meta.error && props.meta.touched && (
                                <span className="fw-bold text-danger">
                                  {props.meta.error}
                                </span>
                              )}
                            </div>
                          )}
                        </Field>
                      </BootForm.Group>
                      <BootForm.Group className="mb-3">
                        <BootForm.Label className="fw-bold fs-5">
                          Budget
                        </BootForm.Label>
                        <Field
                          name="budget"
                          initialValue={1}
                          validate={required}
                        >
                          {(props) => (
                            <div>
                              {" "}
                              <BootForm.Control
                                type="number"
                                min="1"
                                placeholder="1"
                                value={props.input.value}
                                onChange={props.input.onChange}
                              ></BootForm.Control>
                              {props.meta.error && props.meta.touched && (
                                <span className="fw-bold text-danger">
                                  {props.meta.error}
                                </span>
                              )}
                            </div>
                          )}
                        </Field>
                      </BootForm.Group>
                      <BootForm.Group className="mb-3">
                        <BootForm.Label className="fw-bold fs-5">
                          Name
                        </BootForm.Label>
                        <Field
                          name="name"
                          initialValue={""}
                          validate={required}
                        >
                          {(props) => (
                            <div>
                              <BootForm.Control
                                type="text"
                                value={props.input.value}
                                onChange={props.input.onChange}
                              ></BootForm.Control>
                              {props.meta.error && props.meta.touched && (
                                <span className="fw-bold text-danger">
                                  {props.meta.error}
                                </span>
                              )}
                            </div>
                          )}
                        </Field>
                      </BootForm.Group>
                      <BootForm.Group className="mb-3">
                        <BootForm.Label className="fw-bold fs-5">
                          Sub Codes
                        </BootForm.Label>
                        <Field name="subCode" initialValue={""}>
                          {(props) => (
                            <BootForm.Control
                              type="text"
                              placeholder="UI,UX,DB"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddActivity;

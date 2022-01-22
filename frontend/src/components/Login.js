import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";

const required = (value) => (value ? undefined : "Required");

const Login = () => {
  const navigate = useNavigate();
  const onSubmit = (values) => {
    console.log(values.userName);
    localStorage.setItem("userName", JSON.stringify(values.userName));
    navigate("/Home");
  };

  let formData = {};
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">Please enter your name</p>
                  <Form
                    onSubmit={onSubmit}
                    initialValues={formData}
                    render={({ handleSubmit }) => (
                      <Field
                        name="userName"
                        initialValue={""}
                        validate={required}
                      >
                        {(props) => (
                          <form onSubmit={handleSubmit}>
                            <div className="form-outline form-white mb-4">
                              <input
                                {...props.input}
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="User Name"
                              />
                              {props.meta.error && props.meta.touched && (
                                <span className="fw-bold text-danger">
                                  {props.meta.error}
                                </span>
                              )}
                            </div>
                            <button
                              className="btn btn-outline-light btn-lg px-5"
                              type="submit"
                            >
                              Login
                            </button>
                          </form>
                        )}
                      </Field>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
const Login = ({ setName }) => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const onFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", JSON.stringify(userName));
    // setName(userName);
    navigate("/Home");
  };
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
                  <form onSubmit={(e) => onFormSubmit(e)}>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        id="userName"
                        className="form-control form-control-lg"
                        placeholder="User Name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </div>
                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      Login
                    </button>
                  </form>
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

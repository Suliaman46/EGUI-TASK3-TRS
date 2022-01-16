import { React, useState, useEffect } from "react";
import { Form, Field } from "react-final-form";
import { Navigate, useNavigate } from "react-router-dom";

import BootForm from "react-bootstrap/Form";
import axios from "axios";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  console.log("was printed on submit");
  console.log(values);
};

const AddEntry = (props) => {
  const [codeList, SetCodeList] = useState([]);
  const [codeSelected, SetCodeSelected] = useState("");
  const [subCodelist, setSubCodeList] = useState([]);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    var toSend = {};
    values["date"] = new Date().toISOString().substring(0, 10);
    toSend["entryDetails"] = values;
    toSend["userName"] = props.userName;
    console.log(toSend);
    const result = await axios.post("http://localhost:3001/addentry", toSend);
    console.log(result);
    navigate("/");
  };
  const renderedCodes = codeList.map((code) => {
    return <option key={code}>{code}</option>;
  });
  const renderedSubCodes = subCodelist.map((subCode) => {
    return <option key={subCode}>{subCode}</option>;
  });

  const BootSelect = ({ input, inputOnChange, options, disabled }) => {
    const inputProps = {
      ...input,
      onChange: (e) => {
        input.onChange(e);
        inputOnChange && inputOnChange(e);
      },
    };

    return (
      <BootForm.Select {...inputProps} disabled={disabled}>
        {options}
      </BootForm.Select>
    );
  };

  useEffect(() => {
    const getCodeList = async () => {
      const result = await axios.get("http://localhost:3001/codelist");
      SetCodeList(result.data);
      SetCodeSelected(result.data[0]);
    };
    getCodeList();
  }, []);

  useEffect(() => {
    if (!codeSelected) {
      console.log("No code Selected");
    } else {
      const getSubCodeList = async () => {
        const result = await axios.get("http://localhost:3001/subcodelist", {
          params: {
            code: codeSelected,
          },
        });
        setSubCodeList(result.data);
      };
      getSubCodeList();
    }
  }, [codeSelected]);
  let formData = {};

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
              <BootForm.Label className="fw-bold fs-5">Sub Code</BootForm.Label>
              <Field
                name="subCode"
                component={BootSelect}
                options={renderedSubCodes}
                initialValue={subCodelist[0] ? subCodelist[0] : ""}
                disabled={subCodelist.length === 0 ? true : false}
              />
            </BootForm.Group>
            <BootForm.Group className="mb-3">
              <BootForm.Label className="fw-bold fs-5">Time</BootForm.Label>
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

export default AddEntry;

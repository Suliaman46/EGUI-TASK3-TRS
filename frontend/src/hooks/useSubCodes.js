import { useState, useEffect } from "react";
import axios from "axios";

const useSubCodes = (codeSelected) => {
  const [subCodeList, SetSubCodeList] = useState([]);

  const fetchSubCodeList = async (codeSelected) => {
    const result = await axios.get("http://localhost:3001/subcodelist", {
      params: {
        code: codeSelected,
      },
    });
    SetSubCodeList(result.data);
  };
  useEffect(() => {
    fetchSubCodeList(codeSelected);
  }, [codeSelected]);

  return [subCodeList, fetchSubCodeList];
};

export default useSubCodes;
//in progress

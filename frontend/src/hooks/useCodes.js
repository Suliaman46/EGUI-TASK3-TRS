import { useState, useEffect } from "react";
import axios from "axios";

const useCodes = () => {
  const [codeList, SetCodeList] = useState([]);

  const fetchCodeList = async () => {
    const result = await axios.get("http://localhost:3001/codelist");
    SetCodeList(result.data);
  };
  useEffect(() => {
    fetchCodeList();
  }, []);

  return [codeList, fetchCodeList];
};

export default useCodes;

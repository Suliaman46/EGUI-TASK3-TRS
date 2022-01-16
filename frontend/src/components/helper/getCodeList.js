import axios from "axios";
import { React, useState, useEffect } from "react";

const getCodeList = async () => {
  const codeList = await axios.get("http://localhost:3001/codelist");
};

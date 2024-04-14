// get terms

import { useEffect, useState } from "react";
import { API_URL } from "../../../shared/env";
import { ITerm } from "../models";

const useTerm = () => {
  const [terms, setTerms] = useState<ITerm[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    console.log("data fetch");
    const response = await fetch(API_URL.concat("api/term/getAllTerms"), {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        "Allow-Origin-Access-Control": "*",
      },
    });
    const data = await response.json();
    console.log("term", data);
    setTerms(data);
  };
  return { terms };
};

export default useTerm;

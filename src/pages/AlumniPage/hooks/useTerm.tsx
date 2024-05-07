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
    try {
      const response = await fetch(API_URL.concat("api/term/getAllTerms"), {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
          "Allow-Origin-Access-Control": "*",
        },
      });
      const data = await response.json();
      setTerms(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return { terms };
};

export default useTerm;
